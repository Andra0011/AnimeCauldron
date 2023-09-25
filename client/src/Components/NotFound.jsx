import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className=" relative left-5 flex-column h-full w-full items-center justify-center p-4 overflow-hidden">
            <img src="./Images/NotFound.webp" className="relative top-8" />
            <p className="relative text-white xl:bottom-36" > 
                {" "}
                <button
                    className="hover:text-crunchyroll-orange"
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
