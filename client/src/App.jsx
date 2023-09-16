import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
// import GetAnime from "./Components/GetAnime";
// import PostAnime from "./Components/PostAnime";

const App = () => {
    const [queryClient] = useState(() => new QueryClient());
    // const [number, setNumber] = useState(1);
    // const anime = {
    //   mal_Id: 1,
    //   name: "CowBoy BeeBop",
    //   genres: "Adventure, Action",
    // };
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <Route path="*" element={<RegisterForm />} />
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
