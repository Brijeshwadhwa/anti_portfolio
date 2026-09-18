export interface CaseStudyProject {
  id: string;
  title: string;
  subtitle: string;
  category: "Threat Intelligence" | "Security Engineering" | "Security Automation" | "Systems";
  heroTag: string;
  problemStatement: string;
  whyExists: string;
  architectureWorkflow: string;
  technologies: string[];
  securityConcepts: string[];
  threatModel: {
    tactic: string;
    technique: string;
    description: string;
  }[];
  implementationDetails: string[];
  codeSnippets: {
    filename: string;
    language: string;
    code: string;
  }[];
  challengesSolved: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
}

export interface SkillGroup {
  categoryName: string;
  iconName: string;
  badges: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Brijesh Wadhwa",
    title: "Cybersecurity Undergraduate • Threat Intelligence & Blue Team Operations",
    intro: "Cybersecurity undergraduate specializing in Threat Intelligence, Blue Team Operations, and Security Automation. I build Python-based security tools for threat detection, IOC enrichment, and automated network reconnaissance.",
    phone: "+91-6239980242",
    email: "brijeshwadhwa26@gmail.com",
    github: "https://github.com/Brijeshwadhwa",
    linkedin: "https://www.linkedin.com/in/brijeshwadhwa26/",
    tryhackme: "https://tryhackme.com/p/brijeshwadhwa26",
    leetcode: "https://leetcode.com/u/brijeshwadhwa26/",
    location: "Punjab, India",
    university: "Lovely Professional University (LPU)",
    degree: "B.Tech Computer Science (2023–Present) | CGPA: 7.14 / 10",
    currentFocus: [
      {
        name: "Threat Intelligence",
        desc: "Automated IOC collection, AbuseIPDB/AlienVault OTX enrichment, STIX 2.1 schema normalization, and MITRE ATT&CK mapping.",
      },
      {
        name: "SOC / Blue Team",
        desc: "Threat hunting, detection engineering, security log triage, and defensive operations across hands-on labs.",
      },
      {
        name: "Security Automation",
        desc: "Python & Bash scripting for rapid vulnerability scanning, network reconnaissance, and threat analysis workflows.",
      },
    ]
  },

  about: {
    bio: "I am a Cybersecurity undergraduate at Lovely Professional University specializing in Threat Intelligence, Blue Team Operations, and Security Automation. I have engineered custom Python security tools using Flask, Streamlit, STIX 2.1, and threat intelligence APIs to automate IOC collection, phishing detection, and multithreaded network reconnaissance.",
    motivation: "Deeply passionate about threat hunting, SOC monitoring, and defensive automation. Ranked among the Top 5% globally on TryHackMe with a continuous learning streak across hands-on cybersecurity labs covering networking, web security, Active Directory, and privilege escalation.",
    careerAspirations: "Actively seeking SOC Analyst, Cybersecurity Engineer, or Threat Intelligence opportunities where I can apply security automation, STIX 2.1 standards, and analytical problem-solving skills to defend organizational infrastructure."
  },

  skillGroups: [
    {
      categoryName: "Core Expertise",
      iconName: "Shield",
      badges: ["Threat Intelligence", "SOC / Blue Team", "Security Automation", "Network Security", "Python"]
    },
    {
      categoryName: "Security",
      iconName: "Radar",
      badges: ["MITRE ATT&CK", "STIX 2.1", "Nmap", "Wireshark", "Burp Suite", "Linux"]
    },
    {
      categoryName: "Development",
      iconName: "Code",
      badges: ["Python", "TypeScript", "JavaScript", "Flask", "FastAPI", "Streamlit", "Git", "Docker"]
    },
    {
      categoryName: "Infrastructure & Data",
      iconName: "Terminal",
      badges: ["AWS Security (Basics)", "IAM", "SQL", "MongoDB", "MySQL", "HTML/CSS"]
    }
  ] as SkillGroup[],

  projects: [
    {
      id: "threat-intel-pipeline",
      title: "Threat Intelligence Platform",
      subtitle: "Python — Streamlit — Flask — STIX 2.1 — AbuseIPDB — AlienVault OTX",
      category: "Threat Intelligence",
      heroTag: "Python • Streamlit • Flask • STIX 2.1 • AbuseIPDB • AlienVault OTX",
      problemStatement: "Security operations require unifying fragmented threat data from multiple feeds into standardized formats for rapid investigation and response.",
      whyExists: "Automated the collection and enrichment of Indicators of Compromise (IOCs) from AbuseIPDB, AlienVault OTX, and RSS feeds into a unified threat intelligence platform normalized with STIX 2.1 standards.",
      architectureWorkflow: "AbuseIPDB / AlienVault OTX / RSS Feeds ──> Python Collector ──> STIX 2.1 Normalizer ──> GeoIP & WHOIS Enricher ──> MITRE ATT&CK Mapping ──> Streamlit Dashboard",
      technologies: ["Python", "Streamlit", "Flask", "STIX 2.1", "AbuseIPDB API", "AlienVault OTX", "GeoIP", "WHOIS", "MITRE ATT&CK"],
      securityConcepts: [
        "STIX 2.1 Standardized Schema Normalization",
        "Multi-Source IOC Collection & Enrichment",
        "GeoIP & WHOIS Infrastructure Reconnaissance",
        "MITRE ATT&CK Contextual Threat Mapping"
      ],
      threatModel: [
        { tactic: "Command & Control", technique: "T1071 (Application Layer Protocol)", description: "Detecting malicious C2 callback IPs across public threat feeds." },
        { tactic: "Initial Access", technique: "T1566 (Phishing)", description: "Identifying malicious domain infrastructure used in phishing payloads." }
      ],
      implementationDetails: [
        "Automated the collection and enrichment of Indicators of Compromise (IOCs) from AbuseIPDB, AlienVault OTX, and RSS feeds into a unified threat intelligence platform.",
        "Normalized IOC data using the STIX 2.1 standard, improving interoperability between multiple threat intelligence sources.",
        "Integrated GeoIP, WHOIS, and MITRE ATT&CK mapping to provide contextual threat analysis for security investigations.",
        "Designed a Streamlit dashboard supporting CSV, JSON, and STIX exports for simplified threat analysis and reporting."
      ],
      codeSnippets: [
        {
          filename: "enricher.py",
          language: "python",
          code: `def calculate_confidence(abuse_score: int, otx_pulse_count: int, domain_age_days: int) -> int:
    score = (abuse_score * 0.5) + min(otx_pulse_count * 10, 30)
    if domain_age_days < 30:
        score += 20
    return min(int(score), 100)`
        }
      ],
      challengesSolved: [
        "Handling rate limits across public threat APIs gracefully with retries and exponential backoff.",
        "Ensuring strict compliance with STIX 2.1 JSON specifications across diverse IOC formats."
      ],
      lessonsLearned: [
        "STIX 2.1 schema standardization significantly improves interoperability between threat intelligence tools and SIEM platforms."
      ],
      futureImprovements: [
        "Implement TAXII 2.1 server push mechanism for real-time automated feed distribution."
      ],
      githubUrl: "https://github.com/Brijeshwadhwa/Threat-Intellgence-Pipeline",
      liveDemoUrl: "https://github.com/Brijeshwadhwa/Threat-Intellgence-Pipeline",
      featured: true
    },
    {
      id: "whatsapp-phishing-detector",
      title: "WhatsApp Phishing Detector",
      subtitle: "Python — Streamlit — Flask — Twilio — Hugging Face",
      category: "Security Automation",
      heroTag: "Python • Streamlit • Flask • Twilio • Hugging Face",
      problemStatement: "Instant messaging channels like WhatsApp are frequently targeted with obfuscated phishing links and social engineering tactics.",
      whyExists: "Developed an AI-powered phishing detection system that analyzes WhatsApp messages using Hugging Face NLP models paired with a rule-based fallback engine.",
      architectureWorkflow: "WhatsApp User ──> Twilio WhatsApp API ──> Flask Backend ──> Hugging Face NLP Model / Rule Engine ──> Risk Score Calculation ──> Interactive Web Dashboard & Alert",
      technologies: ["Python", "Streamlit", "Flask", "Twilio WhatsApp API", "Hugging Face", "Regex NLP", "URL Shannon Entropy"],
      securityConcepts: [
        "AI-Powered Phishing & Social Engineering Analysis",
        "URL Entropy, Urgency Indicators & Suspicious Language Detection",
        "Twilio WhatsApp API Webhook Automation",
        "Interactive Web Dashboard for Malicious URL Identification"
      ],
      threatModel: [
        { tactic: "Initial Access", technique: "T1566.002 (Spearphishing Link)", description: "Detecting deceptive links and urgent language in instant messages." }
      ],
      implementationDetails: [
        "Developed an AI-powered phishing detection system that analyzes WhatsApp messages using Hugging Face NLP models with a rule-based fallback engine.",
        "Evaluated URLs, urgency indicators, forwarding behavior, and suspicious language to generate phishing risk scores.",
        "Integrated the Twilio WhatsApp API to enable real-time phishing detection and automated user reporting.",
        "Built an interactive web dashboard for phishing analysis and malicious URL identification."
      ],
      codeSnippets: [
        {
          filename: "phishing_detector.py",
          language: "python",
          code: `import math

def calculate_url_entropy(url: str) -> float:
    prob = [float(url.count(c)) / len(url) for c in dict.fromkeys(list(url))]
    return round(- sum([p * math.log(p) / math.log(2.0) for p in prob]), 4)`
        }
      ],
      challengesSolved: [
        "Combining AI NLP predictions with instant rule-based fallback for low-latency message scoring."
      ],
      lessonsLearned: [
        "Combining text urgency signals with URL Shannon entropy yields fast, robust phishing risk scores."
      ],
      futureImprovements: [
        "Train custom domain-specific transformer models on multi-lingual messaging datasets."
      ],
      githubUrl: "https://github.com/Brijeshwadhwa/Whatsapp-Phishing-Detector",
      liveDemoUrl: "https://github.com/Brijeshwadhwa/Whatsapp-Phishing-Detector",
      featured: true
    },
    {
      id: "automated-nmap-scanner",
      title: "Automated Nmap Scanner with GUI",
      subtitle: "Python — Tkinter — Nmap",
      category: "Security Automation",
      heroTag: "Python • Tkinter • Nmap",
      problemStatement: "Command-line network scanning can be cumbersome and slow for rapid host discovery and service enumeration during assessments.",
      whyExists: "Developed a multithreaded network reconnaissance tool using Python, Tkinter, and Nmap for automated host discovery and service enumeration.",
      architectureWorkflow: "Tkinter Desktop GUI ──> IP Validation & Input Check ──> ThreadPool Worker Execution ──> Nmap Engine (-sV, -O) ──> Live Progress Tracking ──> Scan Report Exporter",
      technologies: ["Python", "Tkinter", "Nmap Engine", "Multithreading", "Subprocess Control"],
      securityConcepts: [
        "Automated Host Discovery & Service Enumeration",
        "TCP Port Scanning & Version Detection",
        "Live Progress Tracking & Multithreaded Execution",
        "Exportable Security Audit Scan Reports"
      ],
      threatModel: [
        { tactic: "Reconnaissance", technique: "T1046 (Network Service Discovery)", description: "Automating target port discovery and service version fingerprinting." }
      ],
      implementationDetails: [
        "Developed a multithreaded network reconnaissance tool using Python and Nmap for automated host discovery and service enumeration.",
        "Implemented TCP port scanning, service detection, and live scan progress tracking.",
        "Improved scanning efficiency through concurrent execution, input validation, and robust error handling.",
        "Generated exportable scan reports for vulnerability assessments and security audits."
      ],
      codeSnippets: [
        {
          filename: "scanner_gui.py",
          language: "python",
          code: `import subprocess, threading

def scan_async(target_ip, port_range, callback):
    def worker():
        cmd = ["nmap", "-sV", "-O", "-p", port_range, target_ip]
        process = subprocess.Popen(cmd, stdout=subprocess.PIPE, text=True)
        out, _ = process.communicate()
        callback(out)
    threading.Thread(target=worker, daemon=True).start()`
        }
      ],
      challengesSolved: [
        "Eliminated UI freeze during long scan operations via asynchronous worker threading."
      ],
      lessonsLearned: [
        "Multithreaded execution drastically speeds up network perimeter reconnaissance."
      ],
      futureImprovements: [
        "Add modular NSE (Nmap Scripting Engine) vulnerability vulnerability scan presets."
      ],
      githubUrl: "https://github.com/Brijeshwadhwa/automated_nmap_scanner",
      featured: true
    }
  ] as CaseStudyProject[],

  training: [
    {
      title: "Board Infinity — Summer Training",
      period: "Jun 2025 – Jul 2025",
      description: "Data Structures & Algorithms: Completed intensive training in data structures, algorithms, recursion, trees, graphs, sorting, and searching."
    }
  ],

  certifications: [
    {
      title: "AWS Security Fundamentals",
      issuer: "AWS Training & Certification",
      year: "2026",
      category: "Cloud Security",
      skills: ["AWS Security", "IAM Policies", "Cloud Compliance"]
    },
    {
      title: "MongoDB University — Official Skill Badges",
      issuer: "MongoDB University",
      year: "2025",
      category: "Databases",
      skills: ["12 Official Skill Badges", "MongoDB Querying", "Data Modeling"]
    },
    {
      title: "AI For All: AI Appreciate",
      issuer: "Intel & Digital India",
      year: "2024",
      category: "Artificial Intelligence",
      skills: ["Artificial Intelligence Fundamentals", "Digital Literacy"]
    },
    {
      title: "Ethical Hacking: Command Injection",
      issuer: "Udemy",
      year: "2024",
      category: "Ethical Hacking",
      skills: ["Command Injection", "Web Application Vulnerabilities"]
    }
  ],

  achievements: {
    tryHackMeRank: "Top 5% Global",
    tryHackMeTitle: "Top 5% Learners Globally",
    tryhackmeUrl: "https://tryhackme.com/p/brijeshwadhwa26",
    leetcodeUrl: "https://leetcode.com/u/brijeshwadhwa26/",
    thmStreak: 120,
    thmRooms: 140,
    thmBadges: 28,
  },

  education: [
    {
      institution: "Lovely Professional University",
      qualification: "B.Tech Computer Science (2023 – Present)",
      grade: "CGPA: 7.14 / 10"
    },
    {
      institution: "Govt. Sr. Sec. Smart School",
      qualification: "Class XII",
      grade: "Class XII 87.6%"
    },
    {
      institution: "Dr. Asa Nand Arya Model Sr. Sec. School",
      qualification: "Class X",
      grade: "Class X 100%"
    }
  ],

  githubMetrics: {
    totalRepos: 35,
    primaryLanguages: ["Python", "TypeScript", "JavaScript", "C", "Java", "Bash Scripting"],
    pinnedRepos: [
      { name: "Threat-Intellgence-Pipeline", lang: "Python", desc: "Automated IOC collection from AbuseIPDB, AlienVault OTX & RSS, STIX 2.1 normalization, GeoIP/WHOIS enrichment & Streamlit dashboard." },
      { name: "Whatsapp-Phishing-Detector", lang: "Python", desc: "AI-powered phishing detection system analyzing WhatsApp messages using Hugging Face NLP models, URL entropy & Twilio API." },
      { name: "automated_nmap_scanner", lang: "Python", desc: "Multithreaded network reconnaissance GUI tool using Python & Nmap for automated host discovery, TCP port scanning & service detection." }
    ]
  }
};
