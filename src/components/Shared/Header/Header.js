import React from "react";
import "./Header.css";
import { HiPhoneIncoming } from "react-icons/hi";

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
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Contact</a>
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
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
         <div className="call">
         <span className="me-2"><HiPhoneIncoming /></span>
         <h1>50103382</h1>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
