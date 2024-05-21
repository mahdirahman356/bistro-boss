import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/reservation/wood-grain-pattern-gray1x.png"
import authentication from "../assets/others/authentication2.png"
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";


const SignUp = () => {

    let { createAccount, userUpdate } = useContext(AuthContext)
    let [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        setLoading(true)
        createAccount(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success',
                    text: 'User Created Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                userUpdate(data.name)
                    .then(() => {
                        console.log("user updated");
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: 'Error',
                    text: 'Email already in use',
                    icon: 'error',
                    confirmButtonText: 'close'
                })
                setLoading(false)
            });
    }

    return (
        <div className=" lg:p-32" style={{ backgroundImage: `url(${img})` }}>
            <div className="w-[95%] mx-auto shadow-2xl flex flex-col lg:flex-row-reverse justify-between items-center md:p-10" style={{ backgroundImage: `url(${img})` }}>
                <img className="lg:w-1/2" src={authentication} alt="" />
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 lg:w-1/2">
                    <div className="text-center md:w-[70%] mx-auto">
                        <h3 className="text-4xl font-bold mb-3">Sign Up</h3>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="md:w-full">
                            <p className="font-semibold my-2 mt-5">Name</p>
                            <input type="text"
                                placeholder="Enter Your Name"
                                name="name"
                                className="input  w-full"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="md:w-full">
                            <p className="font-semibold my-2 mt-5">Email</p>
                            <input type="email"
                                placeholder="Enter Your Email Address"
                                name="email"
                                className="input  w-full"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="md:w-full">
                            <p className="font-semibold my-2 mt-5">Password</p>
                            <input type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                className="input  w-full"
                                {...register("password", { required: true, minLength: 6 })}
                            />
                            {errors.password?.type === "required" && (
                                <span className="text-sm text-red-500">This field is required</span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className="text-sm text-red-500">Password must be 6 carectar</span>
                            )}

                        </div>
                    </div>

                    <button
                        className="btn text-white bg-[#D1A054] w-full my-6"
                        type="submit">
                        {loading ?
                            <span className="loading loading-spinner text-white"></span>
                            : "Continue"}
                    </button>

                    <p className="text-center text-[#D1A054]">Already registered? <Link to="/login"><span className="text-[#135D66] underline">Go to log in</span></Link> </p>
                    <div className="mt-6">
                        <p className="text-center mb-5 text-sm">or sign in with</p>
                        <div className="flex flex-col md:flex-row  justify-center gap-7 items-center">
                            <p className="p-3 border btn btn-ghost border-gray-400 rounded-full"><FcGoogle className="text-[25px]" /></p>
                            <p className="p-3 border btn btn-ghost border-gray-400 rounded-full"><FaGithub className="text-[25px]" /></p>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;