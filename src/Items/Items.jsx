import PropTypes from 'prop-types'; 

const Items = ({popular}) => {
    let {name, recipe, price} = popular
    return (
        <div>
            <div className="flex gap-3" >
                <div>
                <img className="w-[100px] rounded-r-[100px] rounded-b-[100px]" src={popular.image} alt="" /> 
                </div>
                  <div>
                    <p className="text-[18px] uppercase">{name} ----------------</p>
                    <p className="text-sm text-gray-500">{recipe}</p>
                  </div>
                  <p className="text-[#BB8506]">${price}</p>
                </div>
        </div>
    );
};

Items.propTypes={
    popular: PropTypes.object.isRequired,
}

export default Items;