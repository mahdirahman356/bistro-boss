import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainRoute = () => {
    const location = useLocation()
    let hideNavbaerAndFooter = location.pathname.includes('/login') || location.pathname.includes('/signup')
    return (
        <div>
            {hideNavbaerAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoute;