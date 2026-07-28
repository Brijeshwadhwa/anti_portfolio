"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, GitBranch } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const GitHubSection: React.FC = () => {
  const gh = PORTFOLIO_DATA.githubMetrics;

  return (
    <section id="github" className="py-20 relative z-10 bg-warm-bgSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <Github className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Version Control &amp; Engineering Quality
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          GitHub Engineering &amp; <span className="gradient-text-amber">Repositories</span>
        </h2>

        {/* GitHub Top Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="warm-card p-5 rounded-xl text-center border border-warm-border">
            <span className="text-xs font-mono text-warm-textSecondary block mb-1">Public Repositories</span>
            <span className="text-3xl font-black text-warm-textPrimary font-mono">{gh.totalRepos}</span>
          </div>

          <div className="warm-card p-5 rounded-xl text-center border border-warm-border">
            <span className="text-xs font-mono text-warm-textSecondary block mb-1">Primary Languages</span>
            <div className="flex flex-wrap items-center justify-center gap-1 mt-1">
              {gh.primaryLanguages.map((lang) => (
                <span key={lang} className="px-2 py-0.5 text-[10px] font-mono bg-warm-accent/10 text-warm-accent rounded font-semibold">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="warm-card p-5 rounded-xl text-center border border-warm-border">
            <span className="text-xs font-mono text-warm-textSecondary block mb-1">GitHub Profile</span>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-warm-accent hover:underline mt-2"
            >
              <span>github.com/Brijeshwadhwa</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gh.pinnedRepos.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="warm-card warm-card-hover p-6 rounded-2xl flex flex-col justify-between border border-warm-border"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-warm-blue" />
                    <h3 className="font-bold text-warm-textPrimary text-base">{repo.name}</h3>
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono bg-warm-bgSecondary border border-warm-border text-warm-textSecondary rounded">
                    {repo.lang}
                  </span>
                </div>
                <p className="text-xs text-warm-textSecondary leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <a
                href={`${PORTFOLIO_DATA.personal.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-warm-accent hover:underline"
              >
                <span>View Source Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
