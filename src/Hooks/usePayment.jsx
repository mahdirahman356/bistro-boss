import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
    let axiosSecure = useAxiosSecure()
    let {user} = useContext(AuthContext)
    const { data: payment = [] } = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
          
      })
    return [payment]
};

export default usePayment;