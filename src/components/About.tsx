"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Target, ShieldCheck, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const About: React.FC = () => {
  const about = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="py-20 relative z-10 bg-warm-bgSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <User className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            About Me
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          Security Engineering &amp; <span className="gradient-text-amber">Blue Team Defense</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bio Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="warm-card p-6 sm:p-8 rounded-2xl space-y-4 text-warm-textSecondary text-sm sm:text-base leading-relaxed">
              <h3 className="text-lg font-bold text-warm-textPrimary flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-warm-accent" />
                <span>Background &amp; Security Philosophy</span>
              </h3>
              <p>{about.bio}</p>
              <p>{about.motivation}</p>

              <h3 className="text-lg font-bold text-warm-textPrimary pt-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-warm-success" />
                <span>Career Aspirations</span>
              </h3>
              <p>{about.careerAspirations}</p>
            </div>
          </motion.div>

          {/* Quick Academic & Technical Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="warm-card p-6 rounded-2xl space-y-3">
              <span className="text-xs font-mono uppercase text-warm-textSecondary block">Education</span>
              <h4 className="font-bold text-warm-textPrimary text-base">{PORTFOLIO_DATA.personal.degree}</h4>
              <p className="text-xs text-warm-textSecondary font-mono">{PORTFOLIO_DATA.personal.university}</p>
            </div>

            <div className="warm-card p-6 rounded-2xl space-y-3">
              <span className="text-xs font-mono uppercase text-warm-textSecondary block">Primary Specialization</span>
              <h4 className="font-bold text-warm-textPrimary text-base">Threat Intelligence &amp; SOC Operations</h4>
              <p className="text-xs text-warm-textSecondary leading-relaxed">
                STIX 2.1 schemas, Threat Feed Ingestion, URL Shannon Entropy math, and Nmap discovery automation.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
