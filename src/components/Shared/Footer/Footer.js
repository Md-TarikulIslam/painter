import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegRegistered } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="foo">
        <div className="foo-flex">
          <div className="fontlight">
            <h1 className="mb-4">Logo</h1>
            <div className="flex items-center mb-4">
              <p className="text-3xl me-3"> 
                <FaMapMarkerAlt />
              </p>
              <h1> Roskildevej 219, 4100 Roskilde</h1>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-3xl me-3"> 
                <FaPhoneAlt />
              </p>
              <h1> 50103382; 50237810</h1>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-3xl me-3"> 
                <FaRegRegistered />
              </p>
              <h1>42630519</h1>
            </div>
          
           
          </div>
          <div>
            <h1 className="foo-head">Join Our Newsletter</h1>
            <p className="fontlight">
              Subscribe to be informed about our services and products
            </p>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email Address"
              className="fontlight email-field"
            />
            <br />
            <button className="fontlight sub" type="submit">
              Subscribe
            </button>
          </div>
          <div>
            <h1 className="foo-head mb-3"> Services</h1>
            <ul className="fontlight">
              <li className="mb-2">House Painting</li>
              <li className="mb-2">Office Painting</li>
              <li className="mb-2">Interior Painting</li>
              <li className="mb-2">Exterior Painting</li>
              <li className="mb-2">Paint Master</li>
            </ul>
          </div>
          <div>
            <h1 className="foo-head mb-3">Quick Links</h1>
            <ul className="fontlight">
              <li className="mb-2">Home</li>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Services</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
