import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#faf7f0",
        "bg-soft": "#f1ebdd",
        ink: "#171a2b",
        "ink-dim": "#63677c",
        line: "rgba(23,26,43,0.12)",
        accent: "#3357e8",
        "accent-2": "#e8940f",
      },
      fontFamily: {
        head: ["var(--font-head)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        card: "18px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        scrollDown: {
          "0%": { top: "-40px" },
          "60%": { top: "40px" },
          "100%": { top: "40px" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        scrollDown: "scrollDown 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
