"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconShieldCheck,
  IconTerminal2,
  IconCode,
  IconCertificate,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFileText,
} from "@tabler/icons-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function FloatingNav() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "#hero",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full" />,
      href: "#projects",
    },
    {
      title: "Threat Intel",
      icon: <IconShieldCheck className="h-full w-full" />,
      href: "#threat-intel",
    },
    {
      title: "Skills",
      icon: <IconCode className="h-full w-full" />,
      href: "#skills",
    },
    {
      title: "Certifications",
      icon: <IconCertificate className="h-full w-full" />,
      href: "#certifications",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: PORTFOLIO_DATA.personal.github,
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: PORTFOLIO_DATA.personal.linkedin,
    },
    {
      title: "Resume",
      icon: <IconFileText className="h-full w-full" />,
      href: "/resume.pdf",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full" />,
      href: "#contact",
    },
  ];

  return (
    <aside aria-label="Floating Quick Navigation" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <FloatingDock
        mobileClassName="fixed bottom-6 right-6"
        desktopClassName="bg-white/90 dark:bg-[#1A1C24]/90 border border-warm-border/80 shadow-[0_12px_32px_rgba(31,41,55,0.12)] backdrop-blur-lg"
        items={links}
      />
    </aside>
  );
}

// Keep the exact FloatingDockDemo export so user's snippet can also be used directly
export { FloatingNav as FloatingDockDemo };
