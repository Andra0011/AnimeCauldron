import { useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"; // Import axios directly
import { useState } from "react";

const AnimeList = () => {
    const nav = useNavigate();
    const [page, setPage] = useState(1); // Initialize the page state

    const { data, isLoading, isError } = useQuery(["getAnime", page], () =>
        axios
            .get(
                `https://api.jikan.moe/v4/anime?page=${page}&order_by=title&sfw=true`
            )
            .then((resp) => resp.data)
    );

    const changePage = (newPage) => {
        setPage(newPage);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching anime data</div>;
    }

    const animeList = data ? JSON.stringify(data) : "No data";
    console.log(data.data);

    return (
        <div className="relative h-full w-full">
            <Toolbar />
            <div className="flex grid-cols-5 grid-rows-5 inline-grid">
                {data.data.map((anime, i) => (
                    <div
                        key={i}
                        className="text-white flex flex-col justify-center items-center w-64"
                    >
                        <div className="h- border-2 border-crunchyroll-orange">
                            <img
                                src={anime.images.webp.image_url}
                                alt={anime.title}
                                
                            />
                        </div>
                        <p className="text-white"> {anime.title} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimeList;
