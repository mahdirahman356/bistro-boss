import PropTypes from 'prop-types'; 
import { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosCommon from '../Hooks/useAxiosCommon';
import useCart from '../Hooks/useCart';

const FoodCard = ({items}) => {
    let {recipe, name, image, price, _id} = items
    let {user} = useContext(AuthContext)
    let axiosCommon = useAxiosCommon()
    let navigate = useNavigate();
    let location = useLocation();
    let [, refetch] = useCart()
    let from = location.state?.from?.pathname || "/";
    let handleFoodCart = ()  => {
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosCommon.post("/carts",cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.acknowledged === true){
                    Swal.fire({
                        title: "Success",
                        text: `${name} added to your cart`,
                        icon: "success"
                      });
                      refetch()  
                }
            })
        }
        
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate( '/login',from, { replace: true });                }
              });
        }
    }
    return (
        <div className="overflow-hidden shadow-lg bg-[#f1eaea]">
        <div className="relative">
         <span className="bg-[#111827] px-3 py-1 text-white absolute right-2 top-2">${price}</span>   
        <img className="object-cover w-full" src={image} alt="" />
        </div>
    <div className="p-5 text-center">
        <a href="#" className="block text-xl font-bold mb-2" tabIndex="0" role="link">{name}</a>
        <span className="text-sm ">{recipe}</span>
        <div className="flex justify-center items-center mt-5">
                <button onClick={ handleFoodCart } className="uppercase btn btn-outline bg-[#d4d3d3] text-[#BB8506] border-x-0 border-t-0 border-[#BB8506] border-b-2 mt-6 rounded-lg">Add to cart</button>
            </div>
    </div>
</div>
    );
};

FoodCard.propTypes ={
    items: PropTypes.object.isRequired,
   
}
export default FoodCard;