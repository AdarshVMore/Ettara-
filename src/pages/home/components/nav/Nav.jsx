import React, { useState, useEffect } from "react";
import "./nav.css";
import { ethers } from "ethers";

function Nav({ account, contract, Owner }) {
  const [customerInfo, setCustomerInfo] = useState(null);
  const [overAllPoints, setOverAllPoints] = useState("");
  useEffect(() => {
    const getCustomer = async () => {
      const customerInfo = await contract.getCustomer(account);
      setCustomerInfo(customerInfo);
      const bigNumber = ethers.BigNumber.from(customerInfo.overAllPoints);
      const string = bigNumber.toString();
      setOverAllPoints(string);
    };

    getCustomer();
  }, [account, contract]);
  return (
    <div className="navbar">
      {Owner ? (
        <>
          <button>
            <a href="/home/givepoint">Give Points</a>
          </button>
        </>
      ) : (
        <div className="points">{overAllPoints}</div>
      )}
      <div className="address">{account}</div>
      <div className="profile">
        <a href="/home/profile/">profile</a>
      </div>
    </div>
  );
}

export default Nav;
