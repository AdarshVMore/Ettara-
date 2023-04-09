import React, { useRef } from "react";
import "./givepoints.css";

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
    <div className="give_points">
      <div className="addressOfCustomer">
        <input type="text" ref={addressRef} placeholder="Address" />
      </div>
      <div className="items">
        <input type="text" ref={itemRef} placeholder="What did he buy?" />
      </div>
      <div className="bill">
        <input type="text" ref={billRef} placeholder="how much did he spent?" />
      </div>
      <button onClick={givePoints}> Give Points</button>
    </div>
  );
}

export default Givepoints;
