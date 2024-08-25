import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import userImg from "../assets/icon/user.avif"
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { GiHamburger } from "react-icons/gi";
const Navbar = () => {

  let { user, userLogOut } = useContext(AuthContext)
  let [cart] = useCart()
  let [isAdmin] = useAdmin()
  let handleLogOut = () => {
    userLogOut()
      .then(() => {
        console.log("user Log out")
      })
      .catch((error) => {
        console.log(error)
      });

  }

  return (
    <div className="md:fixed z-10 w-full bg-black md:opacity-70">
      <div className="navbar w-[95%] mx-auto text-white">
        <div className="navbar-start">
          <div className="flex items-center gap-5">
            <div role="button" className="drawer lg:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
              </div>
              <div className="drawer-side z-20">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-52 min-h-full bg-gray-100 text-base-content space-y-4">
                  <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/">Home</NavLink>
                  <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/menu">Our Manu</NavLink>
                  <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/shop">Our Shop</NavLink>
                  {user && isAdmin &&
                    <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/dashbord/admin-home">Dashbord</NavLink>
                  }
                  {user && !isAdmin &&
                    <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/dashbord/userHome">Dashbord</NavLink>
                  }
                  {!user &&
                    <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/login">Login</NavLink>
                  }
                  {user &&
                    <NavLink onClick={handleLogOut} className={({ isActive }) => isActive && "text-[#D1A054]"} to="/login">Log Out</NavLink>
                  }
                  {user && !isAdmin &&
                    <button className="flex">
                    <MdOutlineShoppingCart className="text-[25px]" />
                    <div className="badge badge-secondary">+{cart.length}</div>
                  </button>                  
                  }
                 
                </ul>
              </div>
            </div>
            <a className="btn btn-ghost text-xl"><GiHamburger className="text-2xl text-white" /> BISTRO BOSS</a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5">
              {/* <Link to="/">Home</Link>
              <Link to="/menu">Our Menu</Link>
              <Link to="/shop">Our Shop</Link>
              {
                user && isAdmin && <Link to="/dashbord/admin-home">Dashbord</Link>
              }
              {
                user && !isAdmin && <Link to="/dashbord/userHome">Dashbord</Link>
              }
              {
                !isAdmin && <Link className={!user ? "hidden" : ""} to="/dashbord/cart">
                  <button className="flex">
                    <MdOutlineShoppingCart className="text-[25px]" />
                    <div className="badge badge-secondary">+{cart.length}</div>
                  </button>
                </Link>

              }
              <Link to="/login" className={user ? "hidden" : ""}>Login</Link>
              <button className={!user ? "hidden" : ""} onClick={handleLogOut}>Log Out</button> */}
               <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/">Home</NavLink>
                  <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/menu">Our Manu</NavLink>
                  <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/shop">Our Shop</NavLink>
                  {user && isAdmin &&
                    <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/dashbord/admin-home">Dashbord</NavLink>
                  }
                  {user && !isAdmin &&
                    <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/dashbord/userHome">Dashbord</NavLink>
                  }
                  {!user &&
                    <NavLink className={({ isActive }) => isActive && "text-[#D1A054]"} to="/login">Login</NavLink>
                  }
                  {user &&
                    <NavLink onClick={handleLogOut} className={({ isActive }) => isActive && "text-[#D1A054]"} to="/login">Log Out</NavLink>
                  }
                  {user && !isAdmin &&
                    <button className="flex">
                    <MdOutlineShoppingCart className="text-[25px]" />
                    <div className="badge badge-secondary">+{cart.length}</div>
                  </button>                  
                  }
            </ul>
          </div>
          {
            user && <div className="">
              <img className="w-10 h-10 ml-4 rounded-full object-cover" src={user.photoURL ? user.photoURL : userImg} alt="" />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;