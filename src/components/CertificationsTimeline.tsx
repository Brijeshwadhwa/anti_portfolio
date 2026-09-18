"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle2, GraduationCap, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const CertificationsTimeline: React.FC = () => {
  const certs = PORTFOLIO_DATA.certifications;
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="certifications" className="py-16 relative z-10 bg-warm-bgSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Qualifications &amp; Education
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          Certifications &amp; <span className="gradient-text-amber">Education</span>
        </h2>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="warm-card warm-card-hover p-5 rounded-2xl flex flex-col justify-between border border-warm-border"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-warm-blue/15 text-warm-blue border border-warm-blue/30 rounded">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-warm-textSecondary flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-warm-accent" />
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-bold text-warm-textPrimary text-sm mb-1">{cert.title}</h3>
                <span className="text-xs font-mono text-warm-textSecondary block mb-3">{cert.issuer}</span>
              </div>

              <div className="pt-3 border-t border-warm-border flex items-center justify-between text-xs font-mono text-warm-success">
                <span className="flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Certification
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Streamlined Education */}
        <div className="warm-card p-6 sm:p-8 rounded-2xl border border-warm-border">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-warm-blue/10 text-warm-blue border border-warm-blue/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-warm-textPrimary text-base">Academic Qualifications</h3>
              <span className="text-xs font-mono text-warm-textSecondary">Computer Science &amp; Engineering</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            {edu.map((e) => (
              <div key={e.qualification} className="p-4 rounded-xl bg-warm-bgSecondary border border-warm-border flex flex-col justify-between">
                <div>
                  <span className="font-bold text-warm-textPrimary font-sans block text-sm mb-0.5">{e.institution}</span>
                  <span className="text-warm-textSecondary text-xs block mb-2">{e.qualification}</span>
                </div>
                <span className="text-warm-accent font-bold text-sm">{e.grade}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
