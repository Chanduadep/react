
import React, { useState } from "react";
import "./Dynamicstyling.css";
const DynamicStyling = () => {
  const [isButtonActive, setIsButtonActive] = useState(true);
  function changeState() {
    setIsButtonActive(!isButtonActive);
  }
  return (
    <div>
      <h1>DynamicStyling</h1>
      <button
        onClick={changeState}
        className={isButtonActive ? "active" : "notActive"}
      >
        {isButtonActive ? "Active" : "Not Active"}
      </button>
    </div>
  );
};

export default DynamicStyling;
