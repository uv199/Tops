import React, { useState } from "react";
import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="card m-3">
        <img className="card_img" src={props?.cardData?.img} alt="image" />
        <div className="crad_con">
          <h3>Product Name : {props?.cardData?.productName}</h3>
          <h3>Price: {props?.cardData?.price}</h3>
          <h3>Decription : {props?.cardData?.description}</h3>
        </div>
      </div>
    </>
  );
}

/*

// props destructures

// let props = { cardData: { ...e } };
// let { cardData } = props;

export default function Card({ cardData }) {
  return (
    <>
      <div className="card">
        <img className="card_img" src={cardData?.img} alt="image" />
        <div className="crad_con">
          <h3>Product Name : {cardData?.productName}</h3>
          <h3>Price: {cardData?.price}</h3>
          <h3>Decription : {cardData?.description}</h3>
        </div>
      </div>
    </>
  );
}



*/
