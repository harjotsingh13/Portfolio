"use client";
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const experiences = [
    {
        role: "Frontend Developer (Part-Time)",
        company: "Gatepax AI",
        date: "Sep 2024 – Nov 2024",
        location: "Remote",
        points: [
            "Built and maintained scalable, responsive UI components using React and TypeScript, supporting 500,000+ daily active users.",
            "Migrated a legacy AngularJS codebase to React, refactoring 150+ components, reducing bundle size by 40%, and improving load performance.",
            "Optimized rendering and automated scheduling workflows, improving render performance by 55% and increasing booking efficiency by 70%."
        ]
    },
    {
        role: "Co-CEO & Full Stack Developer",
        company: "Bits and Bytes",
        date: "Mar 2024 – Aug 2024",
        location: "Noida, India",
        points: [
            "Led end-to-end development of a scalable web application using Node.js and Ember.js, reducing page load times by 25%.",
            "Improved UI performance through Glimmer optimizations, increasing application responsiveness by 15% for 1,000+ concurrent users.",
            "Designed a cost-efficient data layer using Google Sheets as an interim database, reducing infrastructure costs by 90% and enabling real-time collaboration."
        ]
    },
    {
        role: "Full Stack Web Developer Intern",
        company: "Motherson Technology Services Limited",
        date: "Sep 2023 – Nov 2023",
        location: "Noida, India",
        points: [
            "Implemented full-stack features using React, Node.js, and REST APIs, contributing to a 15% increase in overall user engagement.",
            "Diagnosed and resolved 50+ production issues in collaboration with cross-functional teams, improving system reliability by 25%.",
            "Supported database operations and optimized APIs across multiple modules, improving data retrieval performance and maintainability."
        ]
    }
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section id="experience" className="bg-[var(--bg-section-alt)] text-[var(--text-primary)] py-32 px-8 md:px-24 border-t border-[var(--border-subtle)]">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-sm font-semibold tracking-widest text-[var(--text-on-surface-faint)] uppercase mb-4">Journey</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-16">Experience</h2>

                <div className="relative pl-8 md:pl-16">
                    {/* Vertical Timeline Track */}
                    <div className="absolute top-0 bottom-0 left-[15px] md:left-[23px] w-[2px] bg-[var(--border-subtle)] hidden md:block">
                        <motion.div
                            className="w-full bg-purple-500 origin-top h-full"
                            style={{ scaleY: scrollYProgress }}
                        />
                    </div>

                    <div ref={containerRef} className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute -left-[54.5px] top-8 w-5 h-5 bg-[var(--bg-section-alt)] border-[3px] border-purple-500 rounded-full z-10 hidden md:block"
                                />

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="relative flex flex-col md:flex-row gap-8 md:gap-16 group p-8 rounded-[2rem] bg-[var(--bg-subtle)] border border-[var(--border-subtle)] hover:border-purple-500/30 hover:bg-[var(--bg-subtle-hover)] transition-all overflow-hidden shadow-xl"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700 translate-x-12 -translate-y-12 pointer-events-none"></div>

                                    <div className="md:w-1/3 flex-shrink-0 relative z-10">
                                        <p className="text-purple-400 font-mono text-sm mb-3 tracking-wide">{exp.date}</p>
                                        <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                                        <p className="text-[var(--text-on-surface-muted)] mt-2 font-medium">{exp.company} <span className="mx-2 opacity-50">•</span> {exp.location}</p>
                                    </div>
                                    <div className="md:w-2/3 relative z-10">
                                        <ul className="space-y-4">
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="text-[var(--text-on-surface-muted)] flex items-start group-hover:text-[var(--text-secondary)] transition-colors">
                                                    <span className="text-purple-500 mr-4 mt-2 text-xs opacity-50 group-hover:opacity-100 transition-opacity">✦</span>
                                                    <span className="leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
