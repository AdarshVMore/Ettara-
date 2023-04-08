import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="logo">
        <a href="/home/">Logo</a>
      </div>
      <div className="links">
        <a href="leaderboard">Leaderboard</a>
        <a href="Events">Events</a>
        <a href="rules">Rules</a>
      </div>
    </div>
  );
}

export default Sidebar;
