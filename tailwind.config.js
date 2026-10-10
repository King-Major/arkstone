/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10243A",
        navy: { DEFAULT: "#10243A", light: "#1B3552", deep: "#0A1928" },
        gold: { DEFAULT: "#C9B386", light: "#D9C9A5", pale: "#F4EFE4" },
        ivory: "#FAF8F3",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
