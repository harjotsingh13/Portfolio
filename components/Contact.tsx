"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-10 blur-[150px] z-0 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold font-sans mb-6 text-[var(--text-primary)]">
            Let&apos;s <span className="neon-text-blue">Connect</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-12">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="glass border border-neonBlue/30 p-10 rounded-3xl shadow-[0_0_50px_rgba(var(--accent-blue-rgb),0.1)] relative overflow-hidden group">
            {/* Glowing orb behind card */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-neonPurple blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              {/* Left: Avatar */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="w-48 h-48 relative rounded-full overflow-hidden p-2 glass border border-neonPurple/50 shadow-[0_0_30px_rgba(var(--accent-purple-rgb),0.4)] group-hover:scale-[1.03] transition-transform duration-500">
                  <div className="w-full h-full relative rounded-full overflow-hidden bg-[var(--bg-primary)]">
                    <Image src="/mypic.png" alt="Harjot Contact" fill className="object-cover object-top rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Right: Contact Links */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
              >
                <a href="mailto:singhharjot192004@gmail.com" className="flex flex-col items-center justify-center p-6 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-2xl hover:bg-[var(--bg-surface)] hover:border-neonBlue/50 transition-all duration-300 group/link">
                  <Mail className="w-8 h-8 text-[var(--text-secondary)] group-hover/link:text-neonBlue mb-3" />
                  <span className="text-[var(--text-secondary)] font-medium">Email Me</span>
                </a>

                <a href="tel:+919161639675" className="flex flex-col items-center justify-center p-6 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-2xl hover:bg-[var(--bg-surface)] hover:border-neonPurple/50 transition-all duration-300 group/link">
                  <Phone className="w-8 h-8 text-[var(--text-secondary)] group-hover/link:text-neonPurple mb-3" />
                  <span className="text-[var(--text-secondary)] font-medium">Call Me</span>
                </a>

                <a href="https://www.linkedin.com/in/harjot19/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-2xl hover:bg-[var(--bg-surface)] hover:border-neonBlue/50 transition-all duration-300 group/link">
                  <Linkedin className="w-8 h-8 text-[var(--text-secondary)] group-hover/link:text-neonBlue mb-3" />
                  <span className="text-[var(--text-secondary)] font-medium">LinkedIn</span>
                </a>

                <a href="https://github.com/harjotsingh13" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-2xl hover:bg-[var(--bg-surface)] hover:border-neonPurple/50 transition-all duration-300 group/link">
                  <Github className="w-8 h-8 text-[var(--text-secondary)] group-hover/link:text-neonPurple mb-3" />
                  <span className="text-[var(--text-secondary)] font-medium">GitHub</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-20 text-center text-[var(--text-muted)] text-sm">
        <p>© {new Date().getFullYear()} Harjot Singh. All Rights Reserved.</p>
        <p className="mt-2 text-xs">Built with Next.js, Three.js, and Framer Motion.</p>
      </div>
    </section>
  );
}
