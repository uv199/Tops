import React, { useState } from "react";
import { Button } from "reactstrap";

let name = ["urvish", "dhaval", "divyesh", "sona"];
// let color=[]
export default function StatePro() {
  let [index, setIndex] = useState(0);

  const IncIndex = () => {
    if (index < name.length - 1) {
      setIndex(index + 1);
    } else {
      let value = confirm("you want to repeate");
      console.log("-----------  value----------->", value);
      setIndex(0);
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
