import React, { useState } from "react";
import "./sidebar.css";

function Sidebar() {
  // const [Owner, setOwner] = useState(false);

  // useEffect(
  //   (e) => {
  //     const ownerCheck = async () => {
  //       let isOwner = await contract.isOwner();
  //       setOwner(isOwner);
  //     };

  //     ownerCheck();
  //   },
  //   [account, contract]
  // );

  return (
    <div>
      <div className="logo">
        <a href="/home/">Logo</a>
      </div>
      <div className="links">
        <a href="/home/leaderboard">Leaderboard</a>
        <a href="/home/events">Events</a>
        <a href="/home/rules">Rules</a>
      </div>
    </div>
  );
}

export default Sidebar;
