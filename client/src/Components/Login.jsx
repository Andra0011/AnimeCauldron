import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Util/Axios";
import { useQuery } from "@tanstack/react-query";

const getUser = (userObj) => {
    if (userObj.email === "") {
        alert("Email can't be empty");
    } else if (userObj.password === "") {
        alert("Password can't be empty");
    } else {
        // navigate("/main");
        return axiosInstance.post("/user/login", userObj);
    }
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const userObj = {
        email: email,
        password: password,
    };
    const { data, refetch } = useQuery({
        queryKey: ["getUser", userObj],
        queryFn: () => getUser(userObj),
        enabled: false,
    });
    console.log(data);
    return (
        <div className=" relative flex h-full w-full items-center justify-center p-4 align-middle">
            {/* <h1 className="absolute top-44 text-3xl">SIGN-IN</h1> */}
            <img
                src="./Images/anime-cauldron-logo.webp"
                className="left-90 absolute top-12 max-w-sm hover:cursor-pointer"
                onClick={() => navigate("/main")}
            />
            <div className="h-30vh w-25vw border-crunchyroll-orange  left-90 absolute flex flex-wrap border-4">
                <input
                    className="w-17.5vw h-3vh bg-dark-gray border-crunchyroll-orange relative -bottom-7 left-14 inline border-2 p-5 text-white placeholder:text-white"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.currentTarget.value);
                        console.log(email);
                    }}
                />
                <input
                    className="w-17.5vw h-3vh bg-dark-gray border-crunchyroll-orange relative -bottom-4 left-14 inline border-2 p-5 text-white placeholder:text-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.currentTarget.value);
                        console.log();
                    }}
                />
                <button
                    className="h-3vh border-dark-orange w-8vw bg-crunchyroll-orange leading-0 left-30 relative -bottom-5 inline border-4 p-5 text-center text-white"
                    onClick={() => {
                        refetch();
                    }}
                >
                    Login
                </button>
            </div>
            <p className="left-99.5 absolute bottom-56 text-white">
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                If you don't have an account,{" "}
                <button
                    className="hover:text-crunchyroll-orange"
                    onClick={() => navigate("/register")}
                >
                    click here
                </button>
            </p>
        </div>
    );
};

export default Login;
