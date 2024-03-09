import React, { useState } from "react";
import { Button } from "reactstrap";

export default function StatePro1() {
  let [index, setIndex] = useState(0);

  const colorArr = ["red", "black", "green", "yellow", "blue", "brown"];

  function changeIndex(params) {
    if (index < colorArr.length - 1) {
      console.log("---->if");
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return (
    <>
      <h1>StatePro1 - {index}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "100px",
          backgroundColor: colorArr[index],
        }}
      >
        <b>BOX</b>
      </div>
      <Button onClick={() => changeIndex()} color="danger" className="mt-4">
        Chnage Color
      </Button>
    </>
  );
}
