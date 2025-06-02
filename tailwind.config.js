/** @type {import('tailwindcss').Config} */


export default {
  darkMode: "class",
  content: [
    './src/app/**/*.{js,ts}',         // <-- correct path
  ],
  theme: {
    extend: {
      colors: {
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}