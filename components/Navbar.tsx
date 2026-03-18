"use client";

import { useState, useEffect } from "react";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  "Home", "About", "Skills", "Projects", 
  "Education", "Certificates", "Activities", "Contact"
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      // Offset for navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
          
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => handleScrollTo('home')}>
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#00f3ff]/50 shadow-[0_0_10px_rgba(0,243,255,0.4)]">
              <Image src="/mypic.png" alt="Harjot" fill className="object-cover" />
            </div>
            <span className="text-xl font-bold font-sans neon-text-blue">HS.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:neon-text-purple transition duration-300 font-medium text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
               onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 px-4"
          >
            <div className="glass rounded-2xl px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:neon-text-blue block px-3 py-2 rounded-md text-base font-medium w-full"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
