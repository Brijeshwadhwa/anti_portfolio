"use client";

import React from "react";

export const HeroVisualSVG: React.FC = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-md mx-auto">
    <rect width="400" height="300" rx="16" fill="#F3EFE8" />
    <circle cx="200" cy="110" r="45" fill="#E8E2D9" stroke="#C97B3D" strokeWidth="3" />
    <path d="M175 105C175 95 186 87 200 87C214 87 225 95 225 105" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
    <circle cx="188" cy="100" r="4" fill="#1F2937" />
    <circle cx="212" cy="100" r="4" fill="#1F2937" />
    <path d="M140 210C140 170 167 155 200 155C233 155 260 170 260 210" fill="#4F7CAC" opacity="0.85" />
    
    {/* Decorative Security Elements */}
    <rect x="30" y="40" width="100" height="60" rx="8" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="2" />
    <path d="M45 60H105M45 75H85" stroke="#4F7CAC" strokeWidth="3" strokeLinecap="round" />

    <rect x="270" y="180" width="100" height="60" rx="8" fill="#FFFFFF" stroke="#E8E2D9" strokeWidth="2" />
    <path d="M285 200H345M285 215H325" stroke="#C97B3D" strokeWidth="3" strokeLinecap="round" />

    <circle cx="60" cy="220" r="20" fill="#3FA34D" opacity="0.2" />
    <path d="M52 220L58 226L68 214" stroke="#3FA34D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ThreatIntelDiagramSVG: React.FC = () => (
  <svg viewBox="0 0 650 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect width="650" height="200" rx="12" fill="#FAF8F5" stroke="#E8E2D9" strokeWidth="2" />
    
    {/* Feeds */}
    <rect x="20" y="35" width="120" height="50" rx="8" fill="#FFFFFF" stroke="#4F7CAC" strokeWidth="2" />
    <text x="80" y="65" textAnchor="middle" fill="#1F2937" fontSize="12" fontFamily="sans-serif" fontWeight="bold">OTX & AbuseIPDB</text>
    
    <rect x="20" y="115" width="120" height="50" rx="8" fill="#FFFFFF" stroke="#4F7CAC" strokeWidth="2" />
    <text x="80" y="145" textAnchor="middle" fill="#1F2937" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Security RSS Feeds</text>

    {/* Arrow 1 */}
    <path d="M140 60H185M140 140H160V100H185" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />

    {/* Pipeline Process */}
    <rect x="190" y="65" width="130" height="70" rx="8" fill="#FFFFFF" stroke="#C97B3D" strokeWidth="2" />
    <text x="255" y="98" textAnchor="middle" fill="#1F2937" fontSize="12" fontFamily="sans-serif" fontWeight="bold">STIX 2.1 Engine</text>
    <text x="255" y="115" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="sans-serif">Deduplication & Schema</text>

    {/* Arrow 2 */}
    <path d="M320 100H365" stroke="#6B7280" strokeWidth="2" />

    {/* Context Enrichment */}
    <rect x="370" y="65" width="120" height="70" rx="8" fill="#FFFFFF" stroke="#3FA34D" strokeWidth="2" />
    <text x="430" y="98" textAnchor="middle" fill="#1F2937" fontSize="12" fontFamily="sans-serif" fontWeight="bold">GeoIP & WHOIS</text>
    <text x="430" y="115" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="sans-serif">Confidence Scoring</text>

    {/* Arrow 3 */}
    <path d="M490 100H535" stroke="#6B7280" strokeWidth="2" />

    {/* Output Dashboard */}
    <rect x="540" y="65" width="90" height="70" rx="8" fill="#1F2937" />
    <text x="585" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">SQLite &</text>
    <text x="585" y="115" textAnchor="middle" fill="#C97B3D" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Streamlit</text>
  </svg>
);

export const PhishingDetectorDiagramSVG: React.FC = () => (
  <svg viewBox="0 0 650 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect width="650" height="180" rx="12" fill="#FAF8F5" stroke="#E8E2D9" strokeWidth="2" />

    <rect x="25" y="55" width="110" height="70" rx="8" fill="#FFFFFF" stroke="#4F7CAC" strokeWidth="2" />
    <text x="80" y="90" textAnchor="middle" fill="#1F2937" fontSize="11" fontFamily="sans-serif" fontWeight="bold">WhatsApp / Web</text>
    <text x="80" y="105" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="sans-serif">Message Payload</text>

    <path d="M135 90H175" stroke="#6B7280" strokeWidth="2" />

    <rect x="180" y="55" width="140" height="70" rx="8" fill="#FFFFFF" stroke="#C97B3D" strokeWidth="2" />
    <text x="250" y="85" textAnchor="middle" fill="#1F2937" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Entropy Computation</text>
    <text x="250" y="105" textAnchor="middle" fill="#C97B3D" fontSize="10" fontFamily="sans-serif">H(X) Randomness Math</text>

    <path d="M320 90H360" stroke="#6B7280" strokeWidth="2" />

    <rect x="365" y="55" width="130" height="70" rx="8" fill="#FFFFFF" stroke="#3FA34D" strokeWidth="2" />
    <text x="430" y="85" textAnchor="middle" fill="#1F2937" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Domain Age Check</text>
    <text x="430" y="105" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="sans-serif">WHOIS API (&lt;30 Days)</text>

    <path d="M495 90H535" stroke="#6B7280" strokeWidth="2" />

    <rect x="540" y="55" width="85" height="70" rx="8" fill="#3FA34D" />
    <text x="582" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Risk Score</text>
    <text x="582" y="105" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif">Clean / Phish</text>
  </svg>
);

export const NmapScannerDiagramSVG: React.FC = () => (
  <svg viewBox="0 0 650 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect width="650" height="180" rx="12" fill="#FAF8F5" stroke="#E8E2D9" strokeWidth="2" />

    <rect x="30" y="55" width="120" height="70" rx="8" fill="#FFFFFF" stroke="#4F7CAC" strokeWidth="2" />
    <text x="90" y="88" textAnchor="middle" fill="#1F2937" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Tkinter Desktop GUI</text>
    <text x="90" y="105" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="sans-serif">IP &amp; Port Parameters</text>

    <path d="M150 90H195" stroke="#6B7280" strokeWidth="2" />

    <rect x="200" y="55" width="130" height="70" rx="8" fill="#FFFFFF" stroke="#C97B3D" strokeWidth="2" />
    <text x="265" y="88" textAnchor="middle" fill="#1F2937" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Async Thread Pool</text>
    <text x="265" y="105" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="sans-serif">Subprocess Execution</text>

    <path d="M330 90H375" stroke="#6B7280" strokeWidth="2" />

    <rect x="380" y="55" width="120" height="70" rx="8" fill="#FFFFFF" stroke="#3FA34D" strokeWidth="2" />
    <text x="440" y="88" textAnchor="middle" fill="#1F2937" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Nmap CLI Engine</text>
    <text x="440" y="105" textAnchor="middle" fill="#6B7280" fontSize="10" fontFamily="sans-serif">-sV -O -p Ports</text>

    <path d="M500 90H545" stroke="#6B7280" strokeWidth="2" />

    <rect x="550" y="55" width="75" height="70" rx="8" fill="#1F2937" />
    <text x="587" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">XML/Text</text>
    <text x="587" y="105" textAnchor="middle" fill="#C97B3D" fontSize="10" fontFamily="sans-serif">Audit Logs</text>
  </svg>
);
