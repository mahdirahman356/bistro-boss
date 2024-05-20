import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; 

const PrivetRoute = ({children}) => {
    let {user, loading} = useContext(AuthContext)
    let location = useLocation();
    if(loading){
        return <div className="h-[80vh] flex justify-center items-center"> <span className="loading loading-spinner loading-lg"></span></div>
      }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};
PrivetRoute.propTypes ={
    children: PropTypes.node.isRequired
}

export default PrivetRoute;