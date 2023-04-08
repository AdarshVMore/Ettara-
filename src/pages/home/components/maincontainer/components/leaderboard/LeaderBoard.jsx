import React, { useEffect, useState } from "react";

function LeaderBoard(account, contract) {
  const [allCustomers, setAllCustomers] = useState([]);
  useEffect(() => {
    const getCustomerList = async () => {
      const allCustomer = await contract.getCustomerList();
      console.log(allCustomer);
      for (let i = 0; i < allCustomer.length; i++) {
        const customerInfo = await contract.getCustomer(allCustomer[i]);
        console.log(customerInfo);
        setAllCustomers(...allCustomers, customerInfo);
        console.log(allCustomers);
      }
    };

    getCustomerList();
  });
  return <div></div>;
}

export default LeaderBoard;
