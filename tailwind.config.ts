import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        warm: {
          bg: "rgb(var(--bg-main) / <alpha-value>)",
          bgSecondary: "rgb(var(--bg-secondary) / <alpha-value>)",
          card: "rgb(var(--card-bg) / <alpha-value>)",
          border: "rgb(var(--border-color) / <alpha-value>)",
          borderHover: "rgb(var(--border-hover) / <alpha-value>)",
          textPrimary: "rgb(var(--text-primary) / <alpha-value>)",
          textSecondary: "rgb(var(--text-secondary) / <alpha-value>)",
          accent: "rgb(var(--accent-amber) / <alpha-value>)",
          accentHover: "rgb(var(--accent-amber-hover) / <alpha-value>)",
          blue: "rgb(var(--accent-blue) / <alpha-value>)",
          blueHover: "rgb(var(--accent-blue-hover) / <alpha-value>)",
          success: "rgb(var(--accent-success) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        "warm-sm": "0 1px 3px rgba(31, 41, 55, 0.05), 0 1px 2px rgba(31, 41, 55, 0.03)",
        "warm-md": "0 4px 12px rgba(31, 41, 55, 0.06), 0 1px 3px rgba(31, 41, 55, 0.04)",
        "warm-lg": "0 10px 25px -5px rgba(31, 41, 55, 0.08), 0 8px 10px -6px rgba(31, 41, 55, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
