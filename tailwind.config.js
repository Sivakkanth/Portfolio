/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-4000': { 'max': '4000px' },
        'max-1400': { 'max': '1400px' },
        'max-1100': { 'max': '1100px' },
        'max-768': { 'max': '768px' },
        'max-426': { 'max': '426px' }
      }
    },
  },
  plugins: [],
}

