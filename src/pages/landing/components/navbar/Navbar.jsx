import React from "react";
import "./navbar.css";
import logo from "../../imgs/logo.png";

function Navbar() {
  return (
    <div className="landing-nav">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          |
          <li>
            <a href="">About Us</a>
          </li>
          |
          <li>
            <a href="">Catagory</a>
          </li>
          |
          <li>
            <a href="">Menu</a>
          </li>
          <li className="btn">
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
