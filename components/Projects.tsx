"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Eye, Code2, Database, Rocket } from "lucide-react";

// Helper strictly for rendering common icons based on tags 
// (For an actual colorful devicon match, we simulate with colors if react-icons aren't all present)
const getIconForTag = (tag: string) => {
  const lowercase = tag.toLowerCase();
  if (lowercase.includes("machine learning") || lowercase.includes("ml") || lowercase.includes("ai")) return <Rocket className="w-3 h-3 text-purple-400" />;
  if (lowercase.includes("data") || lowercase.includes("sql")) return <Database className="w-3 h-3 text-blue-400" />;
  return <Code2 className="w-3 h-3 text-teal-400" />;
};

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
    border: "group-hover:border-cyan-400/50",
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
    border: "group-hover:border-teal-400/50",
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
    border: "group-hover:border-cyan-400/50",
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
               className={`group relative overflow-hidden rounded-2xl border border-glassBorder bg-[var(--bg-surface)] backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:z-20 min-h-[480px] flex flex-col ${project.border}`}
             >
               {/* Impact Tag Top Right */}
               <div className="absolute top-4 right-4 z-30 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                 <span className="px-3 py-1 bg-[var(--bg-card)] backdrop-blur-md border border-[var(--glass-border)] rounded-full text-xs font-semibold text-[var(--text-primary)] shadow-lg flex items-center gap-1">
                   {project.impactTag}
                 </span>
               </div>

               {/* Background Image - NO BLUR, Fully visible */}
               <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                 <img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                 />
                 {/* Persistent subtle overlay gradient for readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent transition-opacity duration-500" />
               </div>

               {/* Default Card Content (Bottom Aligned) */}
               <div className="relative z-10 flex flex-col justify-end h-full p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-10 group-hover:pointer-events-none">
                 <h3 className={`text-2xl font-bold mb-1 drop-shadow-md ${project.color}`}>
                   {project.title}
                 </h3>
                 <h4 className="text-sm font-semibold text-[var(--text-primary)] tracking-wide uppercase drop-shadow-md">
                   {project.subtitle}
                 </h4>
               </div>

               {/* Hover Popup / Modal Overlay */}
               <div className="absolute inset-0 z-20 flex flex-col p-6 bg-[var(--bg-surface)]/95 backdrop-blur-xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out border border-white/10 rounded-2xl pointer-events-none group-hover:pointer-events-auto">
                 
                 <div className="flex justify-between items-start mb-4">
                   <div className="p-2 bg-[var(--bg-card)] rounded-xl border border-[var(--border-subtle)]">
                     <FolderGit2 className={`w-6 h-6 ${project.color === 'neon-text-blue' ? 'text-cyan-400' : 'text-teal-400'}`} />
                   </div>
                 </div>

                 <h3 className={`text-2xl font-bold mb-1 ${project.color}`}>
                   {project.title}
                 </h3>
                 <h4 className="text-sm font-semibold text-[var(--text-muted)] tracking-wide uppercase mb-4">
                   {project.subtitle}
                 </h4>

                 <ul className="text-[var(--text-secondary)] text-sm leading-relaxed space-y-2 mb-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                   {project.description.map((point, i) => (
                     <li key={i} className="flex items-start">
                       <span className={`mr-2 font-bold text-lg leading-none ${project.color === 'neon-text-blue' ? 'text-cyan-500' : 'text-teal-500'}`}>•</span>
                       <span>{point}</span>
                     </li>
                   ))}
                 </ul>
                 
                 {/* Tech Stack with Icons */}
                 <div className="flex flex-wrap gap-2 mb-6">
                   {project.tags.map(tag => (
                     <span key={tag} className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--text-on-surface)] bg-[var(--bg-card)] border border-[var(--border-subtle)] px-2.5 py-1 rounded-md shadow-sm">
                       {getIconForTag(tag)}
                       {tag}
                     </span>
                   ))}
                 </div>
                 
                 {/* Action Buttons */}
                 <div className="flex gap-3 w-full justify-center mt-auto">
                   {project.link && (
                     <a
                       href={project.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center justify-center flex-1 gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-sm rounded-lg hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
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
                       className="flex items-center justify-center flex-1 gap-2 px-4 py-2.5 bg-[var(--bg-card)] text-[var(--text-primary)] font-bold text-sm rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-subtle-hover)] hover:scale-[1.02] transition-all duration-300"
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
