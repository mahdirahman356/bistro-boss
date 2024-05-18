import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute"
import Home from "../Components/Home";
import Menu from "../Components/Menu";
import OurShop from "../Components/OurShop";

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
        }
      ]
    },
  ]);