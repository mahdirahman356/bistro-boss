import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SectionTitle from "../SectionTitle/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    let axiosSecure = useAxiosSecure()
    let { refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    let handleDelete = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }

    let handleMakeAdmin = (id, name) => {
      axiosSecure.patch(`/users/admin/${id}`)
      .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                title: 'Success',
                text: `${name} is an Adin Now`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
      })
    }
    return (
        <div className="w-[95%] mx-auto">
            <SectionTitle
                subHeader="---How many??---"
                header="MANAGE ALL USERS"
            >
            </SectionTitle>
            <div className="my-5">
                <p className="md:text-2xl font-bold">Total Users: {users.length}</p>
            </div>

            <div className="overflow-x-auto rounded-t-2xl">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white rounded-t-3xl">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((users, index) => <tr key={index} className="hover whitespace-nowrap">
                                <td>
                                    <p className="font-semibold"> {index + 1} </p>
                                </td>
                                <td>
                                    <div className="">{users.name}</div>

                                </td>
                                <td>
                                    <div className="">{users.email}</div>
                                </td>
                                <td>
                               { users.role === "Admin" ? "Admin" : <button onClick={() => handleMakeAdmin(users._id, users.name)} className="btn btn-ghost">
                                        <FaUsers className="text-[22px] text-[#D1A054]" />
                                    </button>}
                                </td>

                                <td>
                                    <button onClick={() => handleDelete(users._id)} className="btn btn-ghost">
                                        <RiDeleteBin6Line className="text-xl text-red-500" />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;