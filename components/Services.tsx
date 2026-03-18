"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Wand2, Zap } from 'lucide-react';

const services = [
    {
        title: "MERN Stack Development",
        description: "Building scalable and performant full-stack architectures using MongoDB, Express.js, React, and Node.js.",
        icon: Code2,
        number: "01",
        color: "from-blue-500/25 to-indigo-500/25",
        glowColor: "group-hover:shadow-blue-500/20",
        textColor: "text-blue-400",
        borderHover: "hover:border-blue-500/40",
        tagStyle: "bg-blue-500/10 border-blue-500/30 text-blue-400",
        tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
        title: "Creative Coding",
        description: "Crafting highly interactive, immersive web experiences using WebGL, Canvas API, and Framer Motion for next-level animation.",
        icon: Wand2,
        number: "02",
        color: "from-violet-500/25 to-purple-500/25",
        glowColor: "group-hover:shadow-violet-500/20",
        textColor: "text-violet-400",
        borderHover: "hover:border-violet-500/40",
        tagStyle: "bg-violet-500/10 border-violet-500/30 text-violet-400",
        tags: ["Framer Motion", "WebGL", "Canvas API", "GSAP"],
    },
    {
        title: "UI/UX Architecture",
        description: "Bridging the gap between design and engineering to produce pixel-perfect, accessible, and intuitive interfaces.",
        icon: MonitorSmartphone,
        number: "03",
        color: "from-emerald-500/25 to-teal-500/25",
        glowColor: "group-hover:shadow-emerald-500/20",
        textColor: "text-emerald-400",
        borderHover: "hover:border-emerald-500/40",
        tagStyle: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
        tags: ["Figma", "Tailwind CSS", "Accessibility", "Design Systems"],
    },
    {
        title: "Performance Optimization",
        description: "Auditing and refactoring web applications for maximum speed, Lighthouse scores, SEO impact, and user retention.",
        icon: Zap,
        number: "04",
        color: "from-amber-500/25 to-orange-500/25",
        glowColor: "group-hover:shadow-amber-500/20",
        textColor: "text-amber-400",
        borderHover: "hover:border-amber-500/40",
        tagStyle: "bg-amber-500/10 border-amber-500/30 text-amber-400",
        tags: ["Core Web Vitals", "Lighthouse", "CDN", "Code Splitting"],
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-[var(--bg-section-alt)] text-[var(--text-primary)] py-32 px-8 md:px-24 border-t border-[var(--border-subtle)]">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-sm font-semibold tracking-widest text-[var(--text-on-surface-faint)] uppercase mb-4">What I Do</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-20">Services &amp; Expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative p-8 rounded-[2rem] bg-[var(--bg-subtle)] border border-[var(--border-subtle)] ${service.borderHover} overflow-hidden flex flex-col transition-all duration-300 shadow-xl hover:shadow-2xl ${service.glowColor}`}
                            >
                                {/* Corner glow */}
                                <div className={`absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl ${service.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full translate-x-16 -translate-y-16`}></div>

                                {/* Top Row: Number + Icon */}
                                <div className="relative z-10 flex justify-between items-start mb-8">
                                    <span className={`text-5xl font-black select-none leading-none text-[var(--text-primary)] opacity-5 group-hover:opacity-10 transition-opacity`}>
                                        {service.number}
                                    </span>
                                    <div className={`p-3.5 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] group-hover:scale-110 group-hover:border-[var(--border-subtle)] transition-all duration-300 ${service.textColor}`}>
                                        <Icon size={26} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex-grow">
                                    <h3 className={`text-2xl font-bold mb-3 text-[var(--text-primary)] transition-colors`}>
                                        {service.title}
                                    </h3>
                                    <p className="text-[var(--text-on-surface-muted)] leading-relaxed mb-6 group-hover:text-[var(--text-secondary)] transition-colors">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${service.tagStyle} transition-all`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
