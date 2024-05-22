import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../Hooks/useCart";
import SectionTitle from "../SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Cart = () => {
    let [cart, refetch] = useCart()
    let totalPrice = cart.reduce((total, item) => total + item.price, 0)
    let axiosSecure = useAxiosSecure()
    let handleDelete = (id) => {
       console.log(id)
       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }

        })

        }
      });
    }
    return (
        <div className="w-[95%] mx-auto">
            <div>
                <SectionTitle
                    subHeader="---Hurry Up!---"
                    header="MANAGE ALL ITEMS"
                >
                </SectionTitle>
            </div>
            <div className="flex justify-around gap-3 items-center my-5">
                <p className="md:text-2xl font-bold">Total items: {cart.length}</p>
                <p className="md:text-2xl font-bold">Total Price: {totalPrice}$</p>
                <button className="btn btn-sm bg-[#D1A054] text-white">Pay</button>
            </div>
            <div className="overflow-x-auto rounded-t-2xl">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white rounded-t-3xl">
                        <tr>
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={index}>
                                <td>
                                   <p className="font-semibold"> {index + 1} </p>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-semibold">{item.name}</div>
                                </td>
                                <td>
                                    <div className="font-semibold">{item.price}</div>
                                </td>
                                <th>
                                    <div onClick={() => handleDelete (item._id)}>
                                    <RiDeleteBin6Line className="text-xl text-red-500" />
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;