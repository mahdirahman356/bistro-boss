import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoute;