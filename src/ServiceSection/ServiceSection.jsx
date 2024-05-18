import img from "../assets/home/chef-service.jpg"
const ServiceSection = () => {
    return (
        <div>
            <div className="hero w-[95%] md:w-[85%] mx-auto my-14 md:my-24" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay  py-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[85%] mx-auto p-4 md:p-24 bg-white text-black">
                        <h1 className="mb-5 text-5xl font-bold text-gray-700">Bistro Boss</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;