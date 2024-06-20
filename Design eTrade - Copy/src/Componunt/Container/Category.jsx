import React from "react";
import iphone from "../Container/iphone.jpeg";

export default function Category() {
  return (
    <div>
      <div
        style={{
          height: "100px",
          width: "80px",
          border: "1px solid black",
          boxShadow: " 5px 5px 10px 10px #888888",
          marginLeft: "40px",
          marginTop: "35px",
          borderRadius: "10px",
        }}
      >
        <img
          src={iphone}
          style={{ height: "100px", width: "80px", borderRadius: "20px" }}
        />
      </div>
    </div>
  );
}
