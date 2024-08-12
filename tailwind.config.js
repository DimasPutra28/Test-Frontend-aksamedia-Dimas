/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
          'dark-bg': '#1a202c',
          'dark-text': '#a0aec0',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
