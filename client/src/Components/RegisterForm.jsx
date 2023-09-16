import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../Util/Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const postUser = (userObj, navigate) => {
    if (userObj.username === "") {
        alert("Username can't be empty");
    } else if (userObj.email === "") {
        alert("Email can't be empty");
    } else if (userObj.password === "") {
        alert("Password can't be empty");
    } else {
        navigate("/login");
        return axiosInstance.post("/user/register", userObj);
    }
};

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const userObj = {
        username: username,
        email: email,
        password: password,
    };
    const { mutate } = useMutation({
        mutationFn: () => postUser(userObj, navigate),
    });
    return (
        <div className=" relative flex h-screen w-full items-center justify-center p-4 align-middle">
            <h1 className="absolute top-64 text-3xl">CREATE AN ACCOUNT</h1>
            <div className="h-35vh w-25vw border-crunchyroll-orange flex flex-wrap border-4">
                <img
                    src="./Images/anime-cauldron-logo.webp"
                    className="left-90 absolute top-10 max-w-sm"
                />
                <input
                    className=" w-17.5vw h-3vh bg-dark-gray border-crunchyroll-orange relative left-16 top-11 border-2 p-5 text-white placeholder:text-white"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => {
                        setUsername(e.currentTarget.value);
                        console.log(username);
                    }}
                />
                <input
                    className="w-17.5vw h-3vh bg-dark-gray border-crunchyroll-orange relative left-16 top-2 inline border-2 p-5 text-white placeholder:text-white"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.currentTarget.value);
                        console.log(email);
                    }}
                />
                <input
                    className="w-17.5vw h-3vh bg-dark-gray border-crunchyroll-orange relative -top-6 left-16 inline border-2 p-5 text-white placeholder:text-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.currentTarget.value);
                        console.log();
                    }}
                />
                <button
                    className="h-3vh border-dark-orange w-8vw bg-crunchyroll-orange leading-0 relative -bottom-10 -left-40 inline border-4 p-5 text-center text-white"
                    onClick={() => {
                        mutate();
                    }}
                >
                    Register
                </button>
            </div>
            <p className="absolute bottom-72">
                If you already have an account,{" "}
                <button
                    className="hover:text-blue-600"
                    onClick={() => navigate("/login")}
                >
                    click here
                </button>
            </p>
        </div>
    );
};

export default RegisterForm;
