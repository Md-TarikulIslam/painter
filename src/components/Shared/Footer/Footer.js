import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="foo">
        <div className="foo-flex">
          <div className="fontlight">
            <h1>Logo</h1>
            <h1>Roskildevej 219, 4100 Roskilde</h1>
            <h1>50103382; 50237810</h1>
            <h1>example@gmail.com</h1>
          </div>
          <div >
            <h1 className="foo-head">Join Our Newsletter</h1>
            <p className="fontlight">Subscribe to be informed about our services and products</p>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email Address"
              className="fontlight"
            />
            <br />
            <button className="fontlight" type="submit">Subscribe</button>
          </div>
          <div>
            <h1 className="foo-head"> Services</h1>
            <ul className="fontlight">
              <li>House Painting</li>
              <li>Office Painting</li>
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Paint Master</li>
            </ul>
          </div>
          <div>
            <h1 className="foo-head ">Quick Links</h1>
            <ul className="fontlight">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
