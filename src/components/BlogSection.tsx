"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, X } from "lucide-react";
import { PORTFOLIO_DATA, BlogArticle } from "@/data/portfolio-data";

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  const articles = PORTFOLIO_DATA.blogArticles;

  return (
    <section id="blog" className="py-20 relative z-10 bg-warm-bgSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Technical Publications
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          Cybersecurity &amp; <span className="gradient-text-amber">Engineering Articles</span>
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="warm-card warm-card-hover p-6 rounded-2xl flex flex-col justify-between border border-warm-border"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-warm-blue/15 text-warm-blue border border-warm-blue/30 rounded">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-warm-textSecondary">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-warm-textPrimary mb-2 leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-warm-textSecondary leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <button
                onClick={() => setActiveArticle(art)}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-warm-accent hover:underline"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* MDX Article Overlay Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white border border-warm-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-warm-lg relative text-warm-textSecondary text-sm">
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-warm-bgSecondary text-warm-textSecondary hover:text-warm-textPrimary"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 text-xs font-mono font-bold bg-warm-accent/15 text-warm-accent border border-warm-accent/30 rounded">
                  {activeArticle.category}
                </span>
                <span className="font-mono text-xs text-warm-textSecondary">{activeArticle.date} • {activeArticle.readTime}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-warm-textPrimary mb-6">
                {activeArticle.title}
              </h3>

              <div className="space-y-4 text-warm-textPrimary leading-relaxed font-sans border-t border-warm-border pt-6">
                <div className="prose max-w-none text-xs sm:text-sm whitespace-pre-line text-warm-textSecondary">
                  {activeArticle.contentMarkdown}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-warm-border flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-xl bg-warm-bgSecondary text-warm-textPrimary font-mono text-xs hover:bg-warm-border"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
