import React from "react";
import iconComplete from "../images/icon-complete.svg";

function Thanks(props) {
  return (
    <div className="msg">
      <img src={iconComplete} alt="complete" />
      <h2>THANK YOU</h2>
      <span>We've added your card details</span>
      <button onClick={props.handleButton}>Continue</button>
    </div>
  );
}

export default Thanks;
