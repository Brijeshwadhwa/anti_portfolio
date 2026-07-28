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
          bg: "#FAF8F5",
          bgSecondary: "#F3EFE8",
          card: "#FFFFFF",
          border: "#E8E2D9",
          borderHover: "#D6CCC0",
          textPrimary: "#1F2937",
          textSecondary: "#6B7280",
          accent: "#C97B3D",
          accentHover: "#B56A2E",
          blue: "#4F7CAC",
          blueHover: "#3D648E",
          success: "#3FA34D",
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
