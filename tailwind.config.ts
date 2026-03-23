import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050507",
          900: "#0B0B10",
          800: "#13131B",
          700: "#1C1C27",
        },
        primary: {
          DEFAULT: "#303854",
          hover: "#262d44",
          light: "#C2CDD5",
        },
        accent: {
          DEFAULT: "#C5A059",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        premium: "0.22em",
      },
      boxShadow: {
        soft: "0 30px 90px rgba(0,0,0,.16)",
        hero: "0 60px 140px rgba(0,0,0,.28)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "shine-sweep": {
          "0%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(160%)" },
        },
      },
      animation: {
        "shine-sweep": "shine-sweep 1.3s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

