// // tailwind.config.cjs
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'media',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',     // si tu l'utilises
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{css}',     // <— on ajoute les .css
    './index.css'           // <— si tu as ton CSS global à la racine
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
