import FoodCard from "../FoodCard/FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({ items }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                {
                    items.map((items, index) => <FoodCard
                        key={index} items={items}>
                    </FoodCard>)
                }
            </div>
        </div>
    );
};
OrderTab.propTypes = {
    items: PropTypes.object.isRequired,

}
export default OrderTab;