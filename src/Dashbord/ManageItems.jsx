import { RiDeleteBin6Line } from "react-icons/ri";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    let [menu, refetch] = useMenu()
    
    const AllManu = menu.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    let axiosSecure = useAxiosSecure()
    let handleDelete = (id, name) => {
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
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${name} has been deleted.`,
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }
    return (
        <div className="w-[95%] mx-auto">
            <SectionTitle
                subHeader="---Hurry Up!---"
                header="MANAGE ALL ITEMS"
            >
            </SectionTitle>
            <div className="my-5">
                <p className="md:text-2xl font-bold">Total Items: {menu.length}</p>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            AllManu.map((item, index) => <tr key={index} className="hover whitespace-nowrap">
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
                                    <div className="font-semibold">{item.price}$</div>
                                </td>
                                <th>
                                    <Link to={`/dashbord/update-item/${item._id}`}>
                                    <button className="btn btn-ghost">
                                    <HiOutlinePencilSquare className="text-[23px] text-[#D1A054]" />
                                    </button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item._id, item.name)} className="btn btn-ghost">
                                    <RiDeleteBin6Line className="text-xl text-red-500" />
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItems;