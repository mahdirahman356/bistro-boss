import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import userImg from "../assets/icon/user.avif"
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
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
    <div className="fixed z-10 w-full bg-black opacity-70">
      <div className="navbar w-[95%] mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5">
              <Link to="/">Home</Link>
              <Link to="/menu">Our Menu</Link>
              <Link to="/shop">Our Shop</Link>
               {
                user && isAdmin && <Link to="/dashbord/admin-home">Dashbord</Link>
               }
               {
                user && !isAdmin && <Link to="/dashbord/userHome">Dashbord</Link>
               }
              {
                !isAdmin &&  <Link className={!user ? "hidden" : ""} to="/dashbord/cart">
                   <button className="flex">
                <MdOutlineShoppingCart className="text-[25px]" />
                  <div className="badge badge-secondary">+{cart.length}</div>
                </button>
                </Link>

              }
              <Link to="/login" className={user ? "hidden" : ""}>Login</Link>
              <button className={!user ? "hidden" : ""} onClick={handleLogOut}>Log Out</button>
            </ul>
          </div>
          {
            user && <div className="w-10 h-10 ml-4">
              <img className="rounded-full" src={user.photoURL ? user.photoURL : userImg} alt="" />
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;