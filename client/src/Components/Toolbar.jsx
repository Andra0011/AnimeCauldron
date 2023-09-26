import { useNavigate } from "react-router-dom";

const Toolbar = () => {
    const nav = useNavigate();
    return (
        <div className="bg-crunchyroll-orange relative flex justify-center items-center rounded">
            <button className=" ml-6">
                <img
                    src="./Images/anime-cauldron-logo.webp"
                    className="relative h-16 w-52 xl:mr-8"
                    onClick={() => navigate("/main")}
                />
            </button>
            <button className="relative xl:pl-3 xl:pr-3 xl:h-10 xl:w-36 hover:bg-white hover:rounded" onClick={() => nav("/login")}>My profile</button>
            <button className="relative xl:pl-3 xl:pr-3 xl:h-10 xl:w-32 hover:bg-white hover:rounded">Random</button>
            <button className="relative xl:pl-3 xl:pr-3 xl:h-10 xl:w-40 xl:mr-24 hover:bg-white hover:rounded"onClick={() => nav("/list")}>Anime List</button>
            <div className="xl:ml-96 relative flex justify-center items-center">
                <input className="relative p-0.5 xl:h-10 xl:w-56"></input>
                <button className="relative inset-y-0 flex items-center pr-3 ml-3.5">
                <svg className="relative h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" width="30"
                    height="30" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
            </button>
            </div>
        </div>
    )
}

export default Toolbar;