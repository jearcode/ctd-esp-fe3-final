/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      invert: {
        50: '0.5',  // Invertir al 50%
      }
    }
  },
  plugins: [],
}

