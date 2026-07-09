import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7efe1",
        kraft: "#d9bf91",
        terracotta: "#b85f3d",
        tamarind: "#6f3e2d",
        teak: "#8a5a36",
        jade: "#245846",
        moss: "#59735a",
        gold: "#bd8f38",
        ink: "#2c211b",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(64, 43, 27, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
