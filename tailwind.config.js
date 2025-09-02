/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          50: "#eff9ff",
          100: "#dff3ff",
          200: "#bae7ff",
          300: "#7fd4ff",
          400: "#3fc0ff",
          500: "#0ea5e9",
          600: "#0283bd",
          700: "#086a97",
          800: "#0b577b",
          900: "#0d4866",
        },
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(2,132,199,.25)",
      },
      animation: {
        "fade-up": "fadeUp .6s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fadeUp .6s ease-out both" },
    },
  },
  plugins: [],
};
