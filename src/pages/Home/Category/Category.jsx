import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section>
      <SectionTitle heading={"Order Online"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <Link to="/order/OTC-Medicines">
          <img src={slide1} alt="" />
          <h3 className="text-2xl font-bold uppercase text-center -mt-20 text-black">
            OTC-Medicine
          </h3>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/order/Personal Care">
            <img src={slide2} alt="" />
            <h3 className="text-2xl font-bold uppercase text-center -mt-20 text-black">
              Personal Care
            </h3>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
         <Link to="/order/Vitamins & Supplements">
         <img src={slide3} alt="" />
          <h3 className="text-2xl font-bold uppercase text-center -mt-20 text-black">
            Vitamins
          </h3>
         </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/order/Dental Care">
          <img src={slide4} alt="" />
          <h3 className="text-2xl font-bold uppercase text-center -mt-20 text-black">
            Dental Care
          </h3>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/order/Medical Device">
          <img src={slide5} alt="" />
          <h3 className="text-2xl font-bold uppercase text-center -mt-20 text-black">
            Medi Devices
          </h3>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
