import React, { useState } from "react";
import { Button } from "reactstrap";

export default function ColorCom() {
  let [isBlack, setIsBlack] = useState(false);
  let [colour, setColour] = useState("red");

  function changeColour() {
    let x = "red";
    let y = "black";
    let col = isBlack ? x : y;
    setColour(col);
    setIsBlack(!isBlack);
    console.log("isBlack:", isBlack);
  }
  return (
    <>
      <h1>Chnage colour</h1>
      <div
        className="mb-3"
        style={{ backgroundColor: colour, width: "100px", height: "100px" }}
      ></div>
      <Button onClick={() => changeColour()} color="danger" outline>
        Change Colour
      </Button>
    </>
  );
}
