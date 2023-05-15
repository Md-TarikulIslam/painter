import React from "react";
import "./Article.css";
import img from "../../../images/News-256.png";
import allData from "./fakedata";

const Article = () => {
  return (
    <div>
   <div className="article"> 
   <div data-aos="fade-up" className="text-center  mt-5">
        <img className="feedback-icon" src={img} alt="" />
        <h1 className="service-text">Recent News and Article</h1>
        <p className="fontlight text-xl">Useful Information About Paint</p>
      </div>
      <div data-aos="fade-right" className="article-grid">
        {allData.map((data) => (
          <div className="article-card">
            <img className="article-img" src={data.img} alt="" />
            <p className="article-date">{data.date}</p>
            <p className="article-que">{data.que}</p>
            <p className="article-title fontlight">{data.title}</p>
            <button className="btn-more">More</button>
          </div>
        ))}
      </div>
   </div>
    </div>
  );
};

export default Article;
