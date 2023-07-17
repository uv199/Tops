import React, { useState } from "react";
import "./project.css";

export default function StateProject2() {
  let [index, setIndex] = useState(0);
  let colours = ["red", "blue", "yellow", "green"];
  function chnageColor() {
    if (index < colours.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log("🚀 ~ file: StateProject2.jsx:9 ~ chnageColor ~ index:", index);
  }
  return (
    <div>
      <div className="div1">
        <h1 style={{ color: colours[index] }}>Box</h1>
      </div>
      <button onClick={() => chnageColor()}>Chnage color</button>
    </div>
  );
}
