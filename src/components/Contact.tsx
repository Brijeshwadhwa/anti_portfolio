"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Send, Github, Linkedin, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative z-10 bg-warm-bgSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Contact &amp; Outreach
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          Get In <span className="gradient-text-amber">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="warm-card p-6 sm:p-8 rounded-2xl space-y-6 border border-warm-border">
              <h3 className="text-lg font-bold text-warm-textPrimary">Direct Channels</h3>
              <p className="text-xs text-warm-textSecondary leading-relaxed">
                Available for SOC Analyst, Threat Intelligence, and Security Engineering roles. Feel free to send a message or download my resume.
              </p>

              {/* Email Copy Box */}
              <div className="p-4 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                <div className="truncate pr-2">
                  <span className="text-[10px] font-mono text-warm-textSecondary block">Official Email</span>
                  <span className="text-xs font-mono text-warm-textPrimary font-semibold truncate block">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white hover:bg-warm-accent/20 text-warm-textSecondary hover:text-warm-accent transition-colors border border-warm-border"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-warm-success" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border hover:border-warm-accent text-warm-textSecondary hover:text-warm-textPrimary flex items-center justify-between text-xs font-mono transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-warm-textPrimary" />
                    <span>GitHub / Brijeshwadhwa</span>
                  </div>
                  <span>↗</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border hover:border-warm-blue text-warm-textSecondary hover:text-warm-textPrimary flex items-center justify-between text-xs font-mono transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-warm-blue" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span>↗</span>
                </a>
              </div>

              {/* Verified Resume PDF Download CTA */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Brijesh_Wadhwa_SOC_Analyst_Resume.pdf"
                className="w-full py-3 rounded-xl bg-warm-accent hover:bg-warm-accentHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-warm-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="warm-card p-6 sm:p-8 rounded-2xl border border-warm-border">
              <h3 className="text-lg font-bold text-warm-textPrimary mb-6">Send Message</h3>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-warm-success/10 border border-warm-success/30 text-center space-y-2">
                  <Check className="w-8 h-8 text-warm-success mx-auto" />
                  <h4 className="font-bold text-warm-textPrimary text-base">Message Sent Successfully</h4>
                  <p className="text-xs text-warm-textSecondary font-mono">
                    Thank you! Brijesh will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-warm-textSecondary block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Technical Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-warm-bgSecondary border border-warm-border text-warm-textPrimary font-mono text-xs focus:outline-none focus:border-warm-accent"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-warm-textSecondary block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-warm-bgSecondary border border-warm-border text-warm-textPrimary font-mono text-xs focus:outline-none focus:border-warm-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-warm-textSecondary block mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Security Engineering Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-warm-bgSecondary border border-warm-border text-warm-textPrimary font-mono text-xs focus:outline-none focus:border-warm-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-warm-textSecondary block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Brijesh, I reviewed your STIX 2.1 Threat Intel portfolio..."
                      className="w-full px-4 py-2.5 rounded-xl bg-warm-bgSecondary border border-warm-border text-warm-textPrimary font-mono text-xs focus:outline-none focus:border-warm-accent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-warm-accent hover:bg-warm-accentHover text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-warm-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
