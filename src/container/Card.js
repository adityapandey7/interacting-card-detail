import React from "react";
import logo from "../images/card-logo.svg";

function Card(props) {
  return (
    <div className="card-design">
      <div className="card-front-detail">
        <img src={logo} alt="card-logo" className="card-logo" />
        <span className="card-front-number">
          {props.number || "0000 0000 0000 0000"}
        </span>
        <div className="name-date">
          <span className="card-front-name">
            {props.name || "Jane Appleseed"}
          </span>
          <span className="card-front-date">
            {props.mm || "00"}/{props.yy || "00"}
          </span>
        </div>
      </div>
      <div className="card-back-detail">
        <span className="card-back-cvc">{props.cvc || "000"}</span>
      </div>
    </div>
  );
}

export default Card;
