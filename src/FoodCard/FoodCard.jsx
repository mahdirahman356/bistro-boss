import PropTypes from 'prop-types'; 

const FoodCard = ({items}) => {
    let {recipe, name, image, price} = items
    return (
        <div className="overflow-hidden shadow-lg bg-[#f1eaea]">
        <div className="relative">
         <span className="bg-[#111827] px-3 py-1 text-white absolute right-2 top-2">${price}</span>   
        <img className="object-cover w-full" src={image} alt="" />
        </div>
    <div className="p-5 text-center">
        <a href="#" className="block text-xl font-bold mb-2" tabIndex="0" role="link">{name}</a>
        <span className="text-sm ">{recipe}</span>
    </div>
</div>
    );
};

FoodCard.propTypes ={
    items: PropTypes.object.isRequired,
   
}
export default FoodCard;