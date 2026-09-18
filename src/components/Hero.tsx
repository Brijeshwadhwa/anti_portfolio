"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SocTerminalCard } from "./SocTerminalCard";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ShieldCheck, 
  Code, 
  Trophy, 
  FolderGit2 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { AggregatedStats } from "@/lib/stats/types";

export const Hero: React.FC = () => {
  const [stats, setStats] = useState<AggregatedStats | null>(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("/api/stats");
        if (res.ok) {
          const data: AggregatedStats = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.warn("Hero stats fetch error:", err);
      }
    }
    loadStats();
  }, []);

  const lcSolved = stats?.leetcode?.totalSolved || 379;
  const thmRank = stats?.tryhackme?.thmRank || "Top 5% Global";
  const ghRepos = stats?.github?.totalRepos || 35;

  return (
    <section id="hero" className="relative pt-32 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Info + Candidate Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
          
          {/* Left Column: Candidate Positioning */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-warm-border text-xs font-mono text-warm-textSecondary mb-5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-warm-success animate-pulse" />
              <span className="text-warm-textPrimary font-semibold">Cybersecurity Engineer</span>
              <span className="text-warm-border">•</span>
              <span>LPU CS (2023–Present)</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-warm-textPrimary mb-3">
              {PORTFOLIO_DATA.personal.name}
            </h1>

            {/* Outcome-Oriented Positioning */}
            <h2 className="text-xl sm:text-2xl font-bold text-warm-textPrimary mb-4 font-sans leading-snug">
              I build <span className="gradient-text-amber">security automation tools</span> for threat detection, intelligence and investigation.
            </h2>

            {/* Concise Supporting Text */}
            <p className="text-warm-textSecondary text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Specializing in Threat Intelligence (STIX 2.1), Blue Team Operations, and automated Python network reconnaissance.
            </p>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Brijesh_Wadhwa_SOC_Analyst_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-warm-accent hover:bg-warm-accentHover text-white font-semibold text-xs sm:text-sm transition-all shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-warm-border hover:border-warm-accent text-warm-textPrimary font-semibold text-xs sm:text-sm transition-all shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-warm-border hover:border-warm-blue text-warm-textPrimary font-semibold text-xs sm:text-sm transition-all shadow-xs"
              >
                <Linkedin className="w-4 h-4 text-warm-blue" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-warm-border hover:border-warm-accent text-warm-textSecondary hover:text-warm-textPrimary font-semibold text-xs sm:text-sm transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Cybersecurity / SOC Threat Intel Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <SocTerminalCard />
          </motion.div>

        </div>

        {/* Compact Integrated Live Proof Row */}
        <div className="pt-6 border-t border-warm-border">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            
            <div className="p-3.5 rounded-xl bg-white border border-warm-border flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-warm-accent">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <span className="text-base font-bold text-warm-textPrimary block leading-none mb-1">
                  {lcSolved}+
                </span>
                <span className="text-[11px] text-warm-textSecondary">LeetCode Solved</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-warm-border flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <span className="text-base font-bold text-warm-textPrimary block leading-none mb-1">
                  {thmRank}
                </span>
                <span className="text-[11px] text-warm-textSecondary">TryHackMe</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-warm-border flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-warm-blue">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <span className="text-base font-bold text-warm-textPrimary block leading-none mb-1">
                  {ghRepos}
                </span>
                <span className="text-[11px] text-warm-textSecondary">GitHub Repos</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-warm-border flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-base font-bold text-warm-textPrimary block leading-none mb-1">
                  3 Core
                </span>
                <span className="text-[11px] text-warm-textSecondary">Security Projects</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
