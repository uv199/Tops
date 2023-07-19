import React from "react";

export default function Card(props) {
  return (
    <>
      <div
        style={{
          color: "white",
          backgroundColor: "lightcoral",
        }}
      >
        <h1>Name : {props.name}</h1>
        <p>DEscription: {props.dec}</p>
      </div>
    </>
  );
}
