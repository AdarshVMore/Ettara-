import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

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
    <div>
      {isDataReady ? (
        <ul>
          {allCustomer.map((item, index) => (
            <li key={index}>
              name {item.funkyName}, points: {item.overAllPoints}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Lboard;
