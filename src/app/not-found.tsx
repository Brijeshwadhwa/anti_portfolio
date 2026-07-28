import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center p-4 text-center font-mono">
      <div className="p-4 rounded-2xl bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan mb-6 shadow-xl shadow-cyber-cyan/10">
        <ShieldAlert className="w-12 h-12" />
      </div>
      <h1 className="text-4xl font-extrabold text-white mb-2">404 - Access Restricted</h1>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        The requested endpoint or resource does not exist in the active SOC Threat Matrix.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyber-cyan text-slate-950 font-bold text-xs hover:brightness-110 transition-all shadow-md shadow-cyber-cyan/20"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Primary Console</span>
      </Link>
    </div>
  );
}
