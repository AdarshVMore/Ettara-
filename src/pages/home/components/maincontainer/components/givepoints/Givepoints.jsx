import React, { useRef } from "react";

function Givepoints({ contract }) {
  const itemRef = useRef(null);
  const billRef = useRef(null);
  const addressRef = useRef(null);

  const givePoints = async () => {
    const points = await contract.earnPoints(
      addressRef.current.value,
      itemRef.current.value,
      billRef.current.value
    );
    console.log(points);
    console.log("done");
    alert("Points Given !!");
  };

  return (
    <div>
      <div className="addressOfCustomer">
        <p>Address Of Customer</p>
        <input type="text" ref={addressRef} />
      </div>
      <div className="items">
        <p>What did he buy :</p>
        <input type="text" ref={itemRef} />
      </div>
      <p>Bill (in INR)</p>
      <input type="text" ref={billRef} />
      <button onClick={givePoints}> Give Points</button>
    </div>
  );
}

export default Givepoints;
