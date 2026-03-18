"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "ChurnGuard AI",
    subtitle: "Customer Churn Prediction System",
    description: [
      "Built an ML system analyzing telecom data to identify high-risk churn users.",
      "Estimates revenue risk with high predictive accuracy.",
      "FastAPI backend enables real-time churn probability prediction.",
    ],
    tags: ["Machine Learning", "Logistic Regression", "Random Forest", "XGBoost", "FastAPI"],
    color: "neon-text-blue",
    border: "group-hover:border-neonBlue/50",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    link: "https://churnguard-ai.onrender.com/app",
    github: "https://github.com/harjotsingh13/churnguard-ai",
    impactTag: "🚀 AI Powered"
  },
  {
    title: "Aviation Analytics",
    subtitle: "Power BI Dashboard",
    description: [
      "Developed an analytics dashboard for large-scale airline data.",
      "Detects delay patterns, traffic peaks, and airport performance metrics.",
      "Leveraged advanced DAX and Power Query for data transformation.",
    ],
    tags: ["Data Analytics", "Power BI", "DAX", "Power Query"],
    color: "neon-text-purple",
    border: "group-hover:border-neonPurple/50",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
    link: "https://drive.google.com/drive/folders/1kksKYFkwr7XwXO5fykdXlZDddtFbk3F2",
    github: "",
    impactTag: "📊 Data Driven"
  },
  {
    title: "YT Sentiment Analyzer",
    subtitle: "Multilingual Chatbot",
    description: [
      "Built a sentiment analysis system classifying YouTube comments.",
      "Uses transformer models to parse both Hindi and Hinglish.",
      "Automatically generates insightful comment summaries.",
    ],
    tags: ["NLP", "Transformers", "Sentiment Analysis", "Hinglish"],
    color: "neon-text-blue",
    border: "group-hover:border-neonBlue/50",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop",
    link: "",
    github: "https://github.com/harjotsingh13/Youtube_Comments_Sent_Ananlysis/tree/main",
    impactTag: "⚡ High Impact"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)] relative z-10 w-full overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg-primary)] z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-16 text-center text-[var(--text-primary)]">
            Featured <span className="neon-text-blue">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.15 }}
               viewport={{ once: true, margin: "-50px" }}
               className={`group relative overflow-hidden rounded-2xl border border-glassBorder bg-[var(--bg-surface)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:z-10 ${project.border} min-h-[480px] flex flex-col`}
             >
               {/* Advanced Addition: Impact Tag Top Right */}
               <div className="absolute top-4 right-4 z-30 pointer-events-none">
                 <span className="px-3 py-1 bg-[var(--bg-card)] backdrop-blur-md border border-[var(--glass-border)] rounded-full text-xs font-semibold text-[var(--text-primary)] shadow-lg flex items-center gap-1">
                   {project.impactTag}
                 </span>
               </div>

               {/* Thumbnail Feature with Hover Interaction */}
               <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                 <img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover blur-md group-hover:blur-none group-hover:scale-110 transition-all duration-700 opacity-30 group-hover:opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--gradient-overlay-from)] via-[var(--gradient-overlay-via)] to-[var(--gradient-overlay-to)] group-hover:via-[var(--gradient-overlay-via-hover)] group-hover:to-[var(--gradient-overlay-to-hover)] transition-colors duration-500" />
               </div>

               {/* Card Content Overlay */}
               <div className="relative z-10 flex flex-col h-full p-8 transition-transform duration-500 ease-out group-hover:-translate-y-10">
                 <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-[var(--bg-subtle)] backdrop-blur-lg rounded-xl border border-[var(--border-subtle)] shadow-xl group-hover:scale-110 transition-transform duration-500">
                     <FolderGit2 className="w-8 h-8 text-[var(--icon-color)]" />
                   </div>
                   {/* Simplified top-right icon link placeholder if none exists */}
                   {(!project.link && !project.github) && (
                     <div className="p-2 opacity-30">
                       <ExternalLink className="w-6 h-6 text-[var(--text-primary)]" />
                     </div>
                   )}
                 </div>
                 
                 <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 drop-shadow-md group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] ${project.color}`}>
                   {project.title}
                 </h3>
                 <h4 className="text-sm font-semibold text-[var(--text-on-surface-muted)] mb-6 tracking-wide uppercase drop-shadow-md">
                   {project.subtitle}
                 </h4>
                 
                 <ul className="text-[var(--text-on-surface-muted)] text-sm leading-relaxed mb-6 space-y-3 flex-grow drop-shadow-sm group-hover:opacity-0 transition-opacity duration-300">
                   {project.description.map((point, i) => (
                     <li key={i} className="flex items-start">
                       <span className="mr-3 text-neonBlue mt-0.5 font-bold text-lg leading-none">•</span>
                       <span>{point}</span>
                     </li>
                   ))}
                 </ul>
                 
                 <div className="flex flex-wrap gap-2 mt-auto group-hover:opacity-0 transition-opacity duration-300">
                   {project.tags.slice(0, 3).map(tag => (
                     <span key={tag} className="text-[11px] font-semibold text-[var(--text-on-surface)] bg-[var(--bg-subtle)] backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--border-subtle)] shadow-lg">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>

               {/* Hover Buttons Overlay - Hidden initially, exposed on hover */}
               <div className="absolute left-0 right-0 bottom-0 z-20 flex flex-col items-center justify-end p-8 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                 <div className="flex flex-wrap gap-2 justify-center mb-6">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[11px] font-bold text-[var(--text-on-surface)] bg-[var(--bg-subtle)] backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--border-subtle)] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                       {tag}
                     </span>
                   ))}
                 </div>
                 
                 <div className="flex gap-4 w-full justify-center">
                   {project.link && (
                     <a
                       href={project.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-center flex-1 gap-2 px-4 py-3 bg-neonBlue/20 text-neonBlue font-semibold text-sm rounded-full border border-neonBlue/40 hover:bg-neonBlue/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--accent-blue-rgb),0.4)] transition-all duration-300 backdrop-blur-md"
                     >
                       <Eye className="w-4 h-4" />
                       {project.title === 'Aviation Analytics' ? 'Docs' : 'Demo'}
                     </a>
                   )}
                   {project.github && (
                     <a
                       href={project.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-center flex-1 gap-2 px-4 py-3 bg-[var(--bg-subtle)] text-[var(--text-on-surface)] font-semibold text-sm rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-subtle-hover)] hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--accent-blue-rgb),0.2)] transition-all duration-300 backdrop-blur-md"
                     >
                       <Github className="w-4 h-4" />
                       Code
                     </a>
                   )}
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
