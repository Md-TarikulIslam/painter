/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import allData from "./fakedata";

const Contact = () => {
  return (
    <div>
      <div className="about-bg mt-20">
        <h1 className="about-text">Contact</h1>
        <div className="text-xl breadcrumbs breadcrumbs2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-grid">
        {allData.map((data) => (
          <div className="contact-card">
            <p className="contact-icon">{data.icon}</p>
            <p className="contact-title">{data.title}</p>
            <p className="contact-desc">{data.desc}</p>
          </div>
        ))}
      </div>
      <div>
        <form className="form-pad">
          <div className="form-grid">
            <input
              className="fontlight inputs"
              type="text"
              name="name"
              id=""
              placeholder="Full Name"
            />
            <input
              className="fontlight inputs"
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
            />
            <input
              className="fontlight inputs"
              type="number"
              name="phone"
              id=""
              placeholder="Phone Number"
            />
          </div>
          <textarea
            className="textarea fontlight"
            name="textarea"
            id=""
            cols="30"
            placeholder="Enter Your Message"
            rows="4"
          ></textarea>
          <button className="send-btn ">Send Form</button>
        </form>
      </div>
      <div>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.946296473735!2d11.805210800000001!3d55.4636029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46528e2577ef7033%3A0x79df1870dcdee39d!2sRoskildevej%20219%2C%204100%20Ringsted%2C%20Denmark!5e0!3m2!1sen!2sbd!4v1684204746607!5m2!1sen!2sbd"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
