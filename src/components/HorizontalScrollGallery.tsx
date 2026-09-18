"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShieldCheck, 
  Terminal, 
  ExternalLink, 
  Github, 
  Radar, 
  Cpu, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";

interface GalleryProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  accentColor: string;
  glowColor: string;
  gradient: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoUrl?: string;
  previewType: "radar" | "entropy" | "scanner" | "blue-team";
}

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "threat-intel-pipeline",
    number: "01",
    title: "Threat Intelligence Platform",
    subtitle: "Automated IOC Enrichment & STIX 2.1 Normalization",
    category: "Threat Intelligence",
    accentColor: "#C97B3D", // warm accent
    glowColor: "rgba(201, 123, 61, 0.25)",
    gradient: "from-[#C97B3D]/20 via-[#C97B3D]/5 to-transparent",
    description: "Ingests Indicators of Compromise from AbuseIPDB and AlienVault OTX feeds, standardizing raw feeds into STIX 2.1 schemas with GeoIP, WHOIS, and MITRE ATT&CK contextual mapping.",
    technologies: ["STIX 2.1", "Python", "AbuseIPDB", "AlienVault OTX", "Streamlit", "Flask"],
    metrics: [
      { label: "Standard", value: "STIX 2.1" },
      { label: "Data Sources", value: "Multi-Feed" },
      { label: "Confidence", value: "Dynamic Score" }
    ],
    githubUrl: "https://github.com/Brijeshwadhwa/Threat-Intellgence-Pipeline",
    demoUrl: "https://github.com/Brijeshwadhwa/Threat-Intellgence-Pipeline",
    previewType: "radar"
  },
  {
    id: "whatsapp-phishing-detector",
    number: "02",
    title: "WhatsApp Phishing Detector",
    subtitle: "AI NLP & URL Shannon Entropy Analysis",
    category: "Security Automation",
    accentColor: "#38BDF8", // cyan
    glowColor: "rgba(56, 189, 248, 0.25)",
    gradient: "from-[#38BDF8]/20 via-[#38BDF8]/5 to-transparent",
    description: "Real-time threat evaluation for mobile messaging. Combines Hugging Face NLP models with URL Shannon Entropy calculations and Twilio webhook webhooks to intercept social engineering campaigns.",
    technologies: ["Hugging Face", "Twilio API", "Shannon Entropy", "Python", "Flask", "Regex"],
    metrics: [
      { label: "Analysis", value: "Real-time" },
      { label: "Detection", value: "NLP + Entropy" },
      { label: "Integration", value: "Twilio Webhook" }
    ],
    githubUrl: "https://github.com/Brijeshwadhwa/Whatsapp-Phishing-Detector",
    demoUrl: "https://github.com/Brijeshwadhwa/Whatsapp-Phishing-Detector",
    previewType: "entropy"
  },
  {
    id: "automated-nmap-scanner",
    number: "03",
    title: "Automated Nmap Recon Scanner",
    subtitle: "Multithreaded Host & Port Discovery Engine",
    category: "Security Engineering",
    accentColor: "#10B981", // emerald
    glowColor: "rgba(16, 185, 129, 0.25)",
    gradient: "from-[#10B981]/20 via-[#10B981]/5 to-transparent",
    description: "Accelerated network perimeter recon tool engineered with asynchronous worker threading and Python subprocess controls. Delivers live scan telemetry and automated compliance audit reports.",
    technologies: ["Nmap Engine", "Python", "Multithreading", "Tkinter", "Subprocess"],
    metrics: [
      { label: "Recon", value: "Host + Port" },
      { label: "Engine", value: "Nmap -sV -O" },
      { label: "Execution", value: "Multithreaded" }
    ],
    githubUrl: "https://github.com/Brijeshwadhwa/automated_nmap_scanner",
    previewType: "scanner"
  },
  {
    id: "soc-blue-team-operations",
    number: "04",
    title: "SOC & Blue Team Defense",
    subtitle: "Adversary Simulation & Incident Triage",
    category: "Defensive Operations",
    accentColor: "#8B5CF6", // violet
    glowColor: "rgba(139, 92, 246, 0.25)",
    gradient: "from-[#8B5CF6]/20 via-[#8B5CF6]/5 to-transparent",
    description: "Hands-on threat hunting and defensive engineering across 130+ cybersecurity labs. Ranked in the Top 5% globally on TryHackMe for active defense, packet analysis, and ATT&CK alignment.",
    technologies: ["MITRE ATT&CK", "Wireshark", "TryHackMe (Top 5%)", "Linux", "SIEM"],
    metrics: [
      { label: "Global Rank", value: "Top 5%" },
      { label: "Streak", value: "12+ Days" },
      { label: "Rooms", value: "130+ Completed" }
    ],
    githubUrl: "https://tryhackme.com/p/brijeshwadhwa26",
    demoUrl: "https://tryhackme.com/p/brijeshwadhwa26",
    previewType: "blue-team"
  }
];

export const HorizontalScrollGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ itemWidth: 420, gap: 32 });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setDimensions({ itemWidth: 300, gap: 16 });
      } else if (window.innerWidth < 1024) {
        setDimensions({ itemWidth: 360, gap: 24 });
      } else {
        setDimensions({ itemWidth: 440, gap: 32 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate total translation distance from first item to last item
  const totalDistance = (GALLERY_PROJECTS.length - 1) * (dimensions.itemWidth + dimensions.gap);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <section id="showcase" className="relative bg-warm-bg select-none">
      {/* Intro section */}
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warm-accent/10 border border-warm-accent/20 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-warm-accent animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-warm-accent">
            Interactive Showcase
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-warm-textPrimary tracking-tight">
          Engineering in <span className="gradient-text-amber">Motion</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-warm-textSecondary max-w-2xl mx-auto font-mono">
          Scroll down to glide horizontally through featured cybersecurity projects &amp; defense architectures.
        </p>
      </div>

      {/* Sticky scroll container (300vh gives ample scroll time) */}
      <div 
        ref={containerRef} 
        className="relative h-[280vh] sm:h-[320vh]"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          {/* Subtle Cyber Grid Background Behind the Gallery */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(201, 123, 61, 0.08) 0%, transparent 70%), linear-gradient(to right, rgba(232, 226, 217, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(232, 226, 217, 0.4) 1px, transparent 1px)`,
              backgroundSize: "100% 100%, 48px 48px, 48px 48px"
            }}
          />

          {/* Centered Gallery Viewport */}
          <div 
            className="relative mx-auto flex items-center justify-start overflow-visible transition-all"
            style={{ width: `${dimensions.itemWidth}px` }}
          >
            <motion.div 
              className="flex will-change-transform py-6"
              style={{ 
                x,
                gap: `${dimensions.gap}px`
              }}
            >
              {GALLERY_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 group relative rounded-3xl bg-white dark:bg-[#151D2C] border border-warm-border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-warm-borderHover shadow-warm-md hover:shadow-warm-lg"
                  style={{
                    width: `${dimensions.itemWidth}px`,
                    height: "540px",
                    boxShadow: `0 12px 30px -10px ${project.glowColor}`
                  }}
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-warm-border/60">
                      <span 
                        className="text-2xl sm:text-3xl font-mono font-black tracking-tighter"
                        style={{ color: project.accentColor }}
                      >
                        {project.number}
                      </span>
                      <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-md bg-warm-bgSecondary text-warm-textSecondary border border-warm-border">
                        {project.category}
                      </span>
                    </div>

                    {/* Interactive Visual Graphic Box */}
                    <div 
                      className={`relative h-32 rounded-2xl p-4 mb-5 overflow-hidden flex flex-col justify-between border border-warm-border/80 bg-gradient-to-br ${project.gradient}`}
                    >
                      {/* Decorative Background Icon */}
                      <div className="absolute -right-3 -bottom-3 opacity-10 pointer-events-none">
                        {project.previewType === "radar" && <Radar className="w-32 h-32 text-warm-textPrimary" />}
                        {project.previewType === "entropy" && <Cpu className="w-32 h-32 text-warm-textPrimary" />}
                        {project.previewType === "scanner" && <Terminal className="w-32 h-32 text-warm-textPrimary" />}
                        {project.previewType === "blue-team" && <ShieldCheck className="w-32 h-32 text-warm-textPrimary" />}
                      </div>

                      {/* Graphic Header / Badge */}
                      <div className="flex items-center gap-2 z-10">
                        <span 
                          className="w-2 h-2 rounded-full animate-ping"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-warm-textPrimary">
                          Live Architecture
                        </span>
                      </div>

                      {/* Mini Metrics Row inside Graphic */}
                      <div className="grid grid-cols-3 gap-2 z-10">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-sm p-1.5 rounded-lg border border-warm-border/50 text-center">
                            <span className="block text-[9px] font-mono text-warm-textSecondary leading-tight">{m.label}</span>
                            <span className="block text-[11px] font-mono font-bold text-warm-textPrimary truncate">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-warm-textPrimary group-hover:text-warm-accent transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-warm-textSecondary mt-1 line-clamp-1">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-warm-textSecondary mt-3 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Footer & Badges */}
                  <div className="mt-4 pt-4 border-t border-warm-border/60">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-warm-bgSecondary text-warm-textSecondary border border-warm-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-warm-textSecondary">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-warm-textPrimary hover:bg-black dark:hover:bg-warm-accent text-white text-xs font-mono font-semibold transition-all shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                      
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-[#151D2C] hover:bg-warm-bgSecondary border border-warm-border text-warm-textPrimary text-xs font-mono font-medium transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      ) : (
                        <a
                          href="#projects"
                          className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-white dark:bg-[#151D2C] hover:bg-warm-bgSecondary border border-warm-border text-warm-textPrimary text-xs font-mono font-medium transition-all"
                        >
                          <span>Case Study</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicator Bar at Bottom of Sticky Section */}
          <div className="max-w-xs mx-auto w-full px-6 mt-6">
            <div className="flex items-center justify-between text-[11px] font-mono text-warm-textSecondary mb-1.5">
              <span>01 / 0{GALLERY_PROJECTS.length}</span>
              <span className="flex items-center gap-1">
                <span>SCROLL PROGRESS</span>
                <ArrowRight className="w-3 h-3 text-warm-accent" />
              </span>
            </div>
            <div className="h-1.5 w-full bg-warm-border rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-warm-accent rounded-full"
                style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
