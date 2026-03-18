"use client";

import { motion } from "framer-motion";
import { 
  SiCplusplus, SiPython, SiPandas, SiNumpy, SiScikitlearn, SiStreamlit, 
  SiMysql, SiJupyter, SiGooglecolab, SiGithub
} from "react-icons/si";
import { Brain, Network, LineChart, Users, Lightbulb, RefreshCw, MessageSquare, BarChart, FileSpreadsheet, Code2 } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "group-hover:text-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] group-hover:border-blue-500/50" },
      { name: "Python", icon: SiPython, color: "group-hover:text-yellow-400 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] group-hover:border-yellow-500/50" }
    ],
    color: "neon-text-blue",
    borderColor: "border-neonBlue/30"
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "group-hover:text-[var(--text-on-surface)] group-hover:border-[var(--border-subtle)]" },
      { name: "NumPy", icon: SiNumpy, color: "group-hover:text-blue-300 group-hover:border-blue-400/50" },
      { name: "Matplotlib", icon: LineChart, color: "group-hover:text-green-400 group-hover:border-green-500/50" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "group-hover:text-orange-400 group-hover:border-orange-500/50" },
      { name: "Streamlit", icon: SiStreamlit, color: "group-hover:text-red-400 group-hover:border-red-500/50" },
      { name: "LangChain", icon: Network, color: "group-hover:text-cyan-400 group-hover:border-cyan-500/50" },
      { name: "Hugging Face", icon: Brain, color: "group-hover:text-yellow-300 group-hover:border-yellow-400/50" }
    ],
    color: "neon-text-purple",
    borderColor: "border-neonPurple/30"
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "VS Code", icon: Code2, color: "group-hover:text-blue-500 group-hover:border-blue-500/50" },
      { name: "Jupyter", icon: SiJupyter, color: "group-hover:text-orange-500 group-hover:border-orange-500/50" },
      { name: "MySQL", icon: SiMysql, color: "group-hover:text-blue-400 group-hover:border-blue-400/50" },
      { name: "Git & GitHub", icon: SiGithub, color: "group-hover:text-[var(--text-on-surface)] group-hover:border-[var(--border-subtle)]" },
      { name: "Google Colab", icon: SiGooglecolab, color: "group-hover:text-yellow-500 group-hover:border-yellow-500/50" },
      { name: "Power BI", icon: BarChart, color: "group-hover:text-yellow-400 group-hover:border-yellow-400/50" },
      { name: "Excel", icon: FileSpreadsheet, color: "group-hover:text-green-500 group-hover:border-green-500/50" }
    ],
    color: "neon-text-blue",
    borderColor: "border-neonBlue/30"
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: Lightbulb, color: "group-hover:text-yellow-300 group-hover:border-yellow-300/50" },
      { name: "Adaptability", icon: RefreshCw, color: "group-hover:text-blue-300 group-hover:border-blue-300/50" },
      { name: "Team Collaboration", icon: Users, color: "group-hover:text-purple-400 group-hover:border-purple-400/50" },
      { name: "Communication", icon: MessageSquare, color: "group-hover:text-pink-400 group-hover:border-pink-400/50" }
    ],
    color: "neon-text-purple",
    borderColor: "border-neonPurple/30"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--bg-primary)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans neon-text-purple inline-block">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-xl text-[var(--text-muted)]">Tools, frameworks, and languages powering my innovations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group) => (
            <motion.div
              key={group.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`glass rounded-3xl p-8 border ${group.borderColor} hover:shadow-2xl transition-shadow duration-500`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${group.color}`}>{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`group flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--bg-card)] border border-[var(--glass-border)] rounded-full text-[var(--text-secondary)] text-sm font-medium tracking-wide transition-all duration-300 cursor-default ${skill.color}`}
                  >
                    <skill.icon className="w-5 h-5 transition-colors duration-300" />
                    <span className="transition-colors duration-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
