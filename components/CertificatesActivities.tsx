"use client";

import { motion } from "framer-motion";
import { Award, Zap, BadgeCheck, ShieldCheck, Cloud, Code2, Flag, Users, Swords, ExternalLink } from "lucide-react";

const certificates = [
  { 
    title: "IBM Data Science Professional Certificate", 
    provider: "IBM", 
    color: "text-cyan-400", 
    bgGradient: "from-cyan-900/40 to-[var(--bg-primary)]",
    icon: BadgeCheck, 
    link: "https://drive.google.com/file/d/10reY2nuONTa-Z7-fANsh97RRrejXGF_g/view",
    description: "Comprehensive training in Data Science methodologies, Python, SQL, and data analysis."
  },
  { 
    title: "AI Powered NLP", 
    provider: "AlgoTutor", 
    color: "text-teal-400", 
    bgGradient: "from-teal-900/40 to-[var(--bg-primary)]",
    icon: ShieldCheck, 
    link: "https://drive.google.com/file/d/18ItCDSHYRFwB0b9sc25_jPz_yDuOnjnn/view",
    description: "Advanced Natural Language Processing techniques using modern AI frameworks."
  },
  { 
    title: "Cloud Computing", 
    provider: "NPTEL", 
    color: "text-cyan-400", 
    bgGradient: "from-blue-900/40 to-[var(--bg-primary)]",
    icon: Cloud, 
    link: "https://drive.google.com/file/d/1aD0RtdXdKXEBHKrphXtwvS1SSfLSPKuW/view",
    description: "In-depth understanding of cloud infrastructure, services, and scalable architecture."
  },
  { 
    title: "Software Engineering Implementation", 
    provider: "Coursera", 
    color: "text-teal-400", 
    bgGradient: "from-emerald-900/40 to-[var(--bg-primary)]",
    icon: Code2, 
    link: "https://drive.google.com/file/d/1ecclGyI7aE441VIaCBDSh9fC0qGOzj2f/view",
    description: "Best practices for building robust, scalable, and fully tested software systems."
  },
  { 
    title: "Hack Quest 24 Hour CTF Challenge", 
    provider: "UpGrad", 
    color: "text-purple-400", 
    bgGradient: "from-purple-900/40 to-[var(--bg-primary)]",
    icon: Flag, 
    link: "https://drive.google.com/file/d/1IW_Sd87Hrcmb_dYo10Wl3uv5VFZg4qA1/view",
    description: "Intensive 24-hour cybersecurity capture-the-flag competition focusing on real-world exploits."
  },
];

const activities = [
  { text: "30-day NGO community development program participation.", icon: Users },
  { text: "24-hour CTF cybersecurity hackathon participation.", icon: Swords },
];

export default function CertificatesActivities() {
  return (
    <section id="certificates-activities" className="py-24 bg-[var(--bg-primary)] relative z-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Certificates Section */}
        <motion.div
          id="certificates"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-[var(--text-primary)] inline-flex items-center justify-center gap-4">
              <Award className="w-10 h-10 text-cyan-400" />
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative overflow-hidden glass rounded-3xl border border-[var(--border-subtle)] hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col h-[320px]"
                >
                  {/* Thumbnail / Header */}
                  <div className={`h-40 w-full bg-gradient-to-br ${cert.bgGradient} relative flex items-center justify-center border-b border-[var(--glass-border)] group-hover:scale-105 transition-transform duration-700`}>
                    <Icon className={`w-16 h-16 ${cert.color} opacity-80 drop-shadow-lg`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent opacity-80 z-0"></div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 relative z-10 flex flex-col flex-1 bg-[var(--bg-card)]">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className={`text-xl font-bold leading-tight ${cert.color} line-clamp-2`}>{cert.title}</h3>
                    </div>
                    <span className="inline-block mt-auto text-xs font-bold text-[var(--text-muted)] tracking-widest uppercase bg-[var(--bg-surface)] px-3 py-1 rounded-full border border-[var(--glass-border)] self-start shadow-sm">
                      {cert.provider}
                    </span>
                  </div>

                  {/* Hover Modal Overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 bg-[var(--bg-surface)]/95 backdrop-blur-xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out text-center">
                    <Icon className={`w-10 h-10 ${cert.color} mb-4`} />
                    <h3 className={`text-2xl font-bold mb-3 ${cert.color}`}>{cert.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-medium">
                      {cert.description}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-sm rounded-full hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-transform duration-300"
                    >
                      View Certificate <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          id="activities"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-[var(--text-primary)] inline-flex items-center justify-center gap-4">
              <Zap className="w-10 h-10 text-teal-400" />
              Activities
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl border border-glassBorder hover:border-teal-400/40 hover:shadow-[0_15px_40px_rgba(0,209,178,0.15)] shadow-lg transition-all duration-300 flex items-center gap-6 group"
                >
                  <div className="flex-shrink-0 p-4 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] group-hover:bg-teal-400/10 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-teal-400" />
                  </div>
                  <p className="text-[var(--text-secondary)] text-lg font-medium leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-300">{activity.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
