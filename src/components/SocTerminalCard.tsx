"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Play, 
  Pause, 
  RotateCcw, 
  Code2, 
  Radar, 
  CheckCircle2, 
  Sparkles,
  Zap
} from "lucide-react";

interface LogEntry {
  id: string;
  time: string;
  level: "INFO" | "STIX" | "ALERT" | "ENRICH";
  text: string;
  badge?: string;
}

const INITIAL_LOGS: LogEntry[] = [
  {
    id: "1",
    time: "09:54:02",
    level: "INFO",
    text: "SOC node initialized. Feeds: AbuseIPDB + AlienVault OTX connected.",
  },
  {
    id: "2",
    time: "09:54:05",
    level: "ENRICH",
    text: "Querying IOC: 185.220.101.5 (Tor Exit Node / High Risk Subnet).",
    badge: "IP-RECON",
  },
  {
    id: "3",
    time: "09:54:08",
    level: "STIX",
    text: "STIX 2.1 mapping: indicator--8b2e -> threat-actor--APT29.",
    badge: "STIX 2.1",
  },
  {
    id: "4",
    time: "09:54:11",
    level: "ALERT",
    text: "Rule match: T1071 (C2 Application Protocol). Confidence: 96%.",
    badge: "CRITICAL",
  },
  {
    id: "5",
    time: "09:54:14",
    level: "INFO",
    text: "Automated triage executed: IP quarantined, telemetry logged.",
  },
];

const STREAMING_POOL: LogEntry[] = [
  {
    id: "6",
    time: "09:54:18",
    level: "ENRICH",
    text: "IOC lookup: auth-update.net (DGA Domain detected via entropy).",
    badge: "DNS-INTEL",
  },
  {
    id: "7",
    time: "09:54:22",
    level: "ALERT",
    text: "MITRE ATT&CK T1566 (Phishing): Malicious payload intercepted.",
    badge: "HIGH",
  },
  {
    id: "8",
    time: "09:54:27",
    level: "STIX",
    text: "Exporting normalized STIX 2.1 bundle to SQLite database.",
    badge: "STIX 2.1",
  },
  {
    id: "9",
    time: "09:54:31",
    level: "INFO",
    text: "Network port scan automated: 12 subnets audited, 0 leaks.",
  },
];

export const SocTerminalCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"telemetry" | "python" | "mitre">("telemetry");
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // 3D Tilt & Shine States
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [glarePos, setGlarePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt angles: max 12 deg
    const rotX = ((y - centerY) / centerY) * -11;
    const rotY = ((x - centerX) / centerX) * 11;

    // Glare position in percentages (0% - 100%)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({ x: glareX, y: glareY });
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  }, []);

  // Live log simulation
  useEffect(() => {
    if (!isPlaying || activeTab !== "telemetry") return;

    let index = 0;
    const interval = setInterval(() => {
      const nextLog = STREAMING_POOL[index % STREAMING_POOL.length];
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];

      setLogs((prev) => [
        ...prev.slice(-6),
        { ...nextLog, id: `${Date.now()}`, time: timeStr },
      ]);
      index++;
    }, 3800);

    return () => clearInterval(interval);
  }, [isPlaying, activeTab]);

  return (
    <div 
      className="relative w-full select-none"
      style={{ perspective: "1100px" }}
    >
      {/* Outer ambient glow reacting to hover */}
      <div 
        className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-warm-accent/30 via-amber-500/20 to-blue-500/20 blur-xl opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovered ? 0.95 : 0.45,
        }}
      />

      {/* Main 3D Tilt Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.025 : 1}, ${isHovered ? 1.025 : 1}, 1)`,
          transformStyle: "preserve-3d",
          transition: isHovered 
            ? "transform 0.08s cubic-bezier(0.2, 0, 0.4, 1)" 
            : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="relative w-full rounded-2xl bg-[#14151B] border border-[#2F3346] text-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden font-mono text-xs transition-colors duration-300 group"
      >

        {/* Dynamic Holographic Shine / Glare Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.16), rgba(201, 123, 61, 0.2) 35%, transparent 70%)`,
          }}
        />

        {/* Subtle Diagonal Sheen Highlight */}
        <div 
          className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-500 rounded-2xl mix-blend-overlay"
          style={{
            opacity: isHovered ? 0.65 : 0.2,
            background: "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.06) 40%, rgba(201,123,61,0.15) 50%, rgba(79,124,172,0.08) 60%, transparent 80%)",
            backgroundSize: "200% 200%",
            transform: `translate(${rotateY * 2}px, ${rotateX * 2}px)`,
          }}
        />

        {/* Terminal Title Bar */}
        <div 
          className="bg-[#1A1C24]/95 backdrop-blur-md px-4 py-3 border-b border-[#2B2E3D] flex items-center justify-between relative z-10"
          style={{ transform: "translateZ(18px)" }}
        >
          {/* Window Controls */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            <div className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="ml-2 text-zinc-300 text-[11px] flex items-center gap-1.5 font-semibold">
              <Terminal className="w-3.5 h-3.5 text-warm-accent" />
              threat-intel-engine.py
            </span>
          </div>

          {/* Live Status & Tilt Indicator */}
          <div className="flex items-center gap-3 text-[11px]">
            {isHovered && (
              <span className="hidden sm:flex items-center gap-1 text-[10px] text-amber-300 font-sans font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 animate-pulse">
                <Sparkles className="w-3 h-3 text-warm-accent" />
                3D Tilt Active
              </span>
            )}
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-bold tracking-wider text-[10px] sm:text-[11px]">
                LIVE TELEMETRY
              </span>
            </div>
          </div>
        </div>

        {/* Mode / Tabs Bar */}
        <div 
          className="bg-[#171821] px-3 pt-2.5 pb-1 border-b border-[#2B2E3D] flex items-center justify-between gap-1 overflow-x-auto relative z-10"
          style={{ transform: "translateZ(14px)" }}
        >
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "telemetry"
                  ? "bg-warm-accent text-white shadow-xs"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-[#20222D]"
              }`}
            >
              <Activity className="w-3 h-3" />
              <span>STIX Stream</span>
            </button>

            <button
              onClick={() => setActiveTab("python")}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "python"
                  ? "bg-warm-accent text-white shadow-xs"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-[#20222D]"
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>Detection Engine</span>
            </button>

            <button
              onClick={() => setActiveTab("mitre")}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "mitre"
                  ? "bg-warm-accent text-white shadow-xs"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-[#20222D]"
              }`}
            >
              <Radar className="w-3 h-3" />
              <span>ATT&amp;CK Matrix</span>
            </button>
          </div>

          {activeTab === "telemetry" && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? "Pause Stream" : "Resume Stream"}
                className="p-1.5 rounded-md hover:bg-[#20222D] text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-emerald-400" />}
              </button>
              <button
                onClick={() => setLogs(INITIAL_LOGS)}
                title="Reset Logs"
                className="p-1.5 rounded-md hover:bg-[#20222D] text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Terminal Viewport */}
        <div 
          className="p-4 min-h-[290px] max-h-[320px] overflow-y-auto bg-[#12131A] text-zinc-300 relative z-10"
          style={{ transform: "translateZ(8px)" }}
        >
          
          {/* Tab 1: Live Telemetry */}
          {activeTab === "telemetry" && (
            <div className="space-y-2.5">
              <div className="text-[11px] text-zinc-500 pb-1 border-b border-zinc-800/80 flex items-center justify-between">
                <span>ACTIVE SESSION: IOC Triage &amp; Threat Correlation</span>
                <span className="text-zinc-400">Target: Multi-Feed Ingestion</span>
              </div>

              {logs.map((log) => (
                <div key={log.id} className="leading-relaxed flex items-start gap-2">
                  <span className="text-zinc-600 select-none">[{log.time}]</span>
                  
                  {log.level === "ALERT" && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-red-500/20 text-red-400 font-bold border border-red-500/30 shadow-[0_0_6px_rgba(239,68,68,0.2)]">
                      ALERT
                    </span>
                  )}
                  {log.level === "STIX" && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                      STIX 2.1
                    </span>
                  )}
                  {log.level === "ENRICH" && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                      ENRICH
                    </span>
                  )}
                  {log.level === "INFO" && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-zinc-800 text-zinc-400">
                      INFO
                    </span>
                  )}

                  <span className="flex-1 text-zinc-200 font-sans text-xs">
                    {log.text}
                  </span>

                  {log.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
                      {log.badge}
                    </span>
                  )}
                </div>
              ))}

              <div className="pt-2 flex items-center gap-1 text-emerald-400 font-bold animate-pulse">
                <span>brijesh@soc-node:~$</span>
                <span className="inline-block w-2 h-3.5 bg-emerald-400" />
              </div>
            </div>
          )}

          {/* Tab 2: Detection Engine Code */}
          {activeTab === "python" && (
            <div className="space-y-1 text-[11px] leading-snug">
              <p className="text-zinc-500"># threat_correlation_engine.py</p>
              <p className="text-zinc-500"># Automated IOC Normalization &amp; MITRE Mapping</p>
              <p><span className="text-purple-400">import</span> asyncio, stix2</p>
              <p><span className="text-purple-400">from</span> pipeline.enrichment <span className="text-purple-400">import</span> AbuseIPDB, AlienVault</p>
              <p><span className="text-purple-400">from</span> alerts.models <span className="text-purple-400">import</span> SecurityIncident</p>
              <p className="text-transparent">.</p>
              <p><span className="text-blue-400">async def</span> <span className="text-amber-300">correlate_threat</span>(indicator: <span className="text-emerald-400">str</span>):</p>
              <p className="pl-4 text-zinc-400"># Fetch live reputation &amp; threat pulses</p>
              <p className="pl-4">reputation = <span className="text-blue-400">await</span> AbuseIPDB.<span className="text-amber-300">check</span>(indicator)</p>
              <p className="pl-4">pulses = <span className="text-blue-400">await</span> AlienVault.<span className="text-amber-300">query</span>(indicator)</p>
              <p className="pl-4"><span className="text-purple-400">if</span> reputation.confidence_score &gt; <span className="text-orange-400">80</span>:</p>
              <p className="pl-8 text-emerald-300">bundle = stix2.Indicator(pattern=f<span className="text-green-300">&quot;[ipv4-addr:value = &apos;&#123;indicator&#125;&apos;]&quot;</span>)</p>
              <p className="pl-8"><span className="text-purple-400">return</span> SecurityIncident(severity=<span className="text-red-400">&quot;CRITICAL&quot;</span>, bundle=bundle)</p>
            </div>
          )}

          {/* Tab 3: MITRE ATT&CK Matrix */}
          {activeTab === "mitre" && (
            <div className="space-y-2.5">
              <div className="text-[11px] text-zinc-400 pb-1 border-b border-zinc-800 flex items-center justify-between">
                <span>Mapped Tactics &amp; Automated Defenses</span>
                <span className="text-emerald-400 font-bold">3/3 Monitored</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#1A1C24] border border-[#2B2E3D] flex items-center justify-between">
                <div>
                  <span className="text-warm-accent font-bold">T1071</span>
                  <span className="text-zinc-200 block text-xs font-sans font-semibold">Application Layer Protocol</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-300 border border-red-500/30 font-semibold">
                  C2 Detection
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#1A1C24] border border-[#2B2E3D] flex items-center justify-between">
                <div>
                  <span className="text-warm-accent font-bold">T1566</span>
                  <span className="text-zinc-200 block text-xs font-sans font-semibold">Phishing (Spearphishing Link)</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                  Initial Access
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#1A1C24] border border-[#2B2E3D] flex items-center justify-between">
                <div>
                  <span className="text-warm-accent font-bold">T1046</span>
                  <span className="text-zinc-200 block text-xs font-sans font-semibold">Network Service Discovery</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                  Reconnaissance
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Terminal Footer Bar */}
        <div 
          className="px-4 py-2.5 bg-[#171821] border-t border-[#2B2E3D] flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400 relative z-10"
          style={{ transform: "translateZ(15px)" }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-warm-accent" />
            <span className="text-zinc-200 font-semibold">Brijesh Wadhwa</span>
            <span className="text-zinc-500">•</span>
            <span className="text-warm-accent font-medium">SOC Analyst</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3 h-3" />
              STIX 2.1 Engine Active
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
