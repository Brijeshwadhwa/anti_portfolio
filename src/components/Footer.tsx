"use client";

import React from "react";
import { Shield, ArrowUp, Github, Linkedin, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-warm-bg border-t border-warm-border relative z-10 font-mono text-xs text-warm-textSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white border border-warm-border text-warm-accent shadow-xs">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-warm-textPrimary text-sm block">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-xs text-warm-textSecondary">
                SOC Analyst &amp; Cybersecurity Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white border border-warm-border hover:border-warm-accent text-warm-textSecondary hover:text-warm-textPrimary transition-colors shadow-xs"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white border border-warm-border hover:border-warm-blue text-warm-textSecondary hover:text-warm-textPrimary transition-colors shadow-xs"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-warm-blue" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Brijesh_Wadhwa_SOC_Analyst_Resume.pdf"
              className="p-2 rounded-xl bg-white border border-warm-border hover:border-warm-accent text-warm-accent transition-colors shadow-xs"
              title="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white border border-warm-border hover:border-warm-accent text-warm-textPrimary transition-colors shadow-xs"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-warm-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-warm-textSecondary">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
          <p>Built with Next.js 15, TypeScript, Tailwind CSS &amp; Framer Motion</p>
        </div>

      </div>
    </footer>
  );
};
