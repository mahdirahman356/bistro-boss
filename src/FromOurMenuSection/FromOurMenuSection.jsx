import SectionTitle from "../SectionTitle/SectionTitle";
import img from "../assets/home/featured.jpg"

const FromOurMenuSection = () => {
    return (
        <div>
            <div className="hero w-[95%] md:w-[85%] mx-auto my-14 md:my-24 bg-fixed" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-70 py-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div className=" mx-auto px-4 md:px-24 text-white">
                    <div className="">
                    <SectionTitle
                              header="FROM OUR MENU"
                              subHeader="---Check it out---">
                              </SectionTitle>
                    </div>
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row gap-8">
                                <img src={img} className="md:max-w-sm shadow-2xl" />
                                <div>
                                    <p className="">March 20, 2023</p>
                                    <p className="">WHERE CAN I GET SOME?</p>
                                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                    <button className="btn btn-outline text-white border-x-0 border-t-0 border-white border-b-2 mt-6 rounded-lg">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenuSection;