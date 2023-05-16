import React from "react";
import "./HousePainting.css";
import { Link } from "react-router-dom";
import img1 from "../../../images/Service-page/service-big-paint-1.jpg";
import { FaArrowRight } from "react-icons/fa";
import icon from "../../../images/helmet.png";

const HousePainting = () => {
  return (
    <div>
      <div className="about-bg mt-20">
        <h1 className="about-text">House Painting</h1>
        <div className="text-xl breadcrumbs breadcrumbs3">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">House Painting</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Flex  */}

      <div className="house-flex">
        <div>
          <div data-aos="fade-left"  className="links">
            <Link className="link flex ml-5 items-center" to="/house-painting">
              <FaArrowRight />
              House Painting
            </Link>

            <Link className="link flex ml-5 items-center" to="/office-painting">
              <FaArrowRight />
              Office Painting
            </Link>

            <Link className="link flex ml-5 items-center" to="/interior-painting">
              <FaArrowRight />
              Interior Painting
            </Link>

            <Link className="link flex ml-5 items-center" to="/exterior-painting">
              <FaArrowRight />
              Exterior Painting
            </Link>

            <Link className="link flex ml-5 items-center" to="/paint-master">
              <FaArrowRight />
              Paint Master
            </Link>
          </div>

          {/* form   */}
          <div data-aos="fade-left"  className="form-card">
            <h1 className="service-head">Leave Your Number</h1>
            <p className="service-p fontlight">Let's Call You Back</p>
            <div>
              <form className="form-flex">
                <input
                  className="fontlight inp"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />{" "}
                <input
                  className="fontlight inp"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <input
                  className="fontlight inp"
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                />
                <button className="fontlight sub-btn" type="submit">
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <img className="service-img" src={img1} alt="" />
          <h1 className="serv-text"> House Painting</h1>
          <p className="serv-p fontlight">
            Paint is defined as a chemical material that forms a decorative and
            protective layer when applied to a surface. This material is a
            chemical mixture that is formulated within certain principles and
            contains four essential elements.
          </p>
          <div className="new-flex ">
            <div data-aos="fade-left"  class="maincontainer">
              <div class="back">
                <h2>Reliability</h2>
                <p className="fontlight">
                  We provide accurate, reliable and ethical services with our
                  expert staff. We apply the fastest and most reliable methods
                  for your brand.
                </p>
              </div>
              <div class="front">
                <div class="image">
                  <img src={icon} alt="" />
                </div>
                <h2>Reliability</h2>
              </div>
            </div>
            <div data-aos="fade-right" class="maincontainer">
              <div class="back">
                <h2>Loyalty</h2>
                <p className="fontlight">
                  Our long-term work continues until the job is finished. We
                  establish solid and long-term relationships with all the
                  companies we work with.
                </p>
              </div>
              <div class="front">
                <div class="image">
                  <img src={icon} alt="" />
                </div>
                <h2>Loyalty</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousePainting;
