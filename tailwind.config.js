/** @type {import('tailwindcss').Config} */


export default {
  darkMode: "class",
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/lib/**/*.{js,jsx,ts,tsx}'
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