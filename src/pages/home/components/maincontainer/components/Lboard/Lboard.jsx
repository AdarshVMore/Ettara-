import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./leaderboard.css";

function Lboard({ contract }) {
  const [allCustomer, setAllCustomer] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    const getCustomerList = async () => {
      const customerList = await contract.getAllCustomers();
      const customers = [];
      for (let i = 0; i < customerList.length; i++) {
        const list = await contract.getCustomer(customerList[i]);
        const bigNumber = ethers.BigNumber.from(list.overAllPoints);
        const string = bigNumber.toString();
        customers.push({ ...list, overAllPoints: string });
      }
      customers.sort((a, b) => b.overAllPoints - a.overAllPoints);
      setAllCustomer(customers);
      setIsDataReady(true);
    };
    getCustomerList();
  }, [contract]);

  return (
    <div className="leaderBoard">
      {isDataReady ? (
        <ul>
          <div className="top">
            <div className="name-top">Names</div>
            <div className="address-top">Addresses</div>
            <div className="points-top">Points</div>
          </div>
          {allCustomer.map((item, index) => (
            <div key={index} className="each_score">
              <div className="name">{item.funkyName}</div>
              <div className="address_cust"> {item.customer_address} </div>
              <div className="points">{item.overAllPoints}</div>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Lboard;
