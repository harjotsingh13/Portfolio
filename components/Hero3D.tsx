"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Sparkles } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

function Scene({ fogColor }: { fogColor: string }) {
  return (
    <>
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Cyber-tech Environment / Particles - Reduced density for performance */}
      <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#00f3ff" />
      <Sparkles count={50} scale={12} size={1.5} speed={0.2} opacity={0.3} color="#bc13fe" />
      
      {/* Futuristic Floor Grid */}
      <gridHelper args={[20, 20, "#bc13fe", "#222"]} position={[0, -2, 0]} />
      
      <Environment preset="city" />
      <fog attach="fog" args={[fogColor, 2, 10]} />
    </>
  );
}

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const fogColor = theme === "light" ? "#f8f9fc" : "#050505";

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // DESKTOP: Alternating Left/Right Narrative
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Pre-set Phase 1
      gsap.set("#text-1", { opacity: 1, y: 0 });

      // Phase 1->2
      tl.to("#text-1", { opacity: 0, y: -40, duration: 0.5, ease: "power2.in" }, 0.5);
      tl.fromTo("#text-2", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.7);

      // Phase 2->3
      tl.to("#text-2", { opacity: 0, y: -40, duration: 0.5, ease: "power2.in" }, 1.8);
      tl.fromTo("#text-3", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 2.0);

      // Phase 3->4
      tl.to("#text-3", { opacity: 0, y: -40, duration: 0.5, ease: "power2.in" }, 3.0);
      tl.fromTo("#text-4", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 3.2);

      tl.to("#hero-content", { opacity: 0, duration: 0.5 }, 3.8);

      return () => { tl.kill(); };
    });

    mm.add("(max-width: 1023px)", () => {
      // MOBILE/TABLET: Centered Text Above or Below the strictly centered Image
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Initial state
      gsap.set("#text-1", { opacity: 1, y: 0 });

      // Transition sequences
      tl.to("#text-1", { opacity: 0, y: -30, duration: 0.5, ease: "power2.in" }, 0.5);
      tl.fromTo("#text-2", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.7);

      tl.to("#text-2", { opacity: 0, y: -30, duration: 0.5, ease: "power2.in" }, 1.8);
      tl.fromTo("#text-3", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 2.0);

      tl.to("#text-3", { opacity: 0, y: -30, duration: 0.5, ease: "power2.in" }, 3.0);
      tl.fromTo("#text-4", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 3.2);

      tl.to("#hero-content", { opacity: 0, duration: 0.5 }, 3.8);

      return () => { tl.kill(); };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative h-[400vh] w-full bg-[var(--bg-primary)]">
      {/* Sticky container bounds all absolute elements */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Gradient Glow */}
        <div className="absolute inset-0 bg-hero-glow opacity-20 blur-[100px] z-0 pointer-events-none" />

        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
            <Scene fogColor={fogColor} />
          </Canvas>
        </div>

        {/* 2D Scroll DOM Overlay */}
        <div id="hero-content" className="absolute inset-0 z-10 pointer-events-none px-4 lg:px-12 w-full max-w-screen-2xl mx-auto flex items-center justify-center">
          
          {/* Floating Glass Image - STRICTLY CENTERED */}
          <div 
            id="hero-image-container" 
            className="absolute top-[55%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 will-change-transform"
            style={{ width: '320px', height: '450px', maxWidth: '75vw', maxHeight: '55vh' }}
          >
            <div 
              className="w-full h-full relative glass p-3 bg-[var(--hero-image-bg)] backdrop-blur-xl"
              style={{ borderRadius: '1.5rem', border: '1px solid rgba(0, 243, 255, 0.4)', boxShadow: '0 0 50px rgba(0,243,255,0.2)' }}
            >
              <Image 
                src="/mypic.png" 
                alt="Harjot Singh Developer" 
                fill 
                className="object-cover object-top" 
                style={{ borderRadius: '1rem' }}
                priority
              />
            </div>
          </div>
          
          {/* GSAP Texts Container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-30">
            
            {/* Text 1: LEFT ALIGNED (Right bound) on Desktop, CENTER TOP on Mobile */}
            <div id="text-1" className="absolute top-[15%] lg:top-1/2 left-1/2 lg:left-auto lg:right-[50%] -translate-x-1/2 lg:-translate-x-0 lg:-translate-y-1/2 lg:mr-48 xl:mr-64 flex flex-col items-center lg:items-end text-center lg:text-right opacity-0 will-change-transform w-full lg:max-w-lg px-4 lg:px-0">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold font-sans neon-text-blue drop-shadow-2xl leading-tight tracking-tight">
                Hi, I&apos;m Harjot Singh
              </h1>
            </div>

            {/* Text 2: RIGHT ALIGNED (Left bound) on Desktop, CENTER TOP on Mobile */}
            <div id="text-2" className="absolute top-[15%] lg:top-1/2 left-1/2 lg:left-[50%] -translate-x-1/2 lg:-translate-x-0 lg:-translate-y-1/2 lg:ml-48 xl:ml-64 flex flex-col items-center lg:items-start text-center lg:text-left opacity-0 will-change-transform w-full lg:max-w-lg px-4 lg:px-0">
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold font-sans text-[var(--text-primary)] drop-shadow-xl leading-tight tracking-tight">
                I Build Intelligent AI Systems That Solve Real Problems
              </h2>
            </div>

            {/* Text 3: LEFT ALIGNED (Right bound) on Desktop, CENTER TOP on Mobile */}
            <div id="text-3" className="absolute top-[15%] lg:top-1/2 left-1/2 lg:left-auto lg:right-[50%] -translate-x-1/2 lg:-translate-x-0 lg:-translate-y-1/2 lg:mr-48 xl:mr-64 flex flex-col items-center lg:items-end text-center lg:text-right opacity-0 will-change-transform w-full lg:max-w-lg px-4 lg:px-0">
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold font-sans neon-text-purple drop-shadow-xl leading-tight tracking-tight">
                Transforming Data into Actionable Business Insights
              </h2>
            </div>

            {/* Text 4: RIGHT ALIGNED (Left bound) on Desktop, CENTER TOP on Mobile */}
            <div id="text-4" className="absolute top-[15%] lg:top-1/2 left-1/2 lg:left-[50%] -translate-x-1/2 lg:-translate-x-0 lg:-translate-y-1/2 lg:ml-48 xl:ml-64 flex flex-col items-center lg:items-start text-center lg:text-left opacity-0 will-change-transform w-full lg:max-w-lg px-4 lg:px-0">
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold font-sans text-[var(--text-primary)] drop-shadow-2xl leading-tight tracking-tight">
                Engineering Scalable Machine Learning Solutions
              </h2>
            </div>

          </div>

        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce pointer-events-none">
          <span className="text-[var(--text-muted)] font-mono text-xs mb-2 tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neonBlue to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
