import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useMenu = () => {
    let axiosCommon = useAxiosCommon()

    const { refetch, data: menu = []  } = useQuery({
        queryKey: ["menu"],
        queryFn: async() => {
             const res = await axiosCommon.get("/menu")
             return res.data
        }
    }) 

    return [menu, refetch]
};

export default useMenu;