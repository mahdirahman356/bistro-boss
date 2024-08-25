import { useContext } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { AuthContext } from "../Context/Context";
import { TbPencilStar, TbUser } from "react-icons/tb";
import { MdOutlinePayments, MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../Hooks/useCart";
import usePayment from "../Hooks/usePayment";
import userImg from "../assets/icon/user.avif"

const UserHome = () => {
    const { user } = useContext(AuthContext)
    const [cart] = useCart()
    const [payment] = usePayment()

    return (
        <div className="w-[95%] mx-auto">
            <SectionTitle
                header='Wellcome back'
            >
            </SectionTitle>
            <div className="md:my-5">
                <p className="text-xl md:text-2xl font-bold">Hi, {user.displayName}</p>
            </div>

            <div className="flex flex-col md:flex-row my-12 glass rounded-xl bg-[#D1A054] p-6">
            <div className="w-full ">
                    <div className="flex justify-center ">
                        <img className="object-cover w-28 h-28 border-2 border-[#D1A054] rounded-full dark:border-blue-400" src={user.photoURL ? user.photoURL : userImg} alt="" />
                    </div>
                    <h2 className="mt-2 text-xl font-semibold md:mt-3 text-center text-white mb-3">{user.displayName}</h2>
                </div>
                <div className="w-full">
                    {/* start */}
                    <div className=" bg-white overflow-hidden rounded-lg">

                        <div className="flex items-center px-6 py-3 bg-[#D1A054]">
                            <TbUser className="text-3xl text-white" />
                            <h1 className="mx-3 text-lg font-semibold text-white">your activities</h1>
                        </div>

                        <div className="px-6 py-4">
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <MdOutlineShoppingCart className="text-[23px]" />
                                <h1 className="px-2 text-sm">Orders</h1>
                                <div className="badge bg-slate-200">{cart.length}</div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <TbPencilStar className="text-[23px]"/>
                                <h1 className="px-2 text-sm">Reviews</h1>
                                <div className="badge bg-slate-200">9</div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                            <MdOutlinePayments className="text-[23px]" />
                                <h1 className="px-2 text-sm">Payments 
                                <div className="badge bg-slate-200">{payment.length}</div>
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* end */}
                </div>
            </div>
        </div>
    );
};

export default UserHome;