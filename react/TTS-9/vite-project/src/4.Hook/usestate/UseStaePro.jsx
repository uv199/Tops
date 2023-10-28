import React, { useState } from "react";
import { Button } from "reactstrap";

export default function UseStaePro() {
  let [color, setColor] = useState("red");
  let [textColor, setTextColor] = useState("black");

  const chnageColorHandler = () => {
    console.log("---====>");
    setColor("lightCoral");
    setTextColor("white");
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <div
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: color,
          color: textColor,
        }}
        className="m-5"
      >
        <h1>Hells World</h1>
      </div>
      <Button onClick={() => chnageColorHandler()} color="danger">
        Chnage color
      </Button>
    </div>
  );
}
