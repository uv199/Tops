import React, { useState } from "react";
import { Button } from "reactstrap";
let colors = ["red", "yellow", "black", "green", "blue", "gray"];
export default function ColorCom2() {
  let [index, setIndex] = useState(0);

  function changeColour(params) {
    if (index >= colors.length - 1) {
      let con = confirm(
        "colour array is finished..! do you want to continue ?  "
      );
      if (con) {
        setIndex(++index);
      } else {
        setIndex(0);
      }
    } else {
      setIndex(++index);
    }
  }
  return (
    <>
      <h1>Chnage colour</h1>
      <h1>{index}</h1>
      <div
        className="mb-3"
        style={{
          backgroundColor: colors[index],
          width: "100px",
          height: "100px",
        }}
      ></div>
      <Button onClick={() => changeColour()} color="danger" outline>
        Change Colour
      </Button>
    </>
  );
}
