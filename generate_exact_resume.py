import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
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
    
    primary_color = colors.HexColor("#1F2937")
    accent_color = colors.HexColor("#C97B3D")
    text_dark = colors.HexColor("#111827")
    text_muted = colors.HexColor("#4B5563")
    
    title_style = ParagraphStyle(
        'NameTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=primary_color,
        alignment=1, # Center
        spaceAfter=2
    )
    
    contact_style = ParagraphStyle(
        'ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=text_muted,
        alignment=1, # Center
        spaceAfter=4
    )

    tagline_style = ParagraphStyle(
        'TaglineInfo',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=10,
        leading=13,
        textColor=accent_color,
        alignment=1, # Center
        spaceAfter=8
    )

    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=primary_color,
        spaceBefore=8,
        spaceAfter=4
    )
    
    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
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
        leftIndent=10,
        spaceAfter=2
    )

    story = []

    # Header
    story.append(Paragraph("Brijesh Wadhwa", title_style))
    story.append(Paragraph("+91-6239980242 — brijeshwadhwa26@gmail.com — linkedin.com/in/brijeshwadhwa26/ — github.com/Brijeshwadhwa", contact_style))
    story.append(Paragraph("Aspiring SOC Analyst — Cybersecurity Enthusiast", tagline_style))
    story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceAfter=6))

    # Professional Summary
    story.append(Paragraph("Professional Summary", heading_style))
    story.append(Paragraph("Cybersecurity undergraduate with practical experience in threat intelligence, phishing detection, network reconnaissance, and security automation. Developed security-focused applications using Python, Streamlit, Scapy, Nmap, and STIX 2.1 for threat analysis and monitoring. Ranked among the Top 5% on TryHackMe with 313-day learning streak and hands-on experience across offensive and defensive security labs. Passionate about SOC operations, threat hunting, incident response, and continuous security monitoring.", body_style))

    # Technical Skills
    story.append(Paragraph("Technical Skills", heading_style))
    skills_text = (
        "<b>Languages:</b> Python, C, Java, JavaScript<br/>"
        "<b>Web:</b> HTML, CSS<br/>"
        "<b>Frameworks:</b> Streamlit, Flask, Tkinter<br/>"
        "<b>Security Tools:</b> Wireshark, Nmap, Burp Suite, Shodan, Git/GitHub<br/>"
        "<b>Concepts:</b> STIX 2.1, MITRE ATT&CK, TCP/IP, Threat Intelligence, Linux"
    )
    story.append(Paragraph(skills_text, body_style))

    # Projects
    story.append(Paragraph("Projects", heading_style))

    story.append(Paragraph("<b>Threat Intelligence Pipeline</b> | <i>Python — Streamlit — SQLite — STIX 2.1 — Docker</i>", item_title_style))
    story.append(Paragraph("• Automated threat intelligence collection from AbuseIPDB, AlienVault OTX, and RSS feeds.", bullet_style))
    story.append(Paragraph("• Normalized and enriched IOCs using STIX 2.1, GeoIP, WHOIS, and MITRE ATT&CK.", bullet_style))
    story.append(Paragraph("• Built a Streamlit dashboard with threat analytics and CSV, JSON, and STIX exports.", bullet_style))

    story.append(Paragraph("<b>WhatsApp Phishing Detector</b> | <i>Python — Streamlit — Flask — Twilio — Hugging Face</i>", item_title_style))
    story.append(Paragraph("• Developed an AI-powered phishing detector using Hugging Face with rule-based fallback.", bullet_style))
    story.append(Paragraph("• Analyzed URLs, urgency keywords, and forwarding patterns to generate phishing risk scores.", bullet_style))
    story.append(Paragraph("• Integrated a Streamlit web app with a Twilio WhatsApp bot for real-time analysis.", bullet_style))

    story.append(Paragraph("<b>Automated Nmap Scanner with GUI</b> | <i>Python — Tkinter — Nmap</i>", item_title_style))
    story.append(Paragraph("• Built a Tkinter GUI to automate Nmap port scanning with real-time scan results.", bullet_style))
    story.append(Paragraph("• Implemented multithreaded scanning and input validation for faster, reliable network analysis.", bullet_style))
    story.append(Paragraph("• Identified open ports, detected running services, and exported scan reports.", bullet_style))

    # Training
    story.append(Paragraph("Training", heading_style))
    story.append(Paragraph("<b>Board Infinity – Summer Training (DSA)</b> (Jun 2025 – Jul 2025)", item_title_style))
    story.append(Paragraph("• Completed industry-recognized DSA training covering arrays, trees, graphs, recursion, sorting, and searching algorithms.", bullet_style))

    # Certifications
    story.append(Paragraph("Certifications", heading_style))
    story.append(Paragraph("• <b>AI For All: AI Appreciate</b> – Intel & Digital India", bullet_style))
    story.append(Paragraph("• <b>Master Generative AI and Generative AI Tools</b> – Udemy", bullet_style))
    story.append(Paragraph("• <b>Ethical Hacking: Command Injection</b> – Udemy", bullet_style))
    story.append(Paragraph("• <b>Computer Programming in C</b> – iamneo", bullet_style))

    # Achievements
    story.append(Paragraph("Achievements", heading_style))
    story.append(Paragraph("<b>TryHackMe:</b> Ranked #117,949 globally with the 0x9 Mage title. Completed 96 rooms and earned 15 badges, including Top 5% and 313-Day Streak badges. Maintained continuous 313-day learning streak across hands-on labs.", bullet_style))
    story.append(Paragraph("<b>LeetCode:</b> Solved 287+ coding problems (105 Easy, 140 Medium, 42 Hard). Earned prestigious 100 Days Badge 2026 by maintaining a consistent coding streak.", bullet_style))

    # Education
    story.append(Paragraph("Education", heading_style))
    story.append(Paragraph("• <b>Lovely Professional University:</b> B.Tech Computer Science (2023–Present) | CGPA: 7.14/10", bullet_style))
    story.append(Paragraph("• <b>Govt. Sr. Sec. Smart School:</b> Class XII | 87.6%", bullet_style))
    story.append(Paragraph("• <b>Dr. Asa Nand Arya Model Sr. Sec. School:</b> Class X | 100%", bullet_style))

    doc.build(story)
    print("Generated exact resume PDF:", filename)

if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    create_resume_pdf("public/resume.pdf")
    create_resume_pdf("public/Brijesh_Wadhwa_SOC_Analyst_Resume.pdf")
