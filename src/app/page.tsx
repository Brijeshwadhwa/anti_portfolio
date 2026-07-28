"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { CyberSecuritySection } from "@/components/CyberSecuritySection";
import { Skills } from "@/components/Skills";
import { GitHubSection } from "@/components/GitHubSection";
import { TryHackMeStats } from "@/components/TryHackMeStats";
import { CertificationsTimeline } from "@/components/CertificationsTimeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1F2937] relative selection:bg-warm-accent/20 selection:text-[#1F2937]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CyberSecuritySection />
      <Skills />
      <GitHubSection />
      <TryHackMeStats />
      <CertificationsTimeline />
      <Contact />
      <Footer />
    </main>
  );
}
