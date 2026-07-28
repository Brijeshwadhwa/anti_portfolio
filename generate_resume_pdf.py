import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def create_resume_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Define custom colors
    primary_color = colors.HexColor("#1F2937")
    accent_color = colors.HexColor("#C97B3D")
    secondary_color = colors.HexColor("#4F7CAC")
    text_dark = colors.HexColor("#111827")
    text_muted = colors.HexColor("#4B5563")
    
    # Custom styles
    title_style = ParagraphStyle(
        'NameTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=primary_color,
        spaceAfter=2
    )
    
    subtitle_style = ParagraphStyle(
        'SubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=accent_color,
        spaceAfter=6
    )
    
    contact_style = ParagraphStyle(
        'ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=text_muted,
        spaceAfter=10
    )
    
    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=primary_color,
        spaceBefore=10,
        spaceAfter=4
    )
    
    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=text_dark
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=text_dark,
        spaceAfter=4
    )
    
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=text_dark,
        leftIndent=12,
        spaceAfter=3
    )

    story = []

    # Header
    story.append(Paragraph("BRIJESH WADHWA", title_style))
    story.append(Paragraph("SOC Analyst • Threat Intelligence Specialist • Cybersecurity Engineer", subtitle_style))
    story.append(Paragraph("Punjab, India | brijeshwadhwa.official@gmail.com | github.com/Brijeshwadhwa | linkedin.com/in/brijesh-wadhwa", contact_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=accent_color, spaceAfter=8))

    # Executive Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", heading_style))
    story.append(Paragraph("Cybersecurity Engineer and SOC Analyst specializing in threat intelligence automation, vulnerability detection, and blue team defense. Hands-on experience building STIX 2.1 threat pipelines, machine learning phishing detectors, and automated network scanning utilities. Top 5% Global practitioner on TryHackMe with a 313+ day streak.", body_style))
    story.append(Spacer(1, 4))

    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS & COMPETENCIES", heading_style))
    skills_text = (
        "<b>Security Operations:</b> SIEM (Splunk, QRadar), Incident Response, EDR (SentinelOne, Defender), Firewall Policies<br/>"
        "<b>Threat Intelligence:</b> STIX 2.1, TAXII, MITRE ATT&CK Mapping, AlienVault OTX, AbuseIPDB, GeoIP & WHOIS Recon<br/>"
        "<b>Networking & Recon:</b> Nmap Scanning & NSE, Wireshark PCAP Analysis, TCP/IP, Subnetting, Snort NIDS, Shodan<br/>"
        "<b>Programming & Scripting:</b> Python (Security Automation), Java, C/C++, JavaScript, TypeScript, Bash, REST APIs<br/>"
        "<b>Tools & Platforms:</b> Docker, Streamlit, Git, Linux (Ubuntu/Debian), Active Directory, IAM, Burp Suite"
    )
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 4))

    # Key Projects
    story.append(Paragraph("FEATURED CYBERSECURITY PROJECTS", heading_style))

    # Project 1
    story.append(Paragraph("Production Threat Intelligence Ingestion Pipeline | <i>Python, STIX 2.1, SQLite, Streamlit, Docker</i>", item_title_style))
    story.append(Paragraph("• Built an automated threat harvesting pipeline collecting IOCs from AlienVault OTX, AbuseIPDB, and RSS feeds.", bullet_style))
    story.append(Paragraph("• Standardized heterogeneous threat data into compliant STIX 2.1 JSON schemas with dynamic confidence scoring.", bullet_style))
    story.append(Paragraph("• Enriched indicators with WHOIS domain registration age and GeoIP ASN metadata; exposed interactive Streamlit C2 dashboard.", bullet_style))

    # Project 2
    story.append(Paragraph("Heuristic & ML WhatsApp Phishing Detector Bot | <i>Python, Streamlit, Twilio API, Entropy Math</i>", item_title_style))
    story.append(Paragraph("• Engineered dual web app and WhatsApp bot analyzing link payload risk in under 500 milliseconds.", bullet_style))
    story.append(Paragraph("• Implemented Shannon Entropy math and domain creation age APIs (< 30 days trigger) to flag deceptive URLs.", bullet_style))

    # Project 3
    story.append(Paragraph("Multithreaded Desktop Nmap Security Scanner GUI | <i>Python, Tkinter, Nmap CLI, Subprocess</i>", item_title_style))
    story.append(Paragraph("• Developed a GUI wrapping Nmap engine for automated port discovery (-sV, -O) and multithreaded log exporting.", bullet_style))

    story.append(Spacer(1, 4))

    # Education & Certifications
    story.append(Paragraph("EDUCATION & CERTIFICATIONS", heading_style))
    story.append(Paragraph("<b>Lovely Professional University (LPU)</b> — B.Tech Computer Science & Engineering (Cybersecurity Focus)", item_title_style))
    story.append(Paragraph("• <b>Certifications:</b> CompTIA Security+, CompTIA Network+, CompTIA A+, LPI Linux Essentials, Google Cybersecurity", bullet_style))
    story.append(Paragraph("• <b>TryHackMe Achievements:</b> Top 5% Global Ranking, 313+ Day Streak, 96 Rooms Solved, 15 Badges Earned", bullet_style))

    doc.build(story)
    print("Successfully generated", filename)

if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    create_resume_pdf("public/resume.pdf")
    create_resume_pdf("public/Brijesh_Wadhwa_SOC_Analyst_Resume.pdf")
