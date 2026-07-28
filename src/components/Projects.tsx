"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ShieldAlert, 
  Layers, 
  FileCode, 
  ArrowRight, 
  X, 
  CheckCircle2 
} from "lucide-react";
import { PORTFOLIO_DATA, CaseStudyProject } from "@/data/portfolio-data";
import { ThreatIntelDiagramSVG, PhishingDetectorDiagramSVG, NmapScannerDiagramSVG } from "@/components/ProjectDiagrams";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<CaseStudyProject | null>(null);

  const projects = PORTFOLIO_DATA.projects;
  const categories = ["All", "Threat Intelligence", "Security Automation", "Security Engineering", "Systems"];

  const filtered = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const renderDiagram = (id: string) => {
    switch (id) {
      case "threat-intel-pipeline":
        return <ThreatIntelDiagramSVG />;
      case "whatsapp-phishing-detector":
        return <PhishingDetectorDiagramSVG />;
      case "automated-nmap-scanner":
        return <NmapScannerDiagramSVG />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <FolderGit2 className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Engineering Case Studies
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          Featured <span className="gradient-text-amber">Security Projects</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-warm-accent text-white shadow-warm-sm font-bold"
                  : "bg-white border border-warm-border text-warm-textSecondary hover:text-warm-textPrimary hover:border-warm-borderHover"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Deep Case-Study Cards */}
        <div className="space-y-10">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="warm-card warm-card-hover p-6 sm:p-8 rounded-2xl border border-warm-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-warm-border">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-warm-accent/10 text-warm-accent border border-warm-accent/20 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-warm-textSecondary">
                      {project.heroTag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-warm-textPrimary">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-warm-blue mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-warm-accent hover:bg-warm-accentHover text-white text-xs font-semibold transition-all shadow-warm-sm"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-warm-border text-warm-textSecondary hover:text-warm-textPrimary transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Vector Architecture Diagram Visual */}
              {renderDiagram(project.id) && (
                <div className="mb-6 p-4 rounded-xl bg-warm-bgSecondary border border-warm-border">
                  <span className="text-[11px] font-mono uppercase text-warm-textSecondary font-bold block mb-2">
                    System Architecture Workflow Diagram
                  </span>
                  {renderDiagram(project.id)}
                </div>
              )}

              {/* Case-Study Core Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Problem & Architecture */}
                <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-warm-textSecondary leading-relaxed">
                  <div>
                    <h4 className="font-bold text-warm-textPrimary mb-1.5 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-warm-accent" />
                      <span>Problem Statement</span>
                    </h4>
                    <p>{project.problemStatement}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-warm-textPrimary mb-1.5 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-warm-blue" />
                      <span>Architecture Workflow</span>
                    </h4>
                    <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border font-mono text-xs text-warm-textPrimary overflow-x-auto">
                      {project.architectureWorkflow}
                    </div>
                  </div>
                </div>

                {/* Right Column: ATT&CK Threat Model & Technologies */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <h4 className="font-bold text-warm-textPrimary mb-2 text-xs uppercase font-mono tracking-wider">
                      ATT&amp;CK Threat Model
                    </h4>
                    <div className="space-y-2">
                      {project.threatModel.map((tm) => (
                        <div key={tm.technique} className="p-3 rounded-xl bg-warm-bgSecondary border border-warm-border text-xs font-mono">
                          <span className="text-warm-accent font-bold">{tm.technique}</span>
                          <span className="text-warm-textPrimary block mt-0.5 font-sans font-semibold">{tm.tactic}</span>
                          <span className="text-warm-textSecondary text-[11px] block mt-1">{tm.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-warm-textPrimary mb-2 text-xs uppercase font-mono tracking-wider">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-[11px] font-mono bg-white border border-warm-border text-warm-textPrimary rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Detailed Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white border border-warm-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-warm-lg relative text-xs sm:text-sm">
              
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-warm-bgSecondary text-warm-textSecondary hover:text-warm-textPrimary"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 text-xs font-mono font-bold bg-warm-accent/15 text-warm-accent border border-warm-accent/30 rounded">
                  {activeModalProject.category}
                </span>
                <span className="font-mono text-warm-textSecondary">{activeModalProject.heroTag}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-warm-textPrimary mb-1">
                {activeModalProject.title}
              </h3>
              <p className="text-warm-blue font-mono mb-6">{activeModalProject.subtitle}</p>

              <div className="space-y-6 text-warm-textSecondary leading-relaxed">
                
                <div>
                  <h4 className="text-base font-bold text-warm-textPrimary mb-2">Why This Project Exists</h4>
                  <p>{activeModalProject.whyExists}</p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-warm-textPrimary mb-2">Implementation Details</h4>
                  <ul className="space-y-1.5 font-mono text-xs">
                    {activeModalProject.implementationDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-warm-bgSecondary p-3 rounded-lg border border-warm-border text-warm-textPrimary">
                        <span className="text-warm-accent font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeModalProject.codeSnippets.map((snip) => (
                  <div key={snip.filename}>
                    <h4 className="text-base font-bold text-warm-textPrimary mb-2 flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-warm-accent" />
                      <span>Code Snippet ({snip.filename})</span>
                    </h4>
                    <pre className="bg-[#1F2937] p-4 rounded-xl border border-warm-border font-mono text-xs text-warm-accent overflow-x-auto">
                      <code>{snip.code}</code>
                    </pre>
                  </div>
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-warm-bgSecondary border border-warm-border">
                    <h4 className="font-bold text-warm-textPrimary mb-2">Challenges Solved</h4>
                    <ul className="space-y-1 text-xs text-warm-textSecondary">
                      {activeModalProject.challengesSolved.map((c) => (
                        <li key={c}>✓ {c}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-warm-bgSecondary border border-warm-border">
                    <h4 className="font-bold text-warm-textPrimary mb-2">Lessons &amp; Future Work</h4>
                    <ul className="space-y-1 text-xs text-warm-textSecondary">
                      {activeModalProject.futureImprovements.map((f) => (
                        <li key={f}>→ {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-4 border-t border-warm-border flex justify-end">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-warm-accent text-white font-bold text-xs hover:bg-warm-accentHover transition-all shadow-warm-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
