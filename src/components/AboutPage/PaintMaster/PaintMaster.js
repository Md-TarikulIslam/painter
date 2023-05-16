import React from "react";
import "./PaintMaster.css";
import allData from "./fakedata";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const PaintMaster = () => {
  return (
    <div>
      <div className="paint-bg">
        <div  className="text-center">
          <h1 className="service-text">Our Paint Masters</h1>
          <p className="fontlight text-xl">
            We are at your service with our competent staff.
          </p>
        </div>
        <div className="paint-grid">
            {
                allData.map(data=>(
                    <div className="paint-card glass">
                        <img className="paint-img" src={data.img} alt="" />
                        <div className="description">
                            <h2 className="painter-name">{data.name}</h2>
                            <p className="job">{data.work}</p>
                            <div className="social-icons">
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                                </div>
                        </div>
                        </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default PaintMaster;
