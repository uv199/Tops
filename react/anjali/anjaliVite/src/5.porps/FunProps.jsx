import React from "react";
import { Button } from "reactstrap";

// props are read only
// we can't chnage value of props
export default function FunProps(props) {
  console.log("-----------  props----------->", props);

  const chnageAge = () => {
    props.age = 40;
  };

  return (
    <div>
      <h1>My name is {props.name}</h1>
      <h3>my age is {props.age}</h3>
      <Button onClick={chnageAge}>Chnage age</Button>
    </div>
  );
}

export const sum = () => {
  console.log("-----------  sum----------->");
};

export const sub = () => {
  console.log("-----------  sub----------->");
};
