import React, { useState } from "react";
import { Button } from "reactstrap";

let name = ["urvish", "jayom", "dwanil", "pravin"];
let color = ["red", "green", "yellow", "black"];

export default function StatePro1() {
  let [index, setIndex] = useState(0);
  let [colorIndex, setColorIndex] = useState(0);

  const incIndex = () => {
    // if index < array.length then do otherwise not allow
    if (index < color?.length - 1) {
      setIndex(index + 1);
    } else {
      let x = confirm("finished...!");

      // confirm
      // ok => 0
      // cancle => continue
      setIndex(0);
    }
  };

  return (
    <div>
      <h1>
        {index}
        {name[index]}
      </h1>
      <Button color="danger" onClick={incIndex}>
        Chnage Name
      </Button>
      <hr />
      <div
        className="mb-2"
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: color[colorIndex],
        }}
      ></div>
      <Button onClick={() => setColorIndex(colorIndex + 1)} color="danger">
        Change color
      </Button>
    </div>
  );
}

let a = ["a", "b", "c", "d"];
let index = 0;

// "a" =>a[0]=> a[index] =>0
// "c" =>a[2]=> a[index] =>2
