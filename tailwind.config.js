/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header": "url('/header.png')",
        "main": "url('/main.png')",
        "fundoHomci1": "url('/fundoHomci/.png')",
        "degrade":"radial-gradient(76.48% 76.48% at 50.00% 0.00%, #005C9A 0%, #045288 0.01%, #061F37 100%)",

      },
      colors: {
        'azul-claro': "#1D81CE",
        'amarelo': "#F6A302",
        "degrade1":"radial-gradient(76.48% 76.48% at 50.00% 0.00%, #005C9A 0%, #045288 0.01%, #061F37 100%)",
      },
      fontFamily: {
        roboto: 'var(--font-roboto)',
        orbirtron: 'var(--font-orbitron)',
      },
      dropShadow: {
        dark1: '4px 4px 5px black',
        branco1: '1px 1px 2px white',
        dark2: '1px 2px 2px #1A1A1A',
        drop1: '0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
