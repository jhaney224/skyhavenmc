import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./plugins/**/*.{js,ts}",
    "./public/index.html",
    "./src/index.css",
    "./src/App.jsx",
  ],
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        serif: ["Rubik ", ...defaultTheme.fontFamily.serif]
      },
      colors: {
        'primary': "#2ECC71",
        'accent': '#3498DB',
        'secondary-accent': '#E67E22',
      },
      backgroundColor: {
        'dark-bg': '#1B1B1B',
        'light-neutral': '#F0F0F0',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};