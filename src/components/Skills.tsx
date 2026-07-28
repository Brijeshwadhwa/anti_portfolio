"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Radar, Network, Code, Terminal, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const Skills: React.FC = () => {
  const groups = PORTFOLIO_DATA.skillGroups;

  const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-5 h-5 text-warm-accent" />,
    Radar: <Radar className="w-5 h-5 text-warm-success" />,
    Network: <Network className="w-5 h-5 text-warm-blue" />,
    Code: <Code className="w-5 h-5 text-warm-accent" />,
    Terminal: <Terminal className="w-5 h-5 text-warm-textSecondary" />
  };

  return (
    <section id="skills" className="py-20 relative z-10 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Technical Stack &amp; Competencies
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          Categorized <span className="gradient-text-amber">Skills Matrix</span>
        </h2>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, idx) => (
            <motion.div
              key={group.categoryName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="warm-card warm-card-hover p-6 rounded-2xl flex flex-col justify-between border border-warm-border"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-warm-border">
                  <div className="p-2.5 rounded-xl bg-warm-bgSecondary border border-warm-border">
                    {iconMap[group.iconName]}
                  </div>
                  <h3 className="font-bold text-warm-textPrimary text-base">
                    {group.categoryName}
                  </h3>
                </div>

                {/* Categorized Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.badges.map((badge) => (
                    <div
                      key={badge}
                      className="px-3 py-1.5 rounded-lg bg-warm-bgSecondary border border-warm-border text-xs font-mono text-warm-textPrimary flex items-center gap-1.5 hover:border-warm-accent transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-warm-accent" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
