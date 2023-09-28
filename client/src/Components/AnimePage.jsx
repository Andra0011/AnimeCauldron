import { useNavigate, useParams } from "react-router-dom";
import Toolbar from "./Toolbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const AnimePage = () => {
    const nav = useNavigate();
    const { id } = useParams();

    const { data, isLoading, isError, refetch } = useQuery(
        ["getAnime", id],
        () =>
            axios
                .get(`https://api.jikan.moe/v4/anime/${id}`)
                .then((resp) => resp.data.data)
    );

    useEffect(() => {
        refetch();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching anime data</div>;
    }

    const altTitles = (title, i) => {
        if (i === data.titles.length - 1) {
            return title.title;
        } else {
            return title.title + ", ";
        }
    };

    const genres = (genre, i) => {
        if (i === data.titles.length - 1) {
            return genre.name;
        } else {
            return genre.name + ", ";
        }
    };

    console.log(data);

    return (
        <div
            className="flex h-full w-full flex-col items-center justify-center"
            onLoad={() => refetch}
        >
            <Toolbar />
            <div className="w-full h-full m-10 border-2 border-crunchyroll-orange flex items-start justify-start">
                <div className=" flex h-60vh  items-center justify-center border-r-2 border-crunchyroll-orange p-3">
                    <img
                        className="w-80"
                        src={data.images.webp.large_image_url}
                    />
                </div>
                <div className="relative w-full flex flex-col m-5 items-start justify-center">
                    <div className="w-full h-16 flex items-center justify-center">
                        <div className="w-full flex items-center p-4 bg-crunchyroll-orange justify-center">
                            <p className="text-white text-2xl">{data.title}</p>
                        </div>
                        <div className="w-32 h-full items-center flex-col border-2 border-crunchyroll-orange justify-center">
                            <p className="text-crunchyroll-orange text-xl">
                                Score
                            </p>
                            <p className="text-white text-xl">{data.score}</p>
                        </div>
                    </div>
                    <div className="relative flex w-full h-full flex-col m-2 mt-0 ml-0 border-2 border-t-0 border-crunchyroll-orange items-start justify-center">
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Aired:
                            </p>
                            <p className="text-white m-2 mr-1">
                                From {data.aired.string}
                            </p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Alternative Titles:
                            </p>
                            <p className="text-white m-2 mr-1">
                                {data.titles.map((title, i) =>
                                    altTitles(title, i)
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimePage;
