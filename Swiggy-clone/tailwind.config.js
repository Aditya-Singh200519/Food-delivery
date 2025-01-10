/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{  'custom-range': {'min': '300px', 'max': '639px'},},
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}