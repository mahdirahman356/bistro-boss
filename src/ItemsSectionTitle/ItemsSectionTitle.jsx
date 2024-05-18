import PropTypes from 'prop-types'; 
import img from "../assets/home/chef-service.jpg"
const ItemsSectionTitle = ({header, description}) => {
    return (
        <div>
            <div className="hero h-screen md:mb-24" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay  py-60"></div>
                <div className="hero-content w-full text-center text-neutral-content">
                    <div className="w-full mx-auto p-4 md:p-24 bg-black text-white bg-opacity-60">
                        <h1 className={`mb-5 text-3xl md:text-4xl font-bold`}>{header}</h1>
                        <p className="mb-5 md:w-[70%] mx-auto">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


ItemsSectionTitle.propTypes ={
    header: PropTypes.string.string,
    description: PropTypes.string.string,
}
export default ItemsSectionTitle;