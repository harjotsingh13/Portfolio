"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="py-20 bg-[var(--bg-primary)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass rounded-3xl p-10 md:p-16 relative z-10"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold font-sans mb-8 neon-text-blue">
                About Me
              </h2>
              <div className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-sans max-w-2xl space-y-5">
                <p>
                  I’m a Computer Science student specializing in Artificial Intelligence, Machine Learning, and Data Analytics, driven by a strong passion for solving real-world problems through data.
                </p>
                <p>
                  I don’t just build models — I design intelligent systems that deliver measurable impact. From predicting customer churn to analyzing large-scale datasets, I focus on creating scalable, production-ready solutions.
                </p>
                <p>
                  My goal is simple: Transform complex data into actionable insights that drive smarter decisions and real business value.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://drive.google.com/file/d/17XxHIqeIO8u3Batomgo7CCBhP8ZjkSLz/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 cursor-pointer"
                >
                  View My Resume
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 glass border border-neonPurple/50 shadow-[0_0_40px_rgba(var(--accent-purple-rgb),0.4)] group hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(var(--accent-purple-rgb),0.6)] transition-all duration-500">
              <div className="w-full h-full relative rounded-full overflow-hidden bg-[var(--bg-primary)]">
                <Image 
                  src="/mypic.png" 
                  alt="Harjot Singh" 
                  fill 
                  className="object-cover object-top"
                />
              </div>
            </div>
            
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
             <motion.div whileHover={{ scale: 1.05 }} className="p-6 border border-glassBorder rounded-2xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:shadow-[0_0_20px_rgba(0,209,178,0.2)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 neon-text-purple">AI & ML</h3>
                <p className="text-[var(--text-muted)]">Architecting intelligent systems to solve complex problems.</p>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="p-6 border border-glassBorder rounded-2xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 neon-text-blue">Data Analytics</h3>
                <p className="text-[var(--text-muted)]">Extracting meaningful patterns from large-scale data points.</p>
             </motion.div>
             <motion.div whileHover={{ scale: 1.05 }} className="p-6 border border-glassBorder rounded-2xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:shadow-[0_0_20px_rgba(0,209,178,0.2)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 neon-text-purple">Automation</h3>
                <p className="text-[var(--text-muted)]">Streamlining pipelines and real-world workflows.</p>
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neonPurple rounded-full mix-blend-multiply filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neonBlue rounded-full mix-blend-multiply filter blur-[150px] opacity-20"></div>
    </motion.section>
  );
}
