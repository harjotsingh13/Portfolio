"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

function Scene({ fogColor }: { fogColor: string }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <Sparkles count={80} scale={10} size={2} speed={0.4} opacity={0.6} color="#00f3ff" />
      <Sparkles count={60} scale={12} size={1.5} speed={0.3} opacity={0.5} color="#00d1b2" />
      <Sparkles count={40} scale={15} size={2.5} speed={0.2} opacity={0.4} color="#0066ff" />
      <gridHelper args={[20, 20, "#00d1b2", "#002255"]} position={[0, -2, 0]} />
      <Environment preset="city" />
      <fog attach="fog" args={[fogColor, 2, 10]} />
    </>
  );
}

const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};

const typingCharacter = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.05 },
  },
};

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const fogColor = theme === "light" ? "#fafafa" : "#0a0a0a";

  const typingText = "I Build Intelligent AI Systems That Solve Real Problems";

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen w-full bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-20 blur-[100px] z-0 pointer-events-none" />

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          <Scene fogColor={fogColor} />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
        
        {/* Left: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 w-full z-20">
          
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans text-[var(--text-primary)] leading-tight tracking-tight drop-shadow-lg"
          >
            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Harjot Singh</span>
          </motion.h1>

          <motion.div
            variants={typingContainer}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl lg:text-3xl font-bold font-sans text-[var(--text-secondary)] leading-snug"
          >
            {typingText.split("").map((char, index) => (
              <motion.span key={index} variants={typingCharacter}>
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="text-base md:text-lg text-[var(--text-muted)] max-w-xl font-medium leading-relaxed"
          >
            Transforming Complex Data into Actionable Business Insights. Engineering Scalable <span className="text-cyan-500 font-semibold">Machine Learning</span> Solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
            className="pt-4 flex gap-4"
          >
             <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
               View Projects
             </a>
             <a href="#contact" className="px-8 py-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] font-bold hover:bg-[var(--bg-subtle-hover)] hover:scale-105 transition-all duration-300">
               Contact Me
             </a>
          </motion.div>
        </div>

        {/* Right: Floating Glass Image (Static, No GSAP Movement) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center lg:justify-end z-20 w-full"
        >
          <div 
            className="relative glass p-3 bg-[var(--hero-image-bg)] backdrop-blur-xl group hover:shadow-[0_0_60px_rgba(0,243,255,0.3)] transition-shadow duration-700 mx-auto lg:mx-0"
            style={{ width: '100%', maxWidth: '380px', height: '450px', borderRadius: '1.5rem', border: '1px solid rgba(0, 243, 255, 0.4)' }}
          >
            <Image 
              src="/mypic.png" 
              alt="Harjot Singh Developer" 
              fill 
              className="object-cover object-top filter brightness-105 group-hover:brightness-110 transition-all duration-500" 
              style={{ borderRadius: '1rem' }}
              priority
            />
          </div>
        </motion.div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce pointer-events-none"
      >
        <span className="text-[var(--text-muted)] font-mono text-xs mb-2 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}
