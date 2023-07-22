import React from "react";

export default function PropsFun(props) {
  {
    console.log("------>", props);
    // props.name = "test";
  }
  return (
    <div>
      <h1>name :{props.name}</h1>
      <h1>age: {props.age}</h1>
      <h1>{props?.data?.name}</h1>
      <h1>{props?.arr?.[0]}</h1>
      <h1>{`${props?.arr}`}</h1>
    </div>
  );
}
