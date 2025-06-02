/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Brusher: ['Brusher'],
        Montserrat : ['Montserrat'] // Add your font here
      },
    },
  },
  plugins: [],
}