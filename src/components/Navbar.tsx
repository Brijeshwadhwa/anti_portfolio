"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "focus", "projects", "skills", "github", "achievements", "certifications", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Current Focus", href: "#focus" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "GitHub", href: "#github" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D9] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Candidate Photo Avatar */}
        <a href="#hero" className="flex items-center gap-3 group">
          <Image
            src="/profile.jpg"
            alt="Brijesh Wadhwa Avatar"
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-cover object-top border-2 border-warm-border group-hover:border-warm-accent transition-colors shadow-xs"
          />
          <div className="flex flex-col">
            <span className="font-bold text-warm-textPrimary tracking-tight text-sm group-hover:text-warm-accent transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[11px] font-mono text-warm-textSecondary">
              SOC Analyst &amp; Cybersecurity Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white border border-[#E8E2D9] rounded-full px-4 py-1.5 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive
                    ? "text-white bg-warm-accent shadow-xs font-semibold"
                    : "text-warm-textSecondary hover:text-warm-textPrimary hover:bg-[#F3EFE8]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action: Resume PDF Direct Download Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Brijesh_Wadhwa_SOC_Analyst_Resume.pdf"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-warm-accent text-white hover:bg-warm-accentHover transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[#E8E2D9] text-warm-textPrimary"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5]/98 border-b border-[#E8E2D9] px-4 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-warm-textSecondary hover:text-warm-textPrimary hover:bg-[#F3EFE8] rounded-lg font-mono transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8E2D9]">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Brijesh_Wadhwa_SOC_Analyst_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-warm-accent text-white font-semibold text-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
