import React from "react";
import "./nav.css";

function Nav({ account, contract }) {
  return (
    <div className="navbar">
      <div className="points">{}</div>
      <div className="coffeeBeans">{} CB</div>
      <div className="address">{account}</div>
      <div className="profile">
        <a href="/home/profile/">profile</a>
      </div>
    </div>
  );
}

export default Nav;
