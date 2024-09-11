/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green :"rgb(22 78 99)",
        lgreen :"rgb(14 116 144)"
    },
    screens: {
      'md900': '900px', 
    },
  },
  plugins: [],
}}
