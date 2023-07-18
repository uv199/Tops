import React from "react";

export default function FunProps(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{`${props.obj}`}</h1>
      {/* <h1>{props.age}</h1>
      <h1>{props?.obj?.x}</h1> */}
    </div>
  );
}

// obj = {
//   a:10
// }

// obj.a
// obj.b
// obj?.b?.c
