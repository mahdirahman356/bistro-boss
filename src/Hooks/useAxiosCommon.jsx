import axios from "axios";

 let axiosCommon = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-taupe.vercel.app'
})
const useAxiosCommon = () => {
    return axiosCommon
};

export default useAxiosCommon;  