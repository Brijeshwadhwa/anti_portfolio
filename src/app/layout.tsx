import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brijesh Wadhwa | SOC Analyst & Cybersecurity Engineer",
  description: "Personal portfolio of Brijesh Wadhwa — Cybersecurity Engineer & SOC Analyst specializing in STIX 2.1 threat intelligence pipelines, phishing detection, network security scanning, and blue team defense.",
  keywords: [
    "Brijesh Wadhwa",
    "SOC Analyst",
    "Cybersecurity Analyst",
    "Threat Intelligence Analyst",
    "Blue Team Specialist",
    "Security Engineer",
    "STIX 2.1",
    "MITRE ATT&CK",
    "Splunk",
    "Wireshark",
    "Nmap",
    "Lovely Professional University"
  ],
  authors: [{ name: "Brijesh Wadhwa", url: "https://github.com/Brijeshwadhwa" }],
  openGraph: {
    title: "Brijesh Wadhwa | SOC Analyst & Cybersecurity Engineer",
    description: "Industry-grade personal portfolio of Brijesh Wadhwa. Explore STIX 2.1 Threat Intel Pipelines, Phishing Heuristic Scanners, and TryHackMe Top 4% Milestones.",
    url: "https://github.com/Brijeshwadhwa",
    siteName: "Brijesh Wadhwa Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brijesh Wadhwa | SOC Analyst & Cybersecurity Engineer",
    description: "Personal portfolio of Brijesh Wadhwa — Cybersecurity Engineer & SOC Analyst specializing in threat intelligence automation and blue team defense.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brijesh Wadhwa",
    jobTitle: "SOC Analyst & Cybersecurity Engineer",
    url: "https://github.com/Brijeshwadhwa",
    sameAs: [
      "https://github.com/Brijeshwadhwa",
      "https://www.linkedin.com/in/brijeshwadhwa26/",
      "https://tryhackme.com/p/brijeshwadhwa26",
      "https://leetcode.com/u/brijeshwadhwa26/",
      "https://profile.hackthebox.com/"
    ],
    knowsAbout: [
      "Cybersecurity",
      "SOC Operations",
      "Threat Intelligence",
      "STIX 2.1",
      "MITRE ATT&CK",
      "Incident Response",
      "Python Security Scripting",
      "Network Reconnaissance"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-warm-bg text-warm-textPrimary selection:bg-warm-accent/20 selection:text-warm-textPrimary min-h-screen transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
