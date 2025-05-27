/** @type {import('tailwindcss').Config} */


export default {
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