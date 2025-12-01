/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'], // The heavy header font
      },
      colors: {
        tesoro: {
          black: '#111111',
          cream: '#FDFBF7',
          green: '#4ADE80', // Bright neon green
          purple: '#D8B4FE', // Soft purple
          red: '#F87171',   // Soft red
          orange: '#FB923C', // Bright orange
          yellow: '#FACC15',
        }
      }
    },
  },
  plugins: [],
}