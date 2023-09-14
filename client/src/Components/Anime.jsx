/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";

const getAnime = (id) => {
  return fetch(`/api/v1/anime/${id}`).then((res) => res.json());
};
const Anime = ({ id }) => {
  const { data } = useQuery({
    queryKey: ["getAnime", id],
    queryFn: () => getAnime(id),
  });
  return <div>{JSON.stringify(data)}</div>;
};

export default Anime;
