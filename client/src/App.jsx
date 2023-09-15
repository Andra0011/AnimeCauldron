import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import GetAnime from "./Components/GetAnime";
import PostAnime from "./Components/PostAnime";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [number, setNumber] = useState(1);
  const anime = {
    mal_Id: 1,
    name: "CowBoy BeeBop",
    genres: "Adventure, Action",
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="border-10 border-crunchyroll-orange rounded bg-white">
        <div>
          Get Anime
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.currentTarget.valueAsNumber)}
          />
          <GetAnime id={number || 1} />
          <PostAnime anime={anime} />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
