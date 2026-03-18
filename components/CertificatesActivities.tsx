"use client";

import { motion } from "framer-motion";
import { Award, Zap, BadgeCheck, ShieldCheck, Cloud, Code2, Flag, Users, Swords } from "lucide-react";

const certificates = [
  { title: "IBM Data Science Professional Certificate", provider: "IBM", color: "neon-text-blue", icon: BadgeCheck, link: "https://drive.google.com/file/d/10reY2nuONTa-Z7-fANsh97RRrejXGF_g/view" },
  { title: "AI Powered NLP", provider: "AlgoTutor", color: "neon-text-purple", icon: ShieldCheck, link: "https://drive.google.com/file/d/18ItCDSHYRFwB0b9sc25_jPz_yDuOnjnn/view" },
  { title: "Cloud Computing", provider: "NPTEL", color: "neon-text-blue", icon: Cloud, link: "https://drive.google.com/file/d/1aD0RtdXdKXEBHKrphXtwvS1SSfLSPKuW/view" },
  { title: "Software Engineering Implementation and Testing", provider: "Coursera", color: "neon-text-purple", icon: Code2, link: "https://drive.google.com/file/d/1ecclGyI7aE441VIaCBDSh9fC0qGOzj2f/view" },
  { title: "Hack Quest 24 Hour CTF Challenge", provider: "UpGrad", color: "neon-text-blue", icon: Flag, link: "https://drive.google.com/file/d/1IW_Sd87Hrcmb_dYo10Wl3uv5VFZg4qA1/view" },
];

const activities = [
  { text: "30-day NGO community development program participation.", icon: Users },
  { text: "24-hour CTF cybersecurity hackathon participation.", icon: Swords },
];

export default function CertificatesActivities() {
  return (
    <section id="certificates-activities" className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Certificates Column */}
          <motion.div
            id="certificates"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold font-sans mb-10 text-[var(--text-primary)] flex items-center gap-4">
              <Award className="w-10 h-10 text-neonBlue" />
              Certifications
            </h2>
            <div className="space-y-4">
              {certificates.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass p-5 rounded-xl flex items-center gap-4 border-l-4 border-l-neonBlue border border-transparent hover:border-neonBlue/30 hover:bg-[var(--bg-surface)] hover:shadow-[0_0_20px_rgba(var(--accent-blue-rgb),0.15)] transition-all duration-300 cursor-pointer block"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex-shrink-0 p-2 bg-[var(--bg-surface)] rounded-lg">
                        <Icon className="w-5 h-5 text-neonBlue" />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <span className={`text-lg font-semibold ${cert.color}`}>{cert.title}</span>
                        <span className="text-sm text-[var(--text-muted)] font-medium tracking-wide uppercase ml-4">{cert.provider}</span>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Activities Column */}
          <motion.div
            id="activities"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold font-sans mb-10 text-[var(--text-primary)] flex items-center gap-4">
              <Zap className="w-10 h-10 text-neonPurple" />
              Activities
            </h2>
            <div className="space-y-6">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl border border-glassBorder hover:border-neonPurple/30 hover:shadow-[0_0_20px_rgba(var(--accent-purple-rgb),0.15)] shadow-lg transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 p-2.5 bg-neonPurple/10 rounded-xl">
                      <Icon className="w-6 h-6 text-neonPurple" />
                    </div>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed">{activity.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
