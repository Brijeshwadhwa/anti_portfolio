import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

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
    description: "Industry-grade personal portfolio of Brijesh Wadhwa. Explore STIX 2.1 Threat Intel Pipelines, Phishing Heuristic Scanners, and TryHackMe Top 5% Milestones.",
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
      "https://www.linkedin.com/in/brijesh-wadhwa",
      "https://tryhackme.com/p/Brijeshwadhwa"
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${ibmPlexMono.variable} antialiased bg-[#050816] text-white selection:bg-cyan-500/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
