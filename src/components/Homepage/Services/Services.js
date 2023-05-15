import React from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import data from "./fakedata";
const Services = () => {
  return (
    <div>
      <div className="service-bg space">
        <div data-aos="fade-up" className="text-center mt-5">
          <h1 className="service-text">Our Painting Services</h1>
          <p className="fontlight text-xl">
            We are at your service for all your painting needs.
          </p>
        </div>
        <div data-aos="fade-up" className="main-container">
          <Swiper
          navigation={true}
            modules={[Pagination, Navigation, Autoplay, FreeMode]}
            freeMode={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            centeredSlides={true}
            spaceBetween={40}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
         
            className="mySwiper "
          >
            {data.map((d) => (
              <SwiperSlide className="swip-container">
                <img className="swip-img" src={d.img} alt="" />
                <img className="logo" src={d.img2} alt="" />
                <h1 className="swip-p">{d.title}</h1>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;
