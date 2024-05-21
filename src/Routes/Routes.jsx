import {
    createBrowserRouter,
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute"
import Home from "../Components/Home";
import Menu from "../Components/Menu";
import OurShop from "../Components/OurShop";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Secrete from "../Secrete/Secrete";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Dashbord from "../Dashbord/Dashbord";
import Cart from "../Dashbord/Cart";
import UserHome from "../Dashbord/UserHome";
import UserProfile from "../Dashbord/UserProfile";
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
        {
          path: "/secrete",
          element:<PrivetRoute><Secrete></Secrete></PrivetRoute>
        }
      ]
    },
    {
      path: '/dashbord',
      element:<PrivetRoute><Dashbord></Dashbord></PrivetRoute>,
      children: [
        {
          path:'/dashbord',
          element:<PrivetRoute><UserHome></UserHome></PrivetRoute>
        },
        {
          path:"/dashbord/cart",  
          element: <Cart></Cart>
        },
        {
          path:"/dashbord/user-profilr",
          element:<PrivetRoute><UserProfile></UserProfile></PrivetRoute>
        }
      ]
    }
  ]);