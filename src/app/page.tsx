"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LiveEngineeringStats } from "@/components/LiveEngineeringStats";
import { CurrentlyActive } from "@/components/CurrentlyActive";
import { About } from "@/components/About";
import { HorizontalScrollGallery } from "@/components/HorizontalScrollGallery";
import { Projects } from "@/components/Projects";
import { CyberSecuritySection } from "@/components/CyberSecuritySection";
import { LeetCodeGrowthChart } from "@/components/LeetCodeGrowthChart";
import { RecentActivityTimeline } from "@/components/RecentActivityTimeline";
import { Skills } from "@/components/Skills";
import { GitHubSection } from "@/components/GitHubSection";
import { TryHackMeStats } from "@/components/TryHackMeStats";
import { CertificationsTimeline } from "@/components/CertificationsTimeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-bg text-warm-textPrimary relative selection:bg-warm-accent/20 selection:text-warm-textPrimary">
      <Navbar />
      <Hero />
      <LiveEngineeringStats />
      <CurrentlyActive />
      <About />
      <HorizontalScrollGallery />
      <Projects />
      <CyberSecuritySection />
      <LeetCodeGrowthChart />
      <RecentActivityTimeline />
      <Skills />
      <GitHubSection />
      <TryHackMeStats />
      <CertificationsTimeline />
      <Contact />
      <Footer />
    </main>
  );
}
