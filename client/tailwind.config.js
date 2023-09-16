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
                "dark-orange": "#ff9249",
                "funimation-purple": "#472d8e",
                "dark-gray": "#151515",
            },
            height: {
                1000: "1000px",
                "25vh": "35vh",
                "3vh": "3vh",
            },
            width: {
                "25vw": "25vw",
                "17.5vw": "17.5vw",
                "6vw": "8vw",
            },
            spacing: {
                70: "17rem",
                90: "25rem",
            },
            lineHeight: {
                0: "0",
            },
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255,255, 255, 0.35)",
                    "0 0px 65px rgba(255, 255,255, 0.2)",
                ],
            },
        },
    },
    plugins: [],
};
