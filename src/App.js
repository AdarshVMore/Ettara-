import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Loyalty from "./abis/Loyalty.json";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [provider, setProvider] = useState("");
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0xA1FA9BBd4feF0578CCB83184089B772EBb5D620A";

        const contract = new ethers.Contract(
          contractAddress,
          Loyalty.abi,
          signer
        );

        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="home/*"
            element={
              <Home account={account} contract={contract} provider={provider} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
