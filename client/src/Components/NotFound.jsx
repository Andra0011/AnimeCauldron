import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className=" relative left-11 flex h-screen w-full items-center justify-center p-4">
            <div className="h-15vh w-50vw border-crunchyroll-orange bg-dark-gray border-4">
                <text className="leading-2.1 drop-shadow-glow left-85 absolute z-10 text-5xl font-bold">
                    PAGE NOT FOUND
                </text>
                <text className="leading-2.1 text-crunchyroll-orange drop-shadow-glow left-86 absolute text-5xl font-bold">
                    PAGE NOT FOUND
                </text>
            </div>
            <text className="leading-2.1 drop-shadow-glow top-46 left-100 absolute z-10 text-8xl font-bold">
                404
            </text>
            <text className="leading-2.1 text-crunchyroll-orange top-46 left-101 absolute text-8xl font-bold">
                404
            </text>
            <img
                src="./Images/anime-cauldron-logo.webp"
                className="left-85 absolute top-16 max-w-sm"
            />
            <img
                src="./Images/luffy_sad.webp"
                className="-scale-y-flip absolute left-16 top-32 h-80"
            />
            <img
                src="./Images/chopper_sad.webp"
                className="bottom-46 absolute right-0 font-bold"
            />
            <p className="left-90 absolute bottom-72">
                {" "}
                <button
                    className="hover:text-blue-600"
                    onClick={() => navigate("/main")}
                >
                    Click here
                </button>
                {", "}
                to return to the main page
            </p>
        </div>
    );
};

export default NotFound;
