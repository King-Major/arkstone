/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1730",
        navy: { DEFAULT: "#0E1730", light: "#1D315D", deep: "#081427" },
        royal: { DEFAULT: "#3F4EC3", light: "#6270E5", soft: "#EEF2FF", pale: "#E9EDFF", deep: "#1C2D6F" },
        gold: { DEFAULT: "#C8B39A", light: "#D8C7B4", pale: "#F7F0E8" },
        ivory: "#F8F7F5",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
