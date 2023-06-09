import React from "react";
import "./About.css";
import img from "../../../images/artpaint-about.png";
import divider from "../../../images/divider.jpg";
import { FaArrowRight, FaHardHat } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";

import img1 from "../../../images/helmet.png";
import img2 from "../../../images/paint-service-bg.jpg";

import allData from "./fakedata";
import PaintMaster from "../PaintMaster/PaintMaster";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="about-bg mt-20">
        <h1 className="about-text">About Us</h1>
        <div className="text-xl breadcrumbs">
          <ul>
            <li>
             <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-grid">
        <div className="rotation"></div>
        <div>
          <div data-aos="fade-left">
            <h1 className="dyer-text">Do you need a dyer?</h1>
            <p className="need-p fontlight">
              With our expert staff, we add a new perspective to your home with
              our economic or luxury, fast and quality works. Choose the
              renovation package that fits your budget, and we’ll come and
              renovate your home.
            </p>
            <img className="my-5" src={divider} alt="" />
          </div>

          <div className="second-flex">
            <div>
              <span className="need-icon">
                <FaHardHat />
              </span>
            </div>
            <div data-aos="fade-left" className="lg:ms-5 mt-10 lg:mt-0">
              <h2 className="team-text">Professional Team</h2>
              <p className="need-p fontlight mb-10">
                We produce guaranteed solutions in all paint works with our
                competent and experienced team.
              </p>
            </div>
          </div>
          <div className="second-flex">
            <div>
              <span className="need-icon ">
                <FaStopwatch />
              </span>
            </div>
            <div data-aos="fade-left" className="lg:ms-5 mt-10 lg:mt-0">
              <h2 className="team-text">Quick Paint</h2>
              <p className="need-p fontlight">
                Thanks to our solid expertise, we paint and deliver your home
                and office very quickly.
              </p>
              <div className="get-btn">
                <button>Get To Know Us </button>
                <span className="ms-2">
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <img className="man-img" src={img} alt="" />
        <span className="ex">
          24 <br /> <span className="year">Years of Experience</span>
        </span>
        <span className="ex2">
          240 <br /> <span className="year">Special Expert Team</span>
        </span>
      </div>

      {/* .........................  */}
      <div className="about-grid">
        {allData.map((data) => (
          <div>
            <div class="maincontainer">
              <div class="back">
                <h2>{data.title}</h2>
                <p className="fontlight">{data.desc}</p>
              </div>
              <div class="front">
                <div class="image">
                  <img src={data.img} alt="" />
                </div>
                <h2>{data.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PaintMaster></PaintMaster>
    </div>
  );
};

export default About;
