# Brijesh Wadhwa — Dynamic Cybersecurity Engineering Portfolio

A modern, dynamic cybersecurity portfolio and live engineering dashboard for **Brijesh Wadhwa**, built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Automatically tracks and displays live statistics from LeetCode, GitHub, and TryHackMe.

## 🚀 Live Demo
- **Production URL**: [https://anti-portfolio-two.vercel.app](https://anti-portfolio-two.vercel.app)

---

## ⚡ Dynamic Architecture & Data Layer

Unlike static portfolio templates, this website features an automated server-side data fetching layer:

1. **LeetCode Live Stats Integration**:
   - Server-side GraphQL query to `https://leetcode.com/graphql` with fallback proxy APIs.
   - Automatically retrieves total solved, easy/medium/hard breakdown, global rank, and badge count.
   - Cached using Next.js revalidation (`revalidate: 3600`). No code edits required when solving new problems!

2. **GitHub API Integration**:
   - Dynamically fetches public repository counts, followers, stars, and primary programming languages.

3. **TryHackMe Profile Ingestion**:
   - Real-time global rank, continuous learning streak, and lab completion metrics.

4. **Historical Growth Snapshots**:
   - Daily snapshots recorded via `/api/cron` (configured in `vercel.json` to run daily at midnight UTC).
   - Visualized in an interactive LeetCode Growth Velocity chart.

---

## ⚙️ Environment Configuration

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set the environment variables:

```env
LEETCODE_USERNAME=brijeshwadhwa26
GITHUB_USERNAME=Brijeshwadhwa
TRYHACKME_USERNAME=brijeshwadhwa26
CRON_SECRET=your_secret_key
```

---

## 🛠️ Local Development & Build

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

---

## 🌐 Vercel Deployment

Deploy with Vercel CLI:
```bash
npx vercel --prod
```
