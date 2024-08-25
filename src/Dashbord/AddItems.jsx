import { useForm } from "react-hook-form";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { imageUplode } from "../ImageApi";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItems = () => {
    let axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    let [loading, setLoading] = useState(false);
    const {
        register, 
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = async(data) => {
        setLoading(true);
        try{
            const url = await imageUplode(data.image[0])
            let menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: url,
                category: data.category,
                price: data.price,
                date: new Date()
             }
            console.log(menuItem)
            axiosSecure.post("/menu", menuItem)
            .then(res => {
                console.log(res.data)
                if(res.data.acknowledged === true){
                    Swal.fire({
                        title: "Success",
                        text: `${data.name} added to your menu`,
                        icon: "success"
                      });
                      navigate("/dashbord/manage-items")
                      refetch()  
                }
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
            
        }
        catch (err){
            console.log(err)
            setLoading(false);
        }

    }

    return (
        <div>
            <SectionTitle
                subHeader="---What's new?---"
                header="ADD AN ITEM"
            >
            </SectionTitle>
            <div className="w-[90%] mx-auto my-5 md:mb-16 bg-[#F4F3F0] p-5 md:p-20">
                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* from-row-1 */}
                    <div className="w-full">
                        <p className="font-semibold my-2 mt-5">Recipe name*</p>
                        <input type="text"
                            placeholder="Recipe name"
                            name="name"
                            className="input  w-full"
                            {...register("name", { required: true })} />
                        {errors.name && <span className="text-sm text-red-500">This field is required</span>}

                    </div>

                    {/* from-row-2 */}
                    <div className="md:flex gap-4">
                        {/* Category */}
                        <div className="md:w-1/2">
                            <p className="font-semibold my-2 mt-5">Category*</p>
                            <label className="form-control w-full">
                                <select {...register("category", { required: true })} className="select">
                                    <option disabled selected value=''>Pick one</option>
                                    <option value="salad">salad</option>
                                    <option value="popular">popular</option>
                                    <option value="dessert">dessert</option>
                                    <option value="pizza">pizza</option>
                                    <option value="soup">soup</option>
                                    <option value="drinks">drinks</option>
                                    <option value="offered">offered</option>
                                </select>
                            </label>
                            {errors.category && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        {/* Price */}
                        <div className="md:w-1/2">
                            <p className="font-semibold my-2 mt-5">Price*</p>
                            <input type="text"
                                placeholder="Price"
                                name="price"
                                className="input  w-full"
                                {...register("price", { required: true })} />
                            {errors.price && <span className="text-sm text-red-500">This field is required</span>}

                        </div>
                    </div>

                    {/* Recipe Details */}

                    <label className="form-control mt-5">
                        <p className="font-semibold my-2"> Recipe Details*</p>
                        <textarea
                            className="textarea h-24"
                            placeholder="Recipe Details"
                            name="recipe"
                            {...register("recipe", { required: true })}
                        ></textarea>
                        {errors.recipe && <span className="text-sm text-red-500">This field is required</span>}

                    </label>
                    {/* image */}
                    <input type="file"
                        className="file-input bg-[#D1A054] border-none text-white w-full max-w-xs mt-4"
                        name="image"
                        {...register("image", { required: true })}
                    />
                    {errors.image && <p className="text-sm text-red-500">This field is required</p>}


                    <button className="btn flex text-white bg-[#D1A054] rounded-none mt-6" type="submit" >
                    {loading ?
                            <span className="loading loading-spinner text-white"></span>
                            : "Add Items"
                        }
                        <FaUtensils className="text-xl" />
                    </button>
                </form>
            </div >
        </div >
    );
};

export default AddItems;