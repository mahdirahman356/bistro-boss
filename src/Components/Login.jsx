import { Link } from "react-router-dom";
import img from "../assets/reservation/wood-grain-pattern-gray1x.png"
import authentication from "../assets/others/authentication2.png"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    let { loginUser } = useContext(AuthContext)

    let [disabled, setDisable] = useState(true)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])

    let handleCaptcha = (e) => {
        let  user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value) ){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    const onSubmit = (data) => {
        console.log(data)
        loginUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: 'Error',
                    text: 'User is not available',
                    icon: 'error',
                    confirmButtonText: 'close'
                })
            });

    }
    


    return (
        <div className=" lg:p-32" style={{ backgroundImage: `url(${img})` }}>
            <div className="w-[95%] mx-auto shadow-2xl flex flex-col lg:flex-row justify-between items-center md:p-10" style={{ backgroundImage: `url(${img})` }}>
                <img className="lg:w-1/2" src={authentication} alt="" />
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 lg:w-1/2">
                    <div className="text-center md:w-[70%] mx-auto">
                        <h3 className="text-4xl font-bold mb-3">Login</h3>
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
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}

                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="md:w-full">
                            <p className="font-semibold my-2 mt-5">
                            <LoadCanvasTemplate />

                            </p>
                            <input
                                onBlur={handleCaptcha}
                                type="text"
                                placeholder="Type Here"
                                name="Captcha"
                                className="input  w-full"
                            />

                        </div>
                    </div>

                    <input disabled={disabled} className="btn text-white bg-[#D1A054] w-full my-6" type="submit" value="Login Youn Account" />
                    <p className="text-center text-[#D1A054]">Dont have an account? <Link to="/signup"><span className="text-[#135D66] underline">Create an account</span></Link> </p>
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

export default Login;