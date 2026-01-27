/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
        colors: {
            primary: "#a855f7",
            "background-light": "#fffaf0",
            "background-dark": "#0f172a",
        },
        fontFamily: {
            display: ["Playfair Display", "serif"],
            script: ["Great Vibes", "cursive"],
            sans: ["Montserrat", "sans-serif"],
        },
        borderRadius: {
            DEFAULT: "1rem",
            'xl': '2rem',
        },
    },
  },
  plugins: [],
}
