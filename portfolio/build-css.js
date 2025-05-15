// build-css.js
import fs from 'fs'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// Charge la config Tailwind (CommonJS ou ESM selon ton setup)
const tailwindConfig = './tailwind.config.cjs'

async function build() {
  // Lis l’entrée Tailwind
  const input = fs.readFileSync('src/index.css', 'utf8')
  
  // Lance PostCSS avec Tailwind et Autoprefixer
  const result = await postcss([
    tailwindcss(tailwindConfig),
    autoprefixer
  ]).process(input, {
    from: 'src/index.css',
    to: 'temp-tailwind.css',
  })

  // Écris le résultat minimisé
  fs.writeFileSync('temp-tailwind.css', result.css)
  console.log('✅ temp-tailwind.css généré !')
}

build().catch(err => {
  console.error(err)
  process.exit(1)
})
