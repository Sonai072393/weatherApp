import React from "react";

import "./Card.css";
const Card = (props) => {
  return (
    <div className="cardContainer" style={props.style}>
      <div className="cardHeader">
        <h1>{props.cardTitle}</h1>
        <span
          className="subTitleCard"
          style={{marginTop:-10, fontSize: 14, alignItems: "center" }}
        >
          {props.subTitle}
          
        </span>
      </div>
      <div>
        <div className="cardBody">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
