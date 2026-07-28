"use client";

import React from "react";
import { Radar, ShieldCheck, FileCode, Network, Search } from "lucide-react";

export const CyberSecuritySection: React.FC = () => {
  return (
    <section id="threat-intel" className="py-20 relative z-10 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <Radar className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Defense Frameworks
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          STIX 2.1 &amp; <span className="gradient-text-amber">MITRE ATT&amp;CK Taxonomy</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* MITRE ATT&CK Taxonomy */}
          <div className="lg:col-span-6 warm-card p-6 sm:p-8 rounded-2xl border border-warm-border">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-5 h-5 text-warm-accent" />
              <div>
                <h3 className="text-lg font-bold text-warm-textPrimary">ATT&amp;CK Technique Taxonomy</h3>
                <p className="text-xs font-mono text-warm-textSecondary">Adversary Tactics Mapped in Detection Projects</p>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                <div>
                  <span className="text-warm-accent font-bold">T1071</span>
                  <span className="text-warm-textPrimary block font-sans font-semibold text-sm">Application Layer Protocol</span>
                </div>
                <span className="text-[11px] text-warm-textSecondary">Command &amp; Control</span>
              </div>

              <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                <div>
                  <span className="text-warm-accent font-bold">T1566</span>
                  <span className="text-warm-textPrimary block font-sans font-semibold text-sm">Phishing (Spearphishing Links)</span>
                </div>
                <span className="text-[11px] text-warm-textSecondary">Initial Access</span>
              </div>

              <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                <div>
                  <span className="text-warm-accent font-bold">T1046</span>
                  <span className="text-warm-textPrimary block font-sans font-semibold text-sm">Network Service Discovery</span>
                </div>
                <span className="text-[11px] text-warm-textSecondary">Reconnaissance</span>
              </div>

              <div className="p-3.5 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center justify-between">
                <div>
                  <span className="text-warm-accent font-bold">T1090</span>
                  <span className="text-warm-textPrimary block font-sans font-semibold text-sm">Proxy / Tor Routing Detection</span>
                </div>
                <span className="text-[11px] text-warm-textSecondary">Defense Evasion</span>
              </div>
            </div>
          </div>

          {/* STIX 2.1 Schema */}
          <div className="lg:col-span-6 warm-card p-6 sm:p-8 rounded-2xl border border-warm-border flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileCode className="w-5 h-5 text-warm-success" />
                <div>
                  <h3 className="text-lg font-bold text-warm-textPrimary">STIX 2.1 Standardization</h3>
                  <p className="text-xs font-mono text-warm-textSecondary">Structured Cyber Threat Ingestion Schema</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1F2937] border border-warm-border font-mono text-xs text-warm-accent overflow-x-auto mb-6">
                <pre><code>{`{
  "type": "indicator",
  "spec_version": "2.1",
  "pattern": "[ipv4-addr:value = '185.220.101.5']",
  "confidence": 95,
  "labels": ["malicious-activity", "c2-proxy"],
  "external_references": [
    { "source_name": "mitre-attack", "external_id": "T1090" }
  ]
}`}</code></pre>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center gap-2">
                <Search className="w-4 h-4 text-warm-accent" />
                <span>GeoIP / WHOIS</span>
              </div>
              <div className="p-3 rounded-xl bg-warm-bgSecondary border border-warm-border flex items-center gap-2">
                <Network className="w-4 h-4 text-warm-success" />
                <span>Wireshark PCAPs</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
