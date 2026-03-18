"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 120;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            // Format: frame_000_delay-0.066s.png
            const paddedIndex = i.toString().padStart(3, '0');
            img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const drawImage = useCallback((img: HTMLImageElement) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // object-fit: cover logic
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;

        let frameIndex = Math.floor(latest * (TOTAL_FRAMES - 1));
        frameIndex = Math.max(0, Math.min(frameIndex, TOTAL_FRAMES - 1));

        const img = images[frameIndex];
        if (img && img.complete) {
            drawImage(img);
        }
    });

    // Handle Resize & Initial Draw
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                // High DPI displays support
                const dpr = window.devicePixelRatio || 1;
                const rect = canvasRef.current.parentElement?.getBoundingClientRect();

                if (rect) {
                    canvasRef.current.width = rect.width * dpr;
                    canvasRef.current.height = rect.height * dpr;

                    // Style width/height
                    canvasRef.current.style.width = `${rect.width}px`;
                    canvasRef.current.style.height = `${rect.height}px`;

                    // Redraw current frame
                    const index = Math.floor(scrollYProgress.get() * (TOTAL_FRAMES - 1));
                    const img = images[index];
                    if (img && img.complete) drawImage(img);
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        // Draw first frame once loaded
        if (images.length > 0) {
            images[0].onload = () => drawImage(images[0]);
        }

        return () => window.removeEventListener("resize", handleResize);
    }, [images, scrollYProgress, drawImage]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                />
                <Overlay progress={scrollYProgress} />
            </div>
        </div>
    );
}
