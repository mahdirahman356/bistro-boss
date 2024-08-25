import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { imageUplode } from "../ImageApi";
import Swal from "sweetalert2";
import { useState } from "react";

const UpdeteItems = () => {
    let menu = useLoaderData()
    const navigate = useNavigate()
    let [loading, setLoading] = useState(false);
    let {_id, name, price, recipe, category, image} = menu
    let axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit, 
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            let url = image 
                if(data.image[0]){
                    const uploadResult = await imageUplode(data.image[0])
                    url = uploadResult
                }
            let menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: url,
                category: data.category,
                price: data.price,
            }
            console.log(menuItem)
            axiosSecure.patch(`/menu/${_id}`, menuItem)
            .then(res => {
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        title: "Success",
                        text: `${data.name} Updated Succesfully`,
                        icon: "success"
                      });
                      navigate('/dashbord/manage-items')
                }
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });

        }
        catch (err) {
            console.log(err)
            setLoading(false);

        }

    }

    return (
        <div className="w-[95%] mx-auto">
            <SectionTitle
                subHeader="---Hurry Up!---"
                header="UPDATE ITEMS"
            >
            </SectionTitle>
            <div className="w-[90%] mx-auto my-5 md:mb-16 bg-[#F4F3F0] p-5 md:p-20">
                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* from-row-1 */}
                    {/* item name */}
                    <div className="w-full">
                        <p className="font-semibold my-2 mt-5">Recipe name*</p>
                        <input type="text"
                            placeholder="Recipe name"
                            name="name"
                            defaultValue={name}
                            className="input  w-full"
                            {...register("name")} />
                    </div>

                    {/* from-row-2 */}
                    <div className="md:flex gap-4">
                        {/* Category */}
                        <div className="md:w-1/2">
                            <p className="font-semibold my-2 mt-5">Category*</p>
                            <label className="form-control w-full">
                                <select {...register("category")} className="select">
                                    <option disabled value=''>Pick one</option>
                                    <option selected={category === "salad"} value="salad">salad</option>
                                    <option selected={category === "popular"} value="popular">popular</option>
                                    <option selected={category === "dessert"} value="dessert">dessert</option>
                                    <option selected={category === "pizza"} value="pizza">pizza</option>
                                    <option selected={category === "soup"} value="soup">soup</option>
                                    <option selected={category === "drinks"} value="drinks">drinks</option>
                                    <option selected={category === "offered"} value="offered">offered</option>
                                </select>
                            </label>
                        </div>
                        {/* Price */}
                        <div className="md:w-1/2">
                            <p className="font-semibold my-2 mt-5">Price*</p>
                            <input type="text"
                                placeholder="Price"
                                name="price"
                                defaultValue={price}
                                className="input  w-full"
                                {...register("price")} />
                        </div>
                    </div>

                    {/* Recipe Details */}

                    <label className="form-control mt-5">
                        <p className="font-semibold my-2"> Recipe Details*</p>
                        <textarea
                            className="textarea h-24"
                            placeholder="Recipe Details"
                            name="recipe"
                            defaultValue={recipe}
                            {...register("recipe")}
                        ></textarea>
                    </label>
                    {/* image */}
                    <input type="file"
                        className="file-input bg-[#D1A054] border-none text-white w-full max-w-xs mt-4"
                        name="image"
                        {...register("image")}
                    />

                    <button className="btn flex text-white bg-[#D1A054] rounded-none mt-6" type="submit" >
                    {loading ?
                            <span className="loading loading-spinner text-white"></span>
                            : "Add Items"
                        }
                        <FaUtensils className="text-xl" />
                    </button>
                </form>
            </div >
        </div>
    );
};

export default UpdeteItems;