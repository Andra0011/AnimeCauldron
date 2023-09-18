import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";

const App = () => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Navigate replace to="/main" />} />
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </QueryClientProvider>
    );
};

export default App;
