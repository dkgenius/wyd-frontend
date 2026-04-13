import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  "#edf7f9",
          100: "#d0ecf2",
          200: "#a3d9e6",
          300: "#6bbfd1",
          400: "#329fb9",
          500: "#0f819a",
          600: "#0b6780",
          700: "#0B5F70",
          800: "#094d5c",
          900: "#073d4a",
        },
        terra: {
          50:  "#fef3ed",
          100: "#fde3d4",
          200: "#fac3a5",
          300: "#f59c70",
          400: "#ee7240",
          500: "#DC5B1E",
          600: "#c44c16",
          700: "#a33d11",
          800: "#83300e",
          900: "#6a270c",
        },
        amber: {
          400: "#F5A623",
          500: "#E9940D",
        },
        ink: {
          DEFAULT: "#1B1916",
          muted: "#6B6963",
          faint: "#9C9890",
        },
        parchment: {
          DEFAULT: "#F6F5F1",
          dark: "#EDECE7",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
        "court-draw": "courtDraw 2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        courtDraw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
