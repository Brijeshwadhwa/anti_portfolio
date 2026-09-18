"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Cpu, Terminal, Target } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const CurrentlyActive: React.FC = () => {
  const focusAreas = PORTFOLIO_DATA.personal.currentFocus;

  const icons = [
    <ShieldAlert key="1" className="w-5 h-5 text-warm-accent" />,
    <Target key="2" className="w-5 h-5 text-warm-blue" />,
    <Terminal key="3" className="w-5 h-5 text-warm-success" />,
  ];

  return (
    <section id="focus" className="py-14 relative z-10 bg-warm-bgSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Engineering Direction
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          Current <span className="gradient-text-amber">Engineering Focus</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="warm-card p-6 rounded-2xl border border-warm-border flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-white border border-warm-border w-fit mb-4">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="font-bold text-warm-textPrimary text-base mb-2">{area.name}</h3>
                <p className="text-xs text-warm-textSecondary leading-relaxed">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
