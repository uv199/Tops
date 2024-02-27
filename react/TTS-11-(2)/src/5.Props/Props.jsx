import React, { useState } from "react";
import FunProps from "./functional/FunProps";
import ClassProps from "./class/ClassProps";
import { Button } from "reactstrap";
import PropsPro2 from "./PropsPro2";
import PropsPro1 from "./PropsPro1";

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

      {/* // chnage props value */}
      <PropsPro2 color={"green"} />
    </div>
  );
}

let arr = [1, 2, 3, 4];

arr.filter((e) => e !== 3);

let arrObj = [{ no: 1, no2: 90 }, { no: 2 }, { no: 3 }, { no: 4 }];

let x = 3;
arrObj.filter((e) => x === e.no2);
[{ no: 1, no2: 90 }, { no: 2 }, { no: 4 }];
