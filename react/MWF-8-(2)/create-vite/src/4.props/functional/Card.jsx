import React from "react";
import { Button } from "reactstrap";

let data = {
  a: 20,
  b: 30,
};

let { a, b } = data;

export default function Card({ name, age }) {
  const chnageName = () => {
    console.log("-----------  chnageName----------->");
    name = "Hiii how are you ?";
  };

  return (
    <div>
      <h1>Hello world</h1>
      <h3>
        <b>
          {name}--{age}
        </b>
      </h3>
      <Button onClick={() => chnageName()}>Change name</Button>
    </div>
  );
}

/*

export default function Card(props) {
  console.log("-----------  props----------->", props);
  const chnageName = () => {
    props.name = "Hiii how are you ?";
  };
  return (
    <div>
      <h1>Hello world</h1>
      <h3>
        <b>
          {props?.name}--{props?.age}
        </b>
      </h3>
      <Button onClick={() => chnageName()}>Change name</Button>
    </div>
  );
}
*/
