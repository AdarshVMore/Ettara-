import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function Profile({ account, contract }) {
  const [customerInfo, setCustomerInfo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [overAllPoints, setOverAllPoints] = useState("");
  useEffect(() => {
    const getCustomer = async () => {
      const customerInfo = await contract.getCustomer(account);
      setCustomerInfo(customerInfo);
      const bigNumber = ethers.BigNumber.from(customerInfo.overAllPoints);
      const string = bigNumber.toString();
      setOverAllPoints(string);

      setIsLoaded(true);
    };

    getCustomer();
  }, [account, contract]);

  return (
    <div>
      {isLoaded ? (
        <>
          <p>Username : {customerInfo.funkyName}</p>
          <p>Tier : {customerInfo.tier}</p>
          <p>Points : {overAllPoints}</p>
        </>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default Profile;
