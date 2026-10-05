/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0B0B0B", gold: { DEFAULT: "#C5A059", light: "#D4AF37", pale: "#F6EFDF" }, ivory: "#FBF9F4" },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
