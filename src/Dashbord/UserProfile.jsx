import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import userImg from "../assets/icon/user.avif"
import { imageUplode } from "../ImageApi";

const UserProfile = () => {

    let { user, userUpdate } = useContext(AuthContext)
    let handleUpdateProfile = async(e) => {
        e.preventDefault()
        let form = e.target
        let name = form.name.value
        let image = form.image.files[0]
        let formData = new FormData()
        formData.append("image", image)
        console.log(name)
        console.log(image)
            try{
                const url =  await imageUplode(image)
               await userUpdate(name, url)  
            }
            catch (err){
                console.log(err)
            }
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16">
                    <img className="object-cover w-20 h-20 border-2 border-[#D1A054] rounded-full dark:border-blue-400" src={user.photoURL ? user.photoURL : userImg} alt="" />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-3 text-center">{user.displayName}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Easily update your username and profile picture URL. This feature allows you to personalize your profile and keep your information current with just a few clicks.</p>
                <section className="bg-white dark:bg-gray-900 mb-10">
                    <div className="container flex items-center justify-center md:px-6 mx-auto">
                        <form onSubmit={handleUpdateProfile} className="w-full max-w-md">
                            <div className="flex items-center justify-center mt-6">
                                <a className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-[#D1A054] dark:border-blue-400 dark:text-white">
                                    Edit Profile
                                </a>
                            </div>
                            {/* Your Name */}
                            <p className="mt-8 text-gray-500 mb-1 text-sm ml-2">Your Name</p>
                            <div className="relative flex items-center">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <input type="text"
                                    name="name"
                                    defaultValue={user.displayName}
                                    className="block w-full py-3 text-gray-700 bg-white rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 border-gray-200 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Username"
                                    required />
                            </div>
                            {/* Profile Photo */}
                            <p className="mt-3 text-gray-500 mb-1 text-sm ml-2">Profile Photo</p>
                            <label htmlFor="image" className="flex items-center justify-center px-3 py-3 mx-auto text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg> */}

                                {/* <h2 className="mx-3 text-gray-400">Profile Photo</h2> */}

                                <input
                                    type="file"
                                    name="image"
                                    className="rounded-lg bg-[#D1A054] text-white opacity-70"
                                    accept="image/*"
                                    required />
                            </label>
                            <input className="btn bg-[#D1A054] w-full text-white mt-4" type="submit" value="Save" />
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserProfile;

