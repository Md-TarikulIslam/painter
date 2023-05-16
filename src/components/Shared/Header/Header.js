import React from "react";
import "./Header.css";
import { HiPhoneIncoming } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 lg:px-36 stick">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost drop lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact drop-2 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li tabIndex={1}>
                <a className="justify-between">
                  Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-white absolute -left-40">
                  <li>
                    <Link to="/house-painting">House Painting</Link>
                  </li>
                  <li>
                    <Link to="/office-painting">Office Painting</Link>
                  </li>
                  <li>
                    <Link to="/interior-painting">Interior Painting</Link>
                  </li>
                  <li>
                    <Link to="/exterior-painting">Exterior Painting</Link>
                  </li>
                  <li>
                    <Link to="/paint-master">Paint Master</Link>
                  </li>
                  <li>
                    <Link to="/all-services">All Services</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost relative right-10 normal-case text-xl">
            daisyUI
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li tabIndex={0}>
              <a>
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-6 bg-white">
                <li>
                  <Link to="/house-painting">House Painting</Link>
                </li>
                <li>
                  <Link to="/office-painting">Office Painting</Link>
                </li>
                <li>
                  <Link to="/interior-painting">Interior Painting</Link>
                </li>
                <li>
                  <Link to="/exterior-painting">Exterior Painting</Link>
                </li>
                <li>
                  <Link to="/paint-master">Paint Master</Link>
                </li>
                <li>
                  <Link to="/all-services">All Services</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="call">
            <span className="me-2">
              <HiPhoneIncoming />
            </span>
            <h1>50103382</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
