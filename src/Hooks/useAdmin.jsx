import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Context/Context";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    let axiosSecure = useAxiosSecure()
    let {user} = useContext(AuthContext)
    const { data: isAdmin = [], isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin
        }
          
      })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;