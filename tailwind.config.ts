import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold-primary": "#C49846",
        "gold-light": "#D6AB57",
        "gold-dark": "#9A7228",
        "dark-base": "#111419",
        "dark-surface": "#1A1F26",
        "slate-muted": "#64748B",
        "border-line": "#2D3748",
        "border-light": "#E2E8F0",
        "light-bg": "#F8F9FA",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1400px",
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "70%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "ping-slow": "ping-slow 2.6s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
