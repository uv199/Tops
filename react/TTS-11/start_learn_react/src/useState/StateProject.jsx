import React, { useState } from "react";

export default function StateProject() {
  let [textColor, setTextColor] = useState("red");

  function changeColor() {
    setTextColor("green");
  }
  return (
    <div>
      <h1 style={{ color: textColor }}>My name is Urvish</h1>
      <button onClick={() => changeColor()}>change colour</button>
    </div>
  );
}
