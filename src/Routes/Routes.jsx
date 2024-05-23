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
import AllUsers from "../Dashbord/AllUsers";
import AdminHome from "../Dashbord/AdminHome";
import AddItems from "../Dashbord/AddItems";
import AdminRoute from "../AdminRoute/AdminRoute";
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
      element:<Dashbord></Dashbord>, 
      children: [
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:"cart",  
          element: <Cart></Cart>
        },
        {
          path:"user-profilr",
          element:<UserProfile></UserProfile>
        },
        {
          path:"admin-home",  
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:"all-users",  
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:"add-items",
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        }
      ]
    }
  ]);