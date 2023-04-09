import React, { useState, useRef } from "react";
import { NFTStorage, Blob } from "nft.storage";
import "./nftupload.css";

function Nftupload({ contract }) {
  const NFT_STORAGE_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY3ODMyQTkyZjgzMzYwRDYyNmQwNkU2MjAzOEM4NDkyNWEyYUIwRDciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MTAxMDg2ODcyOCwibmFtZSI6ImxveWFsdHkgcHJvZ3JhbSJ9.GHLHRjh_6aFwb2ueYTU3eEYpCXAiXBxF4pvKJJmB_0Y";
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
  const [selectedFile, setSelectedFile] = useState(null);
  const [cid, nftCID] = useState(null);
  const addressRef = useRef(null);

  let reportCid;

  const getFile = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const someData = new Blob([selectedFile]);
    reportCid = await client.storeBlob(someData);
    console.log(reportCid);
    nftCID(reportCid.toString());
  };

  const sendNFTs = async (e) => {
    await contract.sendNft(addressRef.current.value, cid);
    console.log("uploaded");
  };

  return (
    <div>
      <div className="tier">
        <h3>Send NFT to the Customer in One click</h3>
        <input
          type="text"
          placeholder="Customer Address"
          className="cst_Addr"
          ref={addressRef}
        />
        <input type="file" className="file_input" onChange={getFile} />
        <button onClick={sendNFTs}>upload</button>
      </div>
    </div>
  );
}

export default Nftupload;
