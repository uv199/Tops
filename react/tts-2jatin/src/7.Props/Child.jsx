import { Button } from "@material-tailwind/react";
import React from "react";

export default function Child(props) {
  console.log("-----------  props----------->", props);

  const chnageHandler = () => {
    props.name = "test";
  };
  return (
    <div>
      <h1>Child</h1>
      <h1>My name is {props.name}</h1>
      <h1>My age is {props.AGE}</h1>
      <Button onClick={() => chnageHandler()}>Chnage name</Button>
    </div>
  );
}


// map key data show api
// use Reducer
