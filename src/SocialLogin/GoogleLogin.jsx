import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosCommon from "../Hooks/useAxiosCommon";

const GoogleLogin = () => {
    let { googleLogIn } = useContext(AuthContext)
    let axiosCommon = useAxiosCommon()
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let handleGoogleLogIn = () => {
        googleLogIn()
            .then((result) => {
                console.log(result.user)
                let userInfo = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                axiosCommon.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.acknowledged === true) {
                            Swal.fire({
                                title: 'Success',
                                text: 'User Added Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
                navigate(from, { replace: true });

            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div className="mt-6">
            <p className="text-center mb-5 text-sm">or sign in with</p>
            <div className="flex flex-col md:flex-row  justify-center gap-7 items-center">
                <p onClick={handleGoogleLogIn} className="p-3 border btn btn-ghost border-gray-400 rounded-full"><FcGoogle className="text-[25px]" /></p>
                <p className="p-3 border btn btn-ghost border-gray-400 rounded-full"><FaGithub className="text-[25px]" /></p>
            </div>
        </div>
    );
};

export default GoogleLogin;