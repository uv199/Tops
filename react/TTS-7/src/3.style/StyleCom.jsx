import React from "react";
import "./index.css";
export default function StyleCom() {
  let color = "black";
  return (
    <div>
      <div style={{ backgroundColor: "red", height: "100px" }}>Header</div>
      <div className="bodyDiv">Body</div>
      <div style={{ backgroundColor: color, height: "100px" }}>Footer</div>
    </div>
  );
}
