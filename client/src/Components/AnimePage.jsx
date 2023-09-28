import { useNavigate, useParams } from "react-router-dom";
import Toolbar from "./Toolbar";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const AnimePage = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [producerId, setProducerId] = useState(0);

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

    const { data: producer, isLoading3, isError3, refetch: refetch3 } = useQuery(
        ["getProducer", producerId],
        () =>
            axios
                .get(`https://api.jikan.moe/v4/producers/${producerId}`)
                .then((resp) => resp.data.data)
    );

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
        if (i === data.genres.length - 1) {
            return genre.name;
        } else {
            return genre.name + ", ";
        }
    };

    const studios = (studio, i) => {
        if (i === data.studios.length - 1) {
            return studio.name;
        } else {
            return studio.name + ", ";
        }
    };

    const synopsis = () => {
        if (data.synopsis) {
            return data.synopsis;
        } else {
            return "N/A";
        }
    };

    const score = () => {
        if (data.score) {
            return data.score;
        } else {
            return "N/A";
        }
        console.log(score);
    };
    console.log(data);

    const getProducerName = (id) => {
        setProducerId(id)
        refetch3()
        console.log(producer)
    }

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <Toolbar />
            <div className="w-full h-full m-10 mb-0 border-2 border-crunchyroll-orange flex items-start justify-start">
                <div className=" flex h-60vh  items-center justify-center border-r-2 border-crunchyroll-orange p-3">
                    <img
                        className="w-80"
                        src={data.images.webp.large_image_url}
                    />
                </div>
                <div className="relative w-full h-full flex flex-col m-5 items-start justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full flex items-center p-4 bg-crunchyroll-orange justify-center">
                            <p className="text-white text-2xl">{data.title}</p>
                        </div>
                        <div className="w-32 items-center flex-col border-2 border-crunchyroll-orange justify-center">
                            <p className="text-crunchyroll-orange text-xl">
                                Score
                            </p>
                            <p className="text-white text-xl">{score()}</p>
                        </div>
                    </div>
                    <div className="relative flex w-full h-full flex-col m-2 mt-0 ml-0 border-2 border-t-0 border-crunchyroll-orange items-start justify-center">
                        <div className="flex h-full items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Alternative Titles:
                            </p>
                            <p className="text-white m-2 mr-1">
                                {data.titles.map((title, i) =>
                                    altTitles(title, i)
                                )}
                            </p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Source:
                            </p>
                            <p className="text-white m-2 mr-1">{data.source}</p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Type:
                            </p>
                            <p className="text-white m-2 mr-1">{data.type}</p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Rating:
                            </p>
                            <p className="text-white m-2 mr-1">{data.rating}</p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Studios:
                            </p>
                            <p className="text-white m-2 mr-1">
                                {data.studios.map((studio, i) =>
                                    studios(studio, i)
                                )}
                            </p>
                        </div>
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
                                Status:
                            </p>
                            <p className="text-white m-2 mr-1">{data.status}</p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Genres:
                            </p>
                            <p className="text-white m-2 mr-1">
                                {data.genres.map((genre, i) =>
                                    genres(genre, i)
                                )}
                            </p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Nr of Episodes:
                            </p>
                            <p className="text-white m-2 mr-1">
                                {data.episodes}
                            </p>
                        </div>
                        <div className="flex items-start justify-center">
                            <p className="text-crunchyroll-orange m-2 mr-1 font-bold">
                                Episode duration:
                            </p>
                            <p className="text-white m-2 mr-1">
                                {data.duration}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center border-2 border-t-0 border-crunchyroll-orange">
                <div className="w-full flex items-center p-4 bg-crunchyroll-orange justify-center">
                    <p className="text-white text-2xl">Synopsis</p>
                </div>
                <div className="flex items-start justify-center">
                    <p className="text-white m-2 mr-1">{synopsis()}</p>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center border-2 border-t-0 border-crunchyroll-orange">
                <div className="w-full flex items-center p-4 bg-crunchyroll-orange justify-center">
                    <p className="text-white text-2xl">Producers</p>
                </div>
                <div className="flex items-start justify-center">{data.producers.map((producer) => getProducerName(producer.mal_id))}</div>
            </div>
        </div>
    );
};

export default AnimePage;
