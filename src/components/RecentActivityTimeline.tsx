"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitCommit, CheckCircle2, ShieldCheck, Code, Calendar } from "lucide-react";

export const RecentActivityTimeline: React.FC = () => {
  const events = [
    {
      date: "Today",
      title: "LeetCode Daily Problem Solved",
      desc: "Completed Medium Data Structures challenge. Maintained continuous learning streak.",
      category: "LeetCode",
      icon: <Code className="w-4 h-4 text-warm-accent" />,
    },
    {
      date: "Recent",
      title: "Threat Intelligence Pipeline Optimization",
      desc: "Standardized IOC JSON payloads into STIX 2.1 schemas for AbuseIPDB and AlienVault OTX feeds.",
      category: "Security Automation",
      icon: <ShieldCheck className="w-4 h-4 text-warm-success" />,
    },
    {
      date: "Recent",
      title: "Automated Nmap Scanner GUI Verification",
      desc: "Validated multithreaded TCP port scanning and live service detection performance.",
      category: "Reconnaissance",
      icon: <GitCommit className="w-4 h-4 text-warm-blue" />,
    },
  ];

  return (
    <section id="recent-activity" className="py-16 relative z-10 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Audit Trail
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          Recent <span className="gradient-text-amber">Engineering Log</span>
        </h2>

        <div className="space-y-4">
          {events.map((ev, idx) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="warm-card p-5 rounded-xl border border-warm-border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-warm-bgSecondary border border-warm-border">
                  {ev.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-warm-accent/10 text-warm-accent rounded">
                      {ev.category}
                    </span>
                    <span className="text-xs font-mono text-warm-textSecondary">{ev.date}</span>
                  </div>
                  <h3 className="font-bold text-warm-textPrimary text-sm mt-1">{ev.title}</h3>
                  <p className="text-xs text-warm-textSecondary mt-0.5">{ev.desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-warm-success font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
