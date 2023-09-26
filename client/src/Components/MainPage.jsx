import { useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";

const MainPage = () => {
    const nav = useNavigate();
    return (
        <div>
            <Toolbar />
        </div>
    );
};

export default MainPage;
