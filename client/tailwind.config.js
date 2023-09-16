/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "anime-background": "url(./Images/zoro_fullbkg.webp)",
                luffy: "url(./Images/luffy_sad.webp)",
                chopper: "url(./Images/chopper_sad.webp)",
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
                "35vh": "35vh",
                "30vh": "30vh",
                "15vh": "15vh",
                "3vh": "3vh",
            },
            width: {
                "50vw": "50vw",
                "40vw": "40vw",
                "30vw": "30vw",
                "25vw": "25vw",
                "17.5vw": "17.5vw",
                "8vw": "8vw",
            },
            spacing: {
                46: "11.3rem",
                70: "17rem",
                85: "21rem",
                86: "21.16rem",
                90: "25rem",
                98: "27rem",
                100: "28rem",
                101: "28.17rem",
            },
            lineHeight: {
                0: "0",
                2.1: "2.1",
            },
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255,255, 255, 0.35)",
                    "0 0px 65px rgba(255, 255,255, 0.2)",
                ],
            },
            scale: {
                flip: "-1",
            },
        },
    },
    plugins: [],
};
