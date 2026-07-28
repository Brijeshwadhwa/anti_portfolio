"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle2, GraduationCap, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const CertificationsTimeline: React.FC = () => {
  const certs = PORTFOLIO_DATA.certifications;
  const training = PORTFOLIO_DATA.training;
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="certifications" className="py-20 relative z-10 bg-warm-bgSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Qualifications &amp; Education
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          Certifications &amp; <span className="gradient-text-amber">Training History</span>
        </h2>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="warm-card warm-card-hover p-6 rounded-2xl flex flex-col justify-between border border-warm-border"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold bg-warm-blue/15 text-warm-blue border border-warm-blue/30 rounded">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-warm-textSecondary flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-warm-accent" />
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-bold text-warm-textPrimary text-base mb-1">{cert.title}</h3>
                <span className="text-xs font-mono text-warm-textSecondary block mb-4">{cert.issuer}</span>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono bg-warm-bgSecondary border border-warm-border text-warm-textPrimary rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-warm-border flex items-center justify-between text-xs font-mono text-warm-success">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified CV Certification
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training & Education Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Summer Training */}
          <div className="warm-card p-6 rounded-2xl border border-warm-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-warm-accent/10 text-warm-accent border border-warm-accent/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-warm-textPrimary text-base">Summer Training</h3>
                <span className="text-xs font-mono text-warm-textSecondary">Algorithms &amp; Data Structures</span>
              </div>
            </div>
            {training.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-warm-textPrimary text-sm">{item.title}</h4>
                  <span className="text-xs font-mono text-warm-accent">{item.period}</span>
                </div>
                <p className="text-xs text-warm-textSecondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Education Breakdown */}
          <div className="warm-card p-6 rounded-2xl border border-warm-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-warm-blue/10 text-warm-blue border border-warm-blue/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-warm-textPrimary text-base">Education History</h3>
                <span className="text-xs font-mono text-warm-textSecondary">Academic Qualifications</span>
              </div>
            </div>
            <div className="space-y-3 font-mono text-xs">
              {edu.map((e) => (
                <div key={e.qualification} className="p-3 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                  <div>
                    <span className="font-bold text-warm-textPrimary font-sans block text-sm">{e.institution}</span>
                    <span className="text-warm-textSecondary text-xs">{e.qualification}</span>
                  </div>
                  <span className="text-warm-accent font-bold">{e.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
