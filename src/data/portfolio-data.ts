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
    title: "Aspiring SOC Analyst • Cybersecurity Enthusiast",
    intro: "Cybersecurity undergraduate with practical experience in threat intelligence, phishing detection, network reconnaissance, and security automation. Developed security-focused applications using Python, Streamlit, Scapy, Nmap, and STIX 2.1. Ranked among the Top 5% on TryHackMe with a 313-day learning streak.",
    phone: "+91-6239980242",
    email: "brijeshwadhwa26@gmail.com",
    github: "https://github.com/Brijeshwadhwa",
    linkedin: "https://www.linkedin.com/in/brijeshwadhwa26/",
    tryhackme: "https://tryhackme.com/p/brijeshwadhwa26",
    leetcode: "https://leetcode.com/u/brijeshwadhwa26/",
    location: "Punjab, India",
    university: "Lovely Professional University (LPU)",
    degree: "B.Tech Computer Science (2023–Present) | CGPA: 7.14/10",
    currentFocus: [
      { name: "Threat Intelligence", desc: "STIX 2.1 pipelines, AbuseIPDB/OTX ingestion & WHOIS enrichment." },
      { name: "Phishing Detection", desc: "Hugging Face AI models, URL entropy & WhatsApp Twilio bot." },
      { name: "Network Reconnaissance", desc: "Automated Nmap port scanning & Wireshark traffic analysis." },
      { name: "Security Automation", desc: "Python scripting for automated vulnerability scanning & log exports." },
      { name: "SOC Operations", desc: "Incident response, log triage, and defensive security labs." },
      { name: "MITRE ATT&CK", desc: "Mapping threat vectors to adversary TTPs." }
    ]
  },

  about: {
    bio: "Cybersecurity undergraduate with practical experience in threat intelligence, phishing detection, network reconnaissance, and security automation. I have built security-focused applications leveraging Python, Streamlit, Scapy, Nmap, and STIX 2.1 for threat monitoring and risk scoring.",
    motivation: "Passionate about SOC operations, threat hunting, incident response, and continuous security monitoring. Ranked #117,949 globally on TryHackMe with the 0x9 Mage title and a 313-day continuous learning streak across offensive and defensive labs.",
    careerAspirations: "Actively seeking entry-level SOC Analyst, Cybersecurity Analyst, or Security Engineer opportunities where I can apply my threat intelligence and security automation skills to protect organizational assets."
  },

  skillGroups: [
    {
      categoryName: "Languages",
      iconName: "Code",
      badges: ["Python", "C", "Java", "JavaScript"]
    },
    {
      categoryName: "Web & Frameworks",
      iconName: "Terminal",
      badges: ["Streamlit", "Flask", "Tkinter", "HTML", "CSS"]
    },
    {
      categoryName: "Security Tools",
      iconName: "Shield",
      badges: ["Wireshark", "Nmap", "Burp Suite", "Shodan", "Git/GitHub"]
    },
    {
      categoryName: "Core Concepts",
      iconName: "Radar",
      badges: ["STIX 2.1", "MITRE ATT&CK", "TCP/IP", "Threat Intelligence", "Linux"]
    }
  ] as SkillGroup[],

  projects: [
    {
      id: "threat-intel-pipeline",
      title: "Threat Intelligence Pipeline",
      subtitle: "Multi-Source Threat Harvesting, STIX 2.1 Normalization & Streamlit Dashboard",
      category: "Threat Intelligence",
      heroTag: "Python • Streamlit • SQLite • STIX 2.1 • Docker",
      problemStatement: "Security operations require unifying fragmented threat data from multiple feeds into standardized formats for rapid analysis.",
      whyExists: "Automated threat intelligence collection from AbuseIPDB, AlienVault OTX, and RSS feeds. Normalized and enriched IOCs using STIX 2.1, GeoIP, WHOIS, and MITRE ATT&CK.",
      architectureWorkflow: "AbuseIPDB / AlienVault OTX / RSS ──> Python Collector ──> STIX 2.1 Normalizer ──> GeoIP & WHOIS Enricher ──> SQLite DB ──> Streamlit Dashboard & Export",
      technologies: ["Python", "Streamlit", "SQLite", "STIX 2.1", "GeoIP", "WHOIS", "MITRE ATT&CK", "Docker"],
      securityConcepts: [
        "STIX 2.1 Standardized Schema",
        "IOC Normalization & Enrichment",
        "GeoIP & WHOIS Infrastructure Recon",
        "MITRE ATT&CK Mapping"
      ],
      threatModel: [
        { tactic: "Command & Control", technique: "T1071 (Application Layer Protocol)", description: "Detecting malicious C2 callback IPs across public threat feeds." },
        { tactic: "Initial Access", technique: "T1566 (Phishing)", description: "Identifying malicious domain infrastructure used in phishing payloads." }
      ],
      implementationDetails: [
        "Automated threat intelligence collection from AbuseIPDB, AlienVault OTX, and RSS feeds.",
        "Normalized and enriched IOCs using STIX 2.1, GeoIP, WHOIS, and MITRE ATT&CK.",
        "Built a Streamlit dashboard with threat analytics and CSV, JSON, and STIX exports."
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
        "Handling rate limits across public threat APIs gracefully.",
        "Ensuring 100% compliance with STIX 2.1 JSON specifications."
      ],
      lessonsLearned: [
        "STIX 2.1 schema standardization enables interoperability across SIEM tools."
      ],
      futureImprovements: [
        "Implement TAXII 2.1 server push mechanism."
      ],
      githubUrl: "https://github.com/Brijeshwadhwa/Threat-Intellgence-Pipeline",
      featured: true
    },
    {
      id: "whatsapp-phishing-detector",
      title: "WhatsApp Phishing Detector",
      subtitle: "AI-Powered Phishing Detector via Hugging Face, Flask & Twilio WhatsApp Integration",
      category: "Security Automation",
      heroTag: "Python • Streamlit • Flask • Twilio • Hugging Face",
      problemStatement: "Instant messaging channels like WhatsApp are susceptible to obfuscated phishing links and social engineering scams.",
      whyExists: "Developed an AI-powered phishing detector using Hugging Face with rule-based fallback to analyze URLs, urgency keywords, and forwarding patterns.",
      architectureWorkflow: "WhatsApp User ──> Twilio Webhook ──> Flask Backend ──> Hugging Face / Rule-Based Analyzer ──> Phishing Risk Score ──> WhatsApp Response",
      technologies: ["Python", "Streamlit", "Flask", "Twilio API", "Hugging Face", "Regex"],
      securityConcepts: [
        "Phishing & Social Engineering Detection",
        "URL Keyword & Urgency Pattern Analysis",
        "Twilio Webhook Integration",
        "Hugging Face AI Classification"
      ],
      threatModel: [
        { tactic: "Initial Access", technique: "T1566.002 (Spearphishing Link)", description: "Detecting deceptive links in messaging channels." }
      ],
      implementationDetails: [
        "Developed an AI-powered phishing detector using Hugging Face with rule-based fallback.",
        "Analyzed URLs, urgency keywords, and forwarding patterns to generate phishing risk scores.",
        "Integrated a Streamlit web app with a Twilio WhatsApp bot for real-time analysis."
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
        "Blending AI model predictions with instant rule-based fallback for rapid response."
      ],
      lessonsLearned: [
        "Analyzing URL entropy and keyword urgency provides fast indicators of social engineering."
      ],
      futureImprovements: [
        "Expand training dataset with localized phishing templates."
      ],
      githubUrl: "https://github.com/Brijeshwadhwa/Whatsapp-Phishing-Detector",
      featured: true
    },
    {
      id: "automated-nmap-scanner",
      title: "Automated Nmap Scanner with GUI",
      subtitle: "Tkinter Desktop Application for Multithreaded Port Scanning & Service Detection",
      category: "Security Automation",
      heroTag: "Python • Tkinter • Nmap",
      problemStatement: "Command line scanning can be time-consuming during rapid host enumeration.",
      whyExists: "Built a Tkinter GUI to automate Nmap port scanning with real-time scan results, multithreaded execution, and report generation.",
      architectureWorkflow: "Tkinter UI ──> IP Validator ──> Thread Pool ──> Nmap Process ──> Scan Report Exporter",
      technologies: ["Python", "Tkinter", "Nmap"],
      securityConcepts: [
        "Port Scanning & Service Versioning",
        "Multithreaded GUI Execution",
        "XML & Text Report Exporting"
      ],
      threatModel: [
        { tactic: "Reconnaissance", technique: "T1046 (Network Service Discovery)", description: "Automating target port discovery and OS fingerprinting." }
      ],
      implementationDetails: [
        "Built a Tkinter GUI to automate Nmap port scanning with real-time scan results.",
        "Implemented multithreaded scanning and input validation for faster, reliable network analysis.",
        "Identified open ports, detected running services, and exported scan reports."
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
        "Preventing UI freeze during long scan cycles via async worker threads."
      ],
      lessonsLearned: [
        "Automating Nmap execution simplifies routine perimeter audits."
      ],
      futureImprovements: [
        "Include NSE vulnerability script selector flags."
      ],
      githubUrl: "https://github.com/Brijeshwadhwa/automated_nmap_scanner",
      featured: true
    }
  ] as CaseStudyProject[],

  training: [
    {
      title: "Board Infinity – Summer Training (DSA)",
      period: "Jun 2025 – Jul 2025",
      description: "Completed industry-recognized Data Structures & Algorithms training covering arrays, trees, graphs, recursion, sorting, and searching algorithms."
    }
  ],

  certifications: [
    {
      title: "AI For All: AI Appreciate",
      issuer: "Intel & Digital India",
      year: "2024",
      category: "Artificial Intelligence",
      skills: ["Artificial Intelligence Fundamentals", "Digital Literacy", "AI Ethics"]
    },
    {
      title: "Master Generative AI and Generative AI Tools",
      issuer: "Udemy",
      year: "2024",
      category: "Generative AI",
      skills: ["Generative AI", "LLM Prompting", "AI Productivity Tools"]
    },
    {
      title: "Ethical Hacking: Command Injection",
      issuer: "Udemy",
      year: "2024",
      category: "Ethical Hacking",
      skills: ["Command Injection", "Web Application Vulnerabilities", "Input Sanitization"]
    },
    {
      title: "Computer Programming in C",
      issuer: "iamneo",
      year: "2023",
      category: "Programming",
      skills: ["C Programming", "Memory Management", "Pointers & Data Structures"]
    }
  ],

  achievements: {
    tryHackMeRank: "#117,949 Globally",
    tryHackMeTitle: "0x9 Mage",
    thmRank: "Top 5% Global",
    thmStreak: "313-Day Streak",
    thmRooms: "96 Rooms Solved",
    thmBadges: "15 Badges Earned",
    tryhackmeUrl: "https://tryhackme.com/p/brijeshwadhwa26",
    
    leetCodeSolved: "287+ Solved",
    leetCodeEasy: "105 Easy",
    leetCodeMedium: "140 Medium",
    leetCodeHard: "42 Hard",
    leetCodeBadge: "100 Days Badge 2026",
    leetcodeUrl: "https://leetcode.com/u/brijeshwadhwa26/"
  },

  education: [
    {
      institution: "Lovely Professional University",
      qualification: "B.Tech Computer Science (2023–Present)",
      grade: "CGPA: 7.14 / 10"
    },
    {
      institution: "Govt. Sr. Sec. Smart School",
      qualification: "Class XII",
      grade: "87.6%"
    },
    {
      institution: "Dr. Asa Nand Arya Model Sr. Sec. School",
      qualification: "Class X",
      grade: "100%"
    }
  ],

  githubMetrics: {
    totalRepos: 32,
    primaryLanguages: ["Python", "JavaScript / TypeScript", "HTML/CSS", "Java", "C"],
    pinnedRepos: [
      { name: "Threat-Intellgence-Pipeline", lang: "Python", desc: "Automated threat intelligence collection, STIX 2.1 normalization, and Streamlit dashboard." },
      { name: "Whatsapp-Phishing-Detector", lang: "Python", desc: "AI-powered phishing detector bot using Hugging Face & Twilio." },
      { name: "automated_nmap_scanner", lang: "Python", desc: "Tkinter GUI application to automate Nmap port scanning." }
    ]
  }
};
