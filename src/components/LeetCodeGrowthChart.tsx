"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Calendar, Award, CheckCircle2 } from "lucide-react";
import { HistoricalSnapshot } from "@/lib/stats/types";

export const LeetCodeGrowthChart: React.FC = () => {
  const [snapshots, setSnapshots] = useState<HistoricalSnapshot[]>([
    { date: "2026-07-15", timestamp: 1784073600000, leetcodeSolved: 252, githubRepos: 28, thmRooms: 82 },
    { date: "2026-07-20", timestamp: 1784505600000, leetcodeSolved: 260, githubRepos: 29, thmRooms: 86 },
    { date: "2026-07-25", timestamp: 1784937600000, leetcodeSolved: 268, githubRepos: 30, thmRooms: 90 },
    { date: "2026-07-30", timestamp: 1785369600000, leetcodeSolved: 275, githubRepos: 31, thmRooms: 93 },
    { date: "2026-08-04", timestamp: 1785801600000, leetcodeSolved: 284, githubRepos: 32, thmRooms: 96 },
    { date: "2026-08-08", timestamp: 1786147200000, leetcodeSolved: 286, githubRepos: 32, thmRooms: 96 },
    { date: "2026-08-11", timestamp: 1786406400000, leetcodeSolved: 287, githubRepos: 32, thmRooms: 96 },
  ]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/stats");
        if (res.ok) {
          const data = await res.json();
          if (data.snapshots && data.snapshots.length > 0) {
            setSnapshots(data.snapshots);
          }
        }
      } catch (err) {
        console.warn("Failed to fetch snapshots:", err);
      }
    }
    loadData();
  }, []);

  const minVal = Math.min(...snapshots.map((s) => s.leetcodeSolved)) - 10;
  const maxVal = Math.max(...snapshots.map((s) => s.leetcodeSolved)) + 10;
  const latestCount = snapshots[snapshots.length - 1]?.leetcodeSolved || 287;

  // Generate SVG path coordinates
  const width = 800;
  const height = 220;
  const padding = 30;

  const points = snapshots.map((pt, idx) => {
    const x = padding + (idx / (snapshots.length - 1)) * (width - padding * 2);
    const y = height - padding - ((pt.leetcodeSolved - minVal) / (maxVal - minVal)) * (height - padding * 2);
    return { x, y, pt };
  });

  const pathD = points.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, "");

  return (
    <section id="growth-chart" className="py-16 relative z-10 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 text-warm-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-warm-textSecondary font-bold">
            Continuous Algorithmic Progress
          </span>
        </div>

        <h2 className="text-3xl font-extrabold text-warm-textPrimary mb-8">
          LeetCode <span className="gradient-text-amber">Growth Velocity</span>
        </h2>

        <div className="warm-card p-6 sm:p-8 rounded-2xl border border-warm-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-warm-border">
            <div>
              <span className="text-xs font-mono text-warm-textSecondary block">Total Verified Problems Solved</span>
              <span className="text-3xl font-black text-warm-textPrimary font-mono">{latestCount}+ Solved</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-warm-success font-bold bg-emerald-500/10 px-3.5 py-2 rounded-xl border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100 Days Badge 2026 Achieved</span>
            </div>
          </div>

          {/* Chart Graphic */}
          <div className="w-full overflow-x-auto">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-[500px]">
              {/* Grid Lines */}
              <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#E8E2D9" strokeDasharray="4 4" />
              <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#E8E2D9" strokeDasharray="4 4" />
              <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#E8E2D9" />

              {/* Smooth Trend Path */}
              <path d={pathD} fill="none" stroke="#C97B3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

              {/* Data Points */}
              {points.map((p, i) => (
                <g key={i} className="group cursor-pointer">
                  <circle cx={p.x} cy={p.y} r="5" fill="#C97B3D" className="transition-all group-hover:r-7" />
                  <circle cx={p.x} cy={p.y} r="10" fill="#C97B3D" opacity="0.2" className="transition-all group-hover:opacity-40" />

                  {/* Tooltip Label */}
                  <text
                    x={p.x}
                    y={p.y - 12}
                    textAnchor="middle"
                    fill="#1F2937"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {p.pt.leetcodeSolved}
                  </text>
                  <text
                    x={p.x}
                    y={height - 8}
                    textAnchor="middle"
                    fill="#6B7280"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    {p.pt.date.substring(5)}
                  </text>
                </g>
              ))}
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
};
