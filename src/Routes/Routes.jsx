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
import ManageItems from "../Dashbord/ManageItems";
import UpdeteItems from "../Dashbord/UpdeteItems";
import Payments from "../Dashbord/Payments";
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
        // user-links
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
          path:'payments',
          element:<Payments></Payments>
        },
        // admin-links
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
        },
        {
          path:"manage-items",
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:"update-item/:id",
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`),
          element:<AdminRoute><UpdeteItems></UpdeteItems></AdminRoute>
        },
      ]
    }
  ]);