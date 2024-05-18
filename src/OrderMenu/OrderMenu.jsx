import Items from "../Items/Items";
import PropTypes from 'prop-types';

const OrderMenu = ({item}) => {
    return (
        <div>
            <div className="w-[95%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    item.map((popular, index) => <Items key={index} popular={popular}></Items>)
                }
            </div>
            <div className="flex justify-center items-center mt-5">
                <button className="uppercase btn btn-outline text-black border-x-0 border-t-0 border-black border-b-2 mt-6 rounded-lg">Order Now</button>
            </div>
        </div>
    );
};

OrderMenu.propTypes = {
    item : PropTypes.object.isRequired,
}

export default OrderMenu;