"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ScrollText } from "lucide-react";

const educationDetails = [
  {
    icon: <GraduationCap className="w-8 h-8 text-[var(--icon-color)]" />,
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
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
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00f3ff] rounded-full mix-blend-multiply blur-[150px] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-16 text-center text-[var(--text-primary)]">
            Educational <span className="neon-text-purple">Journey</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-[#bc13fe]/30 ml-4 md:ml-0 md:pl-10 space-y-12">
          {educationDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[45px] top-4 w-6 h-6 rounded-full bg-[#bc13fe] border-4 border-[var(--bg-primary)] shadow-[0_0_15px_#bc13fe] hidden md:block"></div>
              
              <div className="glass p-8 rounded-2xl border border-glassBorder hover:shadow-[0_0_20px_rgba(188,19,254,0.15)] transition-shadow">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="p-4 bg-[var(--bg-surface)] rounded-xl border border-[var(--glass-border)] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${item.color}`}>{item.institution}</h3>
                    <p className="text-lg text-[var(--text-secondary)] font-medium">{item.degree}</p>
                    <p className="text-[#00f3ff] font-semibold mt-2 text-sm tracking-widest uppercase">
                      Score/CGPA: {item.score}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
