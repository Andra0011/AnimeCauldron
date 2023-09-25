import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div class="relative flex bg-crunchyroll-orange rounded">
            <button class=" ml-6">
            <img src="./Images/anime-cauldron-logo.webp" class="relative h-16 w-52" />
            </button>
            <button class="pl-6 pr-6">My profile</button>
            <button class="pl-6 pr-6 mr-28">Random</button>
            <div class="ml-80">
                <input class="relative p-0.5 mt-5"></input>
                <button class="absolute inset-y-0 right-0 flex items-center pr-3 mr-3.5">
                <svg class="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" width="30"
                    height="30" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
            </button>
            </div>
        </div>
    );
}

export default MainPage;