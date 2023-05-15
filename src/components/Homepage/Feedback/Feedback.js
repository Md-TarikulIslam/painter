import React from "react";
import "./Feedback.css";
import img from "../../../images/Agreement-01-256.png";
import img2 from '../../../images/Quotation-Marks-342.png'
import allData from "./fakedata";
import Article from "../Article/Article";

const Feedback = () => {
  return (
    <div>
      <div className="space feedback-bg">
        <div data-aos="fade-up" className="text-center mt-5">
          <img className="feedback-icon" src={img} alt="" />
          <h1 className="service-text">What Are Our Customers Saying?</h1>
          <p className="fontlight text-xl">
            Opinions from our happy customers.
          </p>
        </div>
        <div data-aos="fade-right" className="feedback-grid">
          {allData.map((data) => (
            <div className="feedback-card glass">
              <h1 className="fontlight feed-title">{data.title}</h1>
              <img className="quote" src={img2} alt="" />
              <img className="person-img" src={data.img} alt="" />
              <p className="person-name fontlight">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Article></Article>
    </div>
  );
};

export default Feedback;
