import React, { useEffect, useState } from "react";

function Profile({ account, contract }) {
  const [customerInfo, setCustomerInfo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const getCustomer = async () => {
      const customerInfo = await contract.getCustomer(account);
      setCustomerInfo(customerInfo);
      console.log(customerInfo.customer_address);
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
          {/* <p>Points : {customerInfo.overAllPoints}</p> */}
        </>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default Profile;
