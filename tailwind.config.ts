import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lighterPurple: "#2B2A48",
        purple: "#1B1B30",
        darkPurple: "#23223F",
        darkerPurple: "#161626",
        yellowishWhite: "#F0ECE5",
        grayishWhite: "#C8CCD6",
        lightPink: "#ED9ED6",
        lightGray: "#AAB2D1",
      },
    },
    screens: {
      mobile: "300px",
      "mobile-lg": "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
