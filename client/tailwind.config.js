/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "anime-background": "url(./Images/zoro_fullbkg.webp)",
      },
      borderWidth: {
        9: "9px",
        10: "10px",
      },
      borderColor: {
        "crunchyroll-orange": "#F47521",
      },
      colors: {
        "crunchyroll-orange": "#F47521",
        "funimation-purple": "#472d8e",
      },
      height: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
