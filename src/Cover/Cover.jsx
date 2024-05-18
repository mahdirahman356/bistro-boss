import PropTypes from 'prop-types'; 

const Cover = ({img, header, subHeader}) => {
    return (
        <div>
            <div className="hero h-screen md:mb-24" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay  py-60"></div>
                <div className="hero-content w-full text-center text-neutral-content">
                    <div className="w-full mx-auto p-4 md:p-24 bg-black text-white bg-opacity-60">
                        <h1 className={`mb-5 text-3xl md:text-5xl font-bold`}>{header}</h1>
                        <p className="mb-5">{subHeader}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cover.propTypes ={
    img: PropTypes.string.string,
    header: PropTypes.string.string,
    subHeader: PropTypes.string.string,
}
export default Cover;