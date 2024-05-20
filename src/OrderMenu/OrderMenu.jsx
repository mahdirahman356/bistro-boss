import { useContext} from "react";
import Items from "../Items/Items";
import PropTypes from 'prop-types';
import { AuthContext } from "../Context/Context";
import { Link } from "react-router-dom";

const OrderMenu = ({ item, itemName }) => {
    let { SetMenuList } = useContext(AuthContext)
    let handleOrderNow = (items) => {
        SetMenuList(items)
    }
    return (
        <div>
            <div className="w-[95%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    item.map((popular, index) => <Items key={index} popular={popular}></Items>)
                }
            </div>
            <div className="flex justify-center items-center mt-5">
                <Link to="/shop"><button onClick={() => handleOrderNow(itemName)} className="uppercase btn btn-outline text-black border-x-0 border-t-0 border-black border-b-2 mt-6 rounded-lg">Order Now</button></Link>
            </div>
        </div>
    );
};

OrderMenu.propTypes = {
    item: PropTypes.object.isRequired,
    itemName: PropTypes.string.isRequired,
}

export default OrderMenu;