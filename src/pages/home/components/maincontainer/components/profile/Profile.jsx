import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./profile.css";
import axios from "axios";

function Profile({ account, contract }) {
  const [nftMetadata, setNftMetadata] = useState(null);

  const [customerInfo, setCustomerInfo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [overAllPoints, setOverAllPoints] = useState("");
  useEffect(() => {
    const getCustomer = async () => {
      // await contract.giveTier(account);
      const customerInfo = await contract.getCustomer(account);
      console.log(customerInfo);
      setCustomerInfo(customerInfo);
      const bigNumber = ethers.BigNumber.from(customerInfo.overAllPoints);
      const string = bigNumber.toString();
      setOverAllPoints(string);
      console.log(customerInfo.NFTs);

      async function fetchNftMetadata() {
        try {
          const response = await axios.get(
            `https://api.nft.storage/metadata/${customerInfo.NFTs[0]}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY3ODMyQTkyZjgzMzYwRDYyNmQwNkU2MjAzOEM4NDkyNWEyYUIwRDciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MTAxMDg2ODcyOCwibmFtZSI6ImxveWFsdHkgcHJvZ3JhbSJ9.GHLHRjh_6aFwb2ueYTU3eEYpCXAiXBxF4pvKJJmB_0Y}`, // Your NFT.storage API key
              },
            }
          );
          setNftMetadata(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      fetchNftMetadata();

      setIsLoaded(true);
    };

    getCustomer();
  }, [account, contract]);

  return (
    <div className="profile">
      {isLoaded ? (
        <div className="innerProfile">
          <p>Username : {customerInfo.funkyName}</p>
          <p>Tier : {customerInfo.tier}</p>
          <p>Points : {overAllPoints}</p>
          <p>
            NFTs :{" "}
            <a
              href={`https://api.nft.storage/metadata/${customerInfo.NFTs[0]}`}
            >
              x
            </a>
            {/* <img src={nftMetadata.image} /> */}
          </p>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default Profile;
