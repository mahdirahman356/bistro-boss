import SectionTitle from "../SectionTitle/SectionTitle";
import { Rating } from '@smastrom/react-rating'
import icon from "../assets/icon/Group (1).png"
import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
const Testimonials = () => {
    let [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div>
                <SectionTitle
                    header="TESTIMONIALS"
                    subHeader="---What Our Clients Say---"
                ></SectionTitle>
            </div>
            <div className="w-[95%] md:w-[85%] mx-auto my-28">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map((reviews, index) => <SwiperSlide key={index}>
                           <div className="flex flex-col gap-6 justify-center items-center mb-7">
                           <Rating
                                style={{ maxWidth: 180 }}
                                value={reviews.rating}
                                readOnly
                            />
                         <img className="w-[70px]" src={icon} alt="" />
                           </div>
                            <p className=" md:w-[60%] mx-auto text-center">{reviews.details}</p>
                            <p className="text-2xl text-[#CD9003] text-center mt-3 ">{reviews.name}</p>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;