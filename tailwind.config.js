/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#131313",
        ink: "#090909",
        smoke: "#232323",
        mist: "#d8d4cc",
        champagne: "#d8c2a1",
        rosewood: "#bd8f86",
        sage: "#8ea097",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 44px rgba(216, 194, 161, 0.16)",
        soft: "0 20px 80px rgba(0, 0, 0, 0.34)",
      },
    },
  },
  plugins: [],
};
