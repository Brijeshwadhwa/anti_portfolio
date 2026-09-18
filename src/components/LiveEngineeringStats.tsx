"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Code, Github, Flame, Sparkles, ExternalLink, RefreshCw, ShieldCheck, Activity } from "lucide-react";
import { AggregatedStats } from "@/lib/stats/types";

export const LiveEngineeringStats: React.FC = () => {
  const [stats, setStats] = useState<AggregatedStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("/api/stats");
        if (res.ok) {
          const data: AggregatedStats = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.warn("Failed to fetch live stats, using initial state:", err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  const lc = stats?.leetcode;
  const gh = stats?.github;
  const thm = stats?.tryhackme;

  return (
    <section id="live-stats" className="py-16 relative z-10 bg-warm-bg border-y border-warm-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-warm-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
                Real-Time Data Feed
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-warm-textPrimary">
              Live <span className="gradient-text-amber">Engineering Stats</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-warm-border text-xs font-mono text-warm-textSecondary shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Auto-Synced Server API</span>
            {loading && <RefreshCw className="w-3 h-3 animate-spin text-warm-accent ml-1" />}
          </div>
        </div>

        {/* 3 Live Metric Banners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 1. LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="warm-card warm-card-hover p-6 rounded-2xl border border-warm-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-warm-border">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-warm-accent">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-warm-textPrimary text-base">LeetCode Live</h3>
                    <span className="text-[11px] font-mono text-warm-textSecondary">Algorithmic Problem Solving</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-warm-accent text-white rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {lc?.badge || "200 Days Badge 2026"}
                </span>
              </div>

              {loading ? (
                <div className="animate-pulse space-y-3 py-4">
                  <div className="h-8 bg-warm-bgSecondary rounded-lg w-1/2" />
                  <div className="h-4 bg-warm-bgSecondary rounded w-3/4" />
                </div>
              ) : (
                <div className="space-y-3 mb-6 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                    <span className="text-warm-textSecondary">Total Solved</span>
                    <span className="font-bold text-warm-textPrimary text-base">
                      {lc?.totalSolved || 380}+ Problems
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-bold">
                      Easy: {lc?.easySolved || 160}
                    </div>
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 font-bold">
                      Med: {lc?.mediumSolved || 170}
                    </div>
                    <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-700 font-bold">
                      Hard: {lc?.hardSolved || 50}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                    <span className="text-warm-textSecondary">Global Ranking</span>
                    <span className="font-bold text-warm-success">
                      #{lc?.ranking ? lc.ranking.toLocaleString() : "Top 4%"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://leetcode.com/u/brijeshwadhwa26/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-white border border-warm-border hover:border-warm-accent text-warm-textPrimary font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <span>Verify LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-warm-accent" />
            </a>
          </motion.div>

          {/* 2. TryHackMe Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="warm-card warm-card-hover p-6 rounded-2xl border border-warm-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-warm-border">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-warm-accent/10 border border-warm-accent/20 text-warm-accent">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-warm-textPrimary text-base">TryHackMe Live</h3>
                    <span className="text-[11px] font-mono text-warm-textSecondary">Defensive Security &amp; SOC</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-warm-success text-white rounded-full">
                  {thm?.thmRank || "Top 4% Global"}
                </span>
              </div>

              {loading ? (
                <div className="animate-pulse space-y-3 py-4">
                  <div className="h-8 bg-warm-bgSecondary rounded-lg w-1/2" />
                  <div className="h-4 bg-warm-bgSecondary rounded w-3/4" />
                </div>
              ) : (
                <div className="space-y-3 mb-6 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                    <span className="text-warm-textSecondary">Learning Streak</span>
                    <span className="font-bold text-warm-accent flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      {thm?.thmStreak || "350-Day Streak"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                    <span className="text-warm-textSecondary">Completed Labs</span>
                    <span className="font-bold text-warm-blue">
                      {thm?.thmRooms || "110+ Labs Solved"}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                    <span className="text-warm-textSecondary">Skill Badges</span>
                    <span className="font-bold text-warm-textPrimary">
                      {thm?.thmBadges || "28+ Badges"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://tryhackme.com/p/brijeshwadhwa26"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-white border border-warm-border hover:border-warm-accent text-warm-textPrimary font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <span>Verify TryHackMe Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-warm-accent" />
            </a>
          </motion.div>

          {/* 3. GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="warm-card warm-card-hover p-6 rounded-2xl border border-warm-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-warm-border">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-warm-blue/10 border border-warm-blue/20 text-warm-blue">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-warm-textPrimary text-base">GitHub Repos</h3>
                    <span className="text-[11px] font-mono text-warm-textSecondary">Security Code &amp; Scripts</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-warm-blue text-white rounded-full">
                  {gh?.totalRepos || 32} Public Repos
                </span>
              </div>

              {loading ? (
                <div className="animate-pulse space-y-3 py-4">
                  <div className="h-8 bg-warm-bgSecondary rounded-lg w-1/2" />
                  <div className="h-4 bg-warm-bgSecondary rounded w-3/4" />
                </div>
              ) : (
                <div className="space-y-3 mb-6 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                    <span className="text-warm-textSecondary">Primary Languages</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {(gh?.primaryLanguages || ["Python", "JS", "C"]).slice(0, 3).map((lang) => (
                        <span key={lang} className="px-2 py-0.5 text-[10px] bg-warm-accent/10 text-warm-accent font-bold rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                    <span className="text-warm-textSecondary">Pinned Projects</span>
                    <span className="font-bold text-warm-textPrimary">3 Core Security Tools</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                    <span className="text-warm-textSecondary">Codebase Quality</span>
                    <span className="font-bold text-warm-success flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> STIX 2.1 Standardized
                    </span>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://github.com/Brijeshwadhwa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-white border border-warm-border hover:border-warm-blue text-warm-textPrimary font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <span>Explore GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5 text-warm-blue" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
