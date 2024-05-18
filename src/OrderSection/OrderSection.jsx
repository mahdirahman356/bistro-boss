import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from "../assets/home/slide1.jpg"
import slider2 from "../assets/home/slide2.jpg"
import slider3 from "../assets/home/slide3.jpg"
import slider4 from "../assets/home/slide4.jpg"
import slider5 from "../assets/home/slide5.jpg"
// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle';
const OrderSection = () => {
    return (
        <div className='my-20 w-[95%] md:w-[85%] mx-auto'>
          <div>
            <SectionTitle
            subHeader="---From 11:00am to 10:00pm---"
            header="ORDER ONLINE"
            >
            </SectionTitle>
          </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='md:ml-8'><img src={slider1} alt="" />
          <p className='md:text-2xl text-center text-white -mt-6 md:-mt-16'>Salads</p>
          </SwiperSlide>
          <SwiperSlide className='md:ml-8'><img src={slider2} alt="" />
          <p className='md:text-2xl text-center text-white -mt-6 md:-mt-16'>Soups</p>
          </SwiperSlide>
          <SwiperSlide className='md:ml-8'><img src={slider3} alt="" />
          <p className='md:text-2xl text-center text-white -mt-6 md:-mt-16'>pizzas</p>
          </SwiperSlide>
          <SwiperSlide className='md:ml-8'><img src={slider4} alt="" />
          <p className='md:text-2xl text-center text-white -mt-6 md:-mt-16'>desserts</p>
          </SwiperSlide>
          <SwiperSlide className='md:ml-8'><img src={slider5} alt="" />
          <p className='md:text-2xl text-center text-white -mt-6 md:-mt-16'>Salads</p>
          </SwiperSlide>         
          <SwiperSlide className='md:ml-8'><img src={slider4} alt="" />
          <p className='md:text-2xl text-center text-white -mt-6 md:-mt-16'>desserts</p>
          </SwiperSlide>         
        </Swiper>
      </div>
    );
};

export default OrderSection;