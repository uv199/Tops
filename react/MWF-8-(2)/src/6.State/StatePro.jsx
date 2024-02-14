import React, { useState } from "react";
import { Button } from "reactstrap";

let name = ["urvish", "dhaval", "divyesh", "sona"];

// length = 3

// let color=[]
export default function StatePro() {
  let [index, setIndex] = useState(0);
  let [isContinue, setIsContinue] = useState(false);

  const IncIndex = () => {
    if (index < name.length - 1 || isContinue) {
      setIndex(index + 1);
    } else {
      let permission = confirm("you want to repeate");
      if (permission) {
        setIndex(0);
      } else {
        setIndex(index + 1);
        setIsContinue(true);
      }
    }
  };

  return (
    <>
      <h2>index = {index}</h2>
      <h1>{name[index]}</h1>
      <Button color="danger" onClick={() => IncIndex()}>
        {/* <Button color="danger" onClick={IncIndex}> */}
        Chnage Name
      </Button>
      <hr />

      <div
        style={{ height: "100px", width: "100px", backgroundColor: "red" }}
      ></div>
      <Button color="danger">Change Color</Button>
    </>
  );
}
