import React, { useState, useEffect } from "react";
import "./sidebar.css";
import logo from "../../../landing/imgs/logo.png";

function Sidebar({ contract, account }) {
  const [Owner, setOwner] = useState(false);

  useEffect(
    (e) => {
      const ownerCheck = async () => {
        let isOwner = await contract.isOwner();
        setOwner(isOwner);
      };

      ownerCheck();
    },
    [account, contract]
  );

  return (
    <div className="sidebar">
      <div className="logo">
        <a href="/home/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="links">
        <a href="/home/leaderboard">Leaderboard</a>
        <a href="/home/events">Events</a>
        <a href="/home/rules">Rules</a>
        {Owner ? (
          <>
            <a href="/home/nftupload">send NFTs</a>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Sidebar;
