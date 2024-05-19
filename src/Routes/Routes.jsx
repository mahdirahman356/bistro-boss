import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute"
import Home from "../Components/Home";
import Menu from "../Components/Menu";
import OurShop from "../Components/OurShop";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element:<Menu></Menu>
        },
        {
          path:"/shop",
          element:<OurShop></OurShop>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
      ]
    },
  ]);