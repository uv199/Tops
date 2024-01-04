import React, { useState } from "react";
import FunProps from "./functional/FunProps";
import ClassProps from "./class/ClassProps";
import PropsPro1 from "./PropsPro1";
import { Button } from "reactstrap";

// props are immutable/readonly - means can't chnage value of props
// we can only pass data parant to chinld by using props
// class -> this.props.("keyname")
// props's data type is object

export default function Props() {
  let [index, setIndex] = useState(0);
  let color = ["red", "yellow", "green", "black"];
  let studentName = "jayom";

  return (
    <div>
      {/*<FunProps name={"urvish"} age={23} />
      <FunProps name={studentName} age={33} />
      <FunProps name={"dwanil"} /> */}

      {/* <ClassProps name={"urvish"} />
      <ClassProps name={studentName} />*/}

      <PropsPro1 color={color[index]} />
      <Button onClick={() => setIndex(index + 1)}>Change Color</Button>
    </div>
  );
}
