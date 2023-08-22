import React from "react";
import "./index.css";

export default function ReactStarpCom() {
  const h1Style = {
    height: "200px",
    width: "200px",
    backgroundColor: "red",
  };
  return (
    <div>
      <h1 className="bold">Urvish</h1>
      <h1
        className="fw-bold bold"
        style={{ color: "red", backgroundColor: "lightcoral" }}
      >
        Urvish
      </h1>
      <h1 style={h1Style}>Urvish</h1>
      <h1 className="text-danger">ReactStarpCom</h1>;
    </div>
  );
}
