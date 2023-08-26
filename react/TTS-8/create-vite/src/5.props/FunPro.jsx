import React from "react";

export default function FunPro(props) {
  console.log("props====>", props);
  function fun(params) {
    props.name = "test"; // can
  }

  return (
    <div>
      FunPro
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props?.obj?.a}</h1>
      <button onClick={() => fun()}>click me</button>
    </div>
  );
}

// props={
//   nmae:"te",
//   age:20,
// }

// props.name
// props.age
// props.obj.a
