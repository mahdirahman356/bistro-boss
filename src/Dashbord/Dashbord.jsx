import { CgMenuRightAlt } from "react-icons/cg";
import { FaUtensils } from "react-icons/fa6";
import { HiOutlineHome, HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdOutlinePayments, MdOutlineShoppingBag, MdOutlineShoppingCart } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { RiMenuFold4Line } from "react-icons/ri";
import { TbUser } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashbord = () => {
    let [isAdmin] = useAdmin()
    console.log(isAdmin)
    return (
        <div className="flex flex-col lg:flex-row">
            {/* side bar */}
            <div className="lg:w-60 mb-12 md:mb-0">
                <div className="drawer md:drawer lg:drawer-open  lg:fixed lg:h-screen text-base-content gap-4 bg-[#D1A054] lg:bg-white">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content w-full flex items-center justify-between p-3 text-white bg-[#D1A054] lg:bg-white">
                        <p className="text-2xl font-bold lg:hidden">Bistro Boss</p>
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"><CgMenuRightAlt className="text-[23px]" /></label>

                    </div>
                    <div className="drawer-side h-screen">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-7 w-70 md:w-60 h-screen  text-base-content gap-4 bg-[#D1A054]">
                            {isAdmin ? <>
                                <NavLink to='admin-home' className="flex items-center gap-2"><HiOutlineHome className="text-[23px]" />Admin Home</NavLink>
                                <NavLink to="add-items" className="flex items-center gap-2"><FaUtensils className="text-xl" />Add Items</NavLink>
                                <NavLink to='manage-items' className="flex items-center gap-2"><RiMenuFold4Line className="text-[23px]" />Manage Items</NavLink>
                                <NavLink to='all-users' className="flex items-center gap-2"><PiUsersThree className="text-[24px]" />All Users</NavLink>
                            </>
                                : <>
                                    <NavLink to='userHome' className="flex items-center gap-2"><HiOutlineHome className="text-[23px]" />User Home</NavLink>
                                    <NavLink to='cart' className="flex items-center gap-2"><MdOutlineShoppingCart className="text-[23px]" />My Cart</NavLink>
                                    <NavLink to='payment-history' className="flex items-center gap-2"><MdOutlinePayments className="text-[23px]" />Payment History</NavLink>
                                </>}

                            <NavLink to='/' className="flex items-center gap-2 border-t-[1px] border-white mt-4 pt-5"><HiOutlineHome className="text-[23px]" />Home</NavLink>
                            <NavLink to='/menu' className="flex items-center gap-2"><HiOutlineMenuAlt1 className="text-[23px]" />Menu</NavLink>
                            <NavLink to='/shop' className="flex items-center gap-2"><MdOutlineShoppingBag className="text-[23px]" />Shop</NavLink>
                            <NavLink to='user-profilr' className="flex items-center gap-2"><TbUser className="text-[25px]" />Profile</NavLink>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="flex-1 bg-white sticky top-0 -z-10 lg:z-20">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;