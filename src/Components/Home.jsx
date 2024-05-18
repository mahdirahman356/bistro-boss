import Banner from "../Banner/Banner";
import FromOurMenuSection from "../FromOurMenuSection/FromOurMenuSection";
import OrderSection from "../OrderSection/OrderSection";
import PopularMenu from "../PopularMenu/PopularMenu";
import ServiceSection from "../ServiceSection/ServiceSection";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <OrderSection></OrderSection>
            <ServiceSection></ServiceSection>
            <PopularMenu></PopularMenu>
            <FromOurMenuSection></FromOurMenuSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;