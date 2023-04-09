import React, { useEffect, useRef } from "react";
import "./home.css";
import Nav from "./components/nav/Nav";
import Sidebar from "./components/sidebar/Sidebar";
import MainContainer from "./components/maincontainer/MainContainer";
import { useState } from "react";

function Home({ account, contract, provider }) {
  const [isCustomer, setIsCustomer] = useState(false);
  const [Owner, setOwner] = useState(false);

  const funkyNameRef = useRef(null);

  const addCustomer = async () => {
    await contract.addCustomer(funkyNameRef.current.value);
    alert("congrats you now are a customer");
    window.location.href = "home";
  };
  useEffect(
    (e) => {
      const checkCustomer = async () => {
        const customers = await contract.getAllCustomers();

        for (let i = 0; i < customers.length; i++) {
          if (customers[i] == account) {
            setIsCustomer(true);
          }
        }
      };

      const ownerCheck = async () => {
        let isOwner = await contract.isOwner();
        setOwner(isOwner);
      };

      ownerCheck();
      checkCustomer();
    },
    [account, contract]
  );

  return (
    <div className="home">
      {!isCustomer ? (
        <div className="intro-form">
          <p>Seems like you are new here! let Anna know your name</p>
          <input
            type="text"
            placeholder="Give urself a funky name"
            ref={funkyNameRef}
          />
          <button onClick={addCustomer}>Next</button>
        </div>
      ) : (
        <>
          <div>
            <Sidebar />
          </div>
          <div>
            <Nav account={account} contract={contract} Owner={Owner} />

            <MainContainer
              account={account}
              contract={contract}
              Owner={Owner}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
