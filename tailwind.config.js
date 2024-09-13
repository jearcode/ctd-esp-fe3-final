/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      invert: {
        30: '0.3',
        50: '0.9' 
      }
    }
  },
  plugins: [],
}

