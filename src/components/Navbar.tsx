"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavPillItemProps {
  link: { label: string; href: string };
  isActive: boolean;
  isHovered: boolean;
  onHover: () => void;
  mouseX: MotionValue<number>;
}

const NavPillItem: React.FC<NavPillItemProps> = ({
  link,
  isActive,
  isHovered,
  onHover,
  mouseX,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0, left: 0 };
    return val - (bounds.left + bounds.width / 2);
  });

  const scaleTransform = useTransform(distance, [-110, 0, 110], [1, 1.15, 1]);
  const yTransform = useTransform(distance, [-110, 0, 110], [0, -2, 0]);

  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });

  const y = useSpring(yTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });

  return (
    <motion.a
      ref={ref}
      href={link.href}
      style={{ scale, y }}
      onMouseEnter={onHover}
      className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors inline-flex items-center justify-center select-none ${
        isActive
          ? "text-white font-semibold"
          : "text-warm-textSecondary hover:text-warm-textPrimary"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="nav-pill-active"
          className="absolute inset-0 bg-warm-accent rounded-full -z-10 shadow-xs"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      {!isActive && isHovered && (
        <motion.span
          layoutId="nav-pill-hover"
          className="absolute inset-0 bg-[#F3EFE8] rounded-full -z-10"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10">{link.label}</span>
    </motion.a>
  );
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "focus", "showcase", "projects", "skills", "github", "achievements", "certifications", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current === "showcase") {
        setActiveSection("projects");
      } else if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Current Focus", href: "#focus" },
    { label: "Projects", href: "#showcase" },
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
          ? "bg-warm-bg/90 backdrop-blur-md border-b border-warm-border py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Monogram Badge */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-warm-bgSecondary border border-warm-border group-hover:border-warm-accent flex items-center justify-center font-mono font-bold text-xs text-warm-accent group-hover:bg-warm-accent group-hover:text-white transition-all shadow-xs relative">
            <span>BW</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-warm-success border-2 border-white dark:border-[#151D2C]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-warm-textPrimary tracking-tight text-sm group-hover:text-warm-accent transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[11px] font-mono text-warm-textSecondary">
              SOC Analyst &amp; Cybersecurity Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Floating Dock Spring Wave Animation */}
        <motion.nav
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => {
            mouseX.set(Infinity);
            setHoveredLink(null);
          }}
          className="hidden lg:flex items-center gap-1 bg-white dark:bg-[#151D2C] border border-warm-border rounded-full px-3.5 py-1.5 shadow-xs"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <NavPillItem
                key={link.href}
                link={link}
                isActive={isActive}
                isHovered={hoveredLink === link.href}
                onHover={() => setHoveredLink(link.href)}
                mouseX={mouseX}
              />
            );
          })}
        </motion.nav>

        {/* Action: Theme Toggle + Resume PDF Direct Download Button */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
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

        {/* Mobile Actions: Theme Toggle + Hamburger Menu */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl bg-white dark:bg-[#151D2C] border border-warm-border text-warm-textPrimary"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-warm-bg/98 border-b border-warm-border px-4 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-warm-textSecondary hover:text-warm-textPrimary hover:bg-warm-bgSecondary rounded-lg font-mono transition-colors"
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
