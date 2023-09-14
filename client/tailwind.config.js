/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "crunchyroll-orange" : "#F47521",
        "funimation-purple" : "#472d8e"
      }
    },
  },
  plugins: [],
}

