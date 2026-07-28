"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Flame, CheckCircle, Code, ExternalLink, Award, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const TryHackMeStats: React.FC = () => {
  const ach = PORTFOLIO_DATA.achievements;

  return (
    <section id="achievements" className="py-20 relative z-10 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <Trophy className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Practical Defense &amp; Algorithmic Mastery
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          TryHackMe &amp; <span className="gradient-text-amber">LeetCode Engineering Profiles</span>
        </h2>

        {/* Glorified Side-by-Side Dual Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* TryHackMe Glorified Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="warm-card warm-card-hover p-6 sm:p-8 rounded-2xl border border-warm-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-warm-border">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-warm-accent/10 border border-warm-accent/20 text-warm-accent">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-warm-textPrimary text-lg">TryHackMe Profile</h3>
                    <span className="text-xs font-mono text-warm-textSecondary">Defensive &amp; Offensive Security Labs</span>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-mono font-bold bg-warm-accent text-white rounded-full">
                  Top 5% Global
                </span>
              </div>

              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                  <span className="text-warm-textSecondary">Global Ranking &amp; Title</span>
                  <span className="font-bold text-warm-textPrimary text-sm">{ach.tryHackMeRank} ({ach.tryHackMeTitle})</span>
                </div>
                <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                  <span className="text-warm-textSecondary">Continuous Learning Streak</span>
                  <span className="font-bold text-warm-accent flex items-center gap-1">
                    <Flame className="w-4 h-4" />
                    {ach.thmStreak}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                  <span className="text-warm-textSecondary">Labs &amp; Badges Completed</span>
                  <span className="font-bold text-warm-blue">{ach.thmRooms} • {ach.thmBadges}</span>
                </div>
              </div>
            </div>

            <a
              href={ach.tryhackmeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-warm-accent hover:bg-warm-accentHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-warm-sm"
            >
              <span>View Verified TryHackMe Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* LeetCode Glorified Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="warm-card warm-card-hover p-6 sm:p-8 rounded-2xl border border-warm-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-warm-border">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-warm-blue/10 border border-warm-blue/20 text-warm-blue">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-warm-textPrimary text-lg">LeetCode Profile</h3>
                    <span className="text-xs font-mono text-warm-textSecondary">Data Structures &amp; Algorithmic Rigor</span>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-mono font-bold bg-warm-blue text-white rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  100 Days Badge 2026
                </span>
              </div>

              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                  <span className="text-warm-textSecondary">Total Problems Solved</span>
                  <span className="font-bold text-warm-textPrimary text-sm">{ach.leetCodeSolved}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                  <span className="text-warm-textSecondary">Difficulty Breakdown</span>
                  <span className="font-bold text-warm-blue">{ach.leetCodeEasy} | {ach.leetCodeMedium} | {ach.leetCodeHard}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                  <span className="text-warm-textSecondary">Streak Milestone</span>
                  <span className="font-bold text-warm-success">{ach.leetCodeBadge}</span>
                </div>
              </div>
            </div>

            <a
              href={ach.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-warm-blue hover:bg-warm-blueHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-warm-sm"
            >
              <span>View Verified LeetCode Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
