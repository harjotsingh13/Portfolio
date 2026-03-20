"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Global Section Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-10 blur-[150px] z-0 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-[var(--text-primary)]">
            Let&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Connect</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] mt-4 font-medium max-w-2xl mx-auto">
            My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        {/* Business Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full max-w-2xl mx-auto cursor-default"
          style={{ perspective: 1000 }}
        >
          <div className="relative w-full glass rounded-[2rem] p-8 md:p-12 overflow-hidden border border-[var(--border-subtle)] shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_80px_rgba(6,182,212,0.2)] group hover:border-cyan-400/40">
            
            {/* Abstract glowing shapes inside card */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-500 rounded-full mix-blend-screen blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-10 items-center sm:items-start text-center sm:text-left">
              
              {/* Profile Image (Avatar) */}
              <div className="flex-shrink-0 relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl p-1.5 bg-gradient-to-br from-teal-400 to-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-shadow duration-700 rotate-[-2deg] group-hover:rotate-0">
                <div className="w-full h-full relative rounded-[13px] overflow-hidden bg-[var(--bg-primary)]">
                  <Image 
                    src="/mypic.png" 
                    alt="Harjot Singh" 
                    fill 
                    className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Internal image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
              
              {/* Info Column */}
              <div className="flex flex-col flex-1 justify-center w-full">
                <h3 className="text-3xl font-extrabold text-[var(--text-primary)] tracking-tight mb-1">Harjot Singh</h3>
                <p className="text-cyan-500 font-bold text-sm tracking-[0.2em] uppercase mb-8">Software & AI Engineer</p>
                
                <div className="space-y-4 mb-8 w-full flex flex-col">
                  {/* Phone */}
                  <a href="tel:+919161639675" className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group/link p-3 rounded-xl hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-subtle)] w-full -ml-3 hover:translate-x-2">
                    <div className="flex-shrink-0 p-2.5 bg-[var(--bg-surface)] rounded-xl text-teal-400 shadow-sm border border-[var(--border-subtle)] group-hover/link:bg-teal-400 group-hover/link:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg tracking-wide">+91 91616 39675</span>
                  </a>
                  
                  {/* Email */}
                  <a href="mailto:singhharjot192004@gmail.com" className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all group/link p-3 rounded-xl hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-subtle)] w-full -ml-3 hover:translate-x-2">
                    <div className="flex-shrink-0 p-2.5 bg-[var(--bg-surface)] rounded-xl text-cyan-400 shadow-sm border border-[var(--border-subtle)] group-hover/link:bg-cyan-400 group-hover/link:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-[15px] sm:text-base break-all">singhharjot192004@gmail.com</span>
                  </a>
                </div>
                
                {/* Social Buttons */}
                <div className="flex justify-center sm:justify-start gap-4 mt-auto">
                  <a href="https://www.linkedin.com/in/harjot19/" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl text-[var(--text-secondary)] hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] shadow-sm hover:shadow-[0_10px_20px_rgba(10,102,194,0.4)] hover:-translate-y-1 transition-all duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/harjotsingh13" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl text-[var(--text-secondary)] hover:text-[var(--bg-primary)] hover:bg-[var(--text-primary)] hover:border-[var(--text-primary)] shadow-sm hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="mt-24 border-t border-[var(--border-subtle)]/50 pt-8 pb-4 text-center text-[var(--text-muted)] text-sm relative z-10 w-full bg-[var(--bg-card)]">
        <p className="font-semibold">© {new Date().getFullYear()} Harjot Singh.</p>
        <p className="mt-2 text-xs opacity-70">Engineered with Next.js, Framer Motion & Tailwind CSS.</p>
      </div>
    </section>
  );
}
