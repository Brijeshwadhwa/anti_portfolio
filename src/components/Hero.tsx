"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  Activity, 
  Download, 
  ShieldCheck 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Info + Candidate Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Candidate Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-warm-border text-xs font-mono text-warm-textSecondary mb-6 shadow-warm-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-warm-success animate-pulse" />
              <span className="text-warm-textPrimary font-semibold">Cybersecurity Engineer</span>
              <span className="text-warm-border">•</span>
              <span>LPU CS (2023–Present)</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-warm-textPrimary mb-3">
              {PORTFOLIO_DATA.personal.name}
            </h1>

            {/* Title */}
            <div className="text-lg sm:text-xl font-bold text-warm-accent mb-6 font-mono">
              {PORTFOLIO_DATA.personal.title}
            </div>

            {/* Intro Narrative */}
            <p className="text-warm-textSecondary text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {PORTFOLIO_DATA.personal.intro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Resume PDF Download */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Brijesh_Wadhwa_SOC_Analyst_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-warm-accent hover:bg-warm-accentHover text-white font-semibold text-xs sm:text-sm transition-all shadow-warm-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-warm-border hover:border-warm-accent text-warm-textPrimary font-semibold text-xs sm:text-sm transition-all shadow-warm-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-warm-border hover:border-warm-blue text-warm-textPrimary font-semibold text-xs sm:text-sm transition-all shadow-warm-sm"
              >
                <Linkedin className="w-4 h-4 text-warm-blue" />
                <span>LinkedIn</span>
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-warm-border hover:border-warm-accent text-warm-textSecondary hover:text-warm-textPrimary font-semibold text-xs sm:text-sm transition-all shadow-warm-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Candidate Professional Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="warm-card p-3 rounded-3xl border border-warm-border shadow-warm-md relative group">
              <div className="overflow-hidden rounded-2xl relative">
                <img
                  src="/profile.jpg"
                  alt="Brijesh Wadhwa - Cybersecurity Engineer"
                  className="w-full h-auto max-h-[460px] object-cover object-top rounded-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-warm-border shadow-warm-sm flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-warm-accent" />
                    <span className="font-bold text-warm-textPrimary">Brijesh Wadhwa</span>
                  </div>
                  <span className="text-[11px] text-warm-accent font-bold">LPU • SOC Analyst</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Current Focus Grid */}
        <div id="focus" className="pt-10 border-t border-warm-border">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-4 h-4 text-warm-accent" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
              Current Engineering Focus
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.personal.currentFocus.map((focus, idx) => (
              <motion.div
                key={focus.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="warm-card warm-card-hover p-5 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-warm-accent" />
                    <h4 className="font-bold text-warm-textPrimary text-sm">{focus.name}</h4>
                  </div>
                  <p className="text-xs text-warm-textSecondary leading-relaxed">
                    {focus.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
