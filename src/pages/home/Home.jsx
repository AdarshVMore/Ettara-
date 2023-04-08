import React, { useEffect, useRef } from "react";
import "./home.css";
import Nav from "./components/nav/Nav";
import Sidebar from "./components/sidebar/Sidebar";
import MainContainer from "./components/maincontainer/MainContainer";

function Home({ account, contract, provider }) {
  let isCustomer = false;

  const funkyNameRef = useRef(null);

  const addCustomer = async () => {
    await contract.addCustomer(funkyNameRef.current.value);
  };
  useEffect(
    (e) => {
      const checkCustomer = async () => {
        const customers = await contract.getCustomerList();
        console.log(customers);

        for (let i = 0; i < customers.length; i++) {
          if (customers[i] == account) {
            isCustomer = true;
          }
        }
      };
      checkCustomer();
    },
    [account, contract]
  );

  return (
    <div className="home">
      <div className="nav">
        <Sidebar />
      </div>
      <div className="sidebar">
        <Nav account={account} contract={contract} />
        {!isCustomer ? (
          <>
            <input
              type="text"
              placeholder="Give urself a funky name"
              ref={funkyNameRef}
            />
            <button onClick={addCustomer}>Check Leader Board</button>
          </>
        ) : (
          ""
        )}

        <MainContainer
          account={account}
          contract={contract}
          provider={provider}
        />
      </div>
    </div>
  );
}

export default Home;
