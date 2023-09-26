import { useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"; // Import axios directly
import { useState } from "react";

const AnimeList = () => {
    const nav = useNavigate();
    const [page, setPage] = useState(1); // Initialize the page state

    const { data, isLoading, isError } = useQuery(['getAnime', page], () => axios.get(`https://api.jikan.moe/v4/anime?page=${page}`).then(resp => resp.data))

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
    console.log(data)

    return (
        <div className="relative h-full w-full">
            <Toolbar />
        </div>
    );
};

export default AnimeList;
