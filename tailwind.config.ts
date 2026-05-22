import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        cream: "#f4f1ea",
        ink: "#1a1a1a",
        orange: "#d63800",
        gray: "#888888",
        "light-gray": "#e8e4db",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
