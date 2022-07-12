/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        primary: '#729DAD',
        secondary: '#264968',
        tertiary: '#5A726E',
        quaternary: '#AA8868',
        quinary: '#101D27',
      }
    },
  },
  plugins: [],
}
