"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ScrollText } from "lucide-react";

const educationDetails = [
  {
    icon: <GraduationCap className="w-8 h-8 text-[var(--icon-color)]" />,
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science",
    score: "CGPA 8.57",
    color: "neon-text-blue"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[var(--icon-color)]" />,
    institution: "Young Stream Academy",
    degree: "Intermediate",
    score: "83%",
    color: "neon-text-purple"
  },
  {
    icon: <ScrollText className="w-8 h-8 text-[var(--icon-color)]" />,
    institution: "Young Stream Academy",
    degree: "Matriculation",
    score: "88.17%",
    color: "neon-text-blue"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neonBlue rounded-full mix-blend-multiply blur-[150px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-[var(--text-primary)]">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Journey</span>
          </h2>
        </motion.div>

        <div className="relative mt-10">
          {/* Default Horizontal Line background (Desktop) */}
          <div className="absolute top-[38px] left-0 w-full h-[1px] bg-[var(--border-subtle)] hidden lg:block"></div>
          
          {/* Animated Draw Line (Desktop) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute top-[37px] left-0 h-[3px] bg-gradient-to-r from-teal-400 to-cyan-400 hidden lg:block origin-left z-0 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
          />

          {/* Vertical Line for Mobile/Tablet */}
          <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-[var(--border-subtle)] lg:hidden"></div>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="absolute top-0 left-[27px] w-[2px] bg-gradient-to-b from-teal-400 to-cyan-400 lg:hidden shadow-[0_0_15px_rgba(6,182,212,0.6)] z-0"
          />

          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 relative z-10 pl-16 lg:pl-0">
            {educationDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex-1 flex flex-col group"
              >
                {/* Node Dot Desktop */}
                <div className="w-5 h-5 rounded-full bg-[var(--bg-card)] border-4 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-20 mb-8 mx-auto hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Node Dot Mobile */}
                <div className="w-4 h-4 rounded-full bg-[var(--bg-card)] border-[3px] border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] absolute -left-[54px] top-6 lg:hidden z-20"></div>
                
                <div className="w-full glass p-8 rounded-2xl border border-glassBorder hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 lg:group-hover:-translate-y-2 lg:text-center text-left">
                  <div className="flex flex-col lg:items-center items-start gap-4">
                    <div className="p-4 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] shadow-sm group-hover:bg-[var(--bg-subtle-hover)] transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 ${item.color}`}>{item.institution}</h3>
                      <p className="text-lg text-[var(--text-secondary)] font-medium mb-4">{item.degree}</p>
                      <span className="px-4 py-1.5 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-full text-cyan-500 font-bold text-sm tracking-widest uppercase inline-flex items-center shadow-inner group-hover:border-cyan-400/30 transition-colors">
                        Score: {item.score}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
