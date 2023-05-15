import React from "react";
import img1 from "../../../images/paint-slider-1.jpg";
import img2 from "../../../images/paint-slider-2.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./Carousel.css";
import Needs from "../Needs/Needs";
const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full ">
        <div
          id="slide1"
          className="carousel-item bg-img1 bg-center lg:bg-center height autoplay interval-1000 relative w-full"
        >
          <div className="carousel-text">
            <h1 className="main-text">
              Need <br /> Paint Service?
            </h1>
            <p className="sub-text">
              Let us do the renovation within your budget
            </p>
            <div className="learn-btn">
              <button>Learn More </button>
              <span className="ms-2">
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="buttonprev">
              ❮
            </a>
            <a href="#slide2" className="buttonnext">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item bg-img2 bg-center height relative w-full"
        >
          <div className="carousel-text">
            <h1 className="main-text">
              Do You Need <br /> Paint or Whitewash?
            </h1>
            <p className="sub-text">
              Let us do the renovation within your budget
            </p>
            <div className="learn-btn">
              <button>Learn More </button>
              <span className="ms-2">
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2">
            <a href="#slide1" className="buttonprev">
              ❮
            </a>
            <a href="#slide1" className="buttonnext">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center pills w-full py-2 gap-2">
        <a href="#slide1" className="pill"></a>
        <a href="#slide2" className="pill"></a>
      </div>
      <Needs></Needs>
    </div>
  );
};

export default Carousel;
