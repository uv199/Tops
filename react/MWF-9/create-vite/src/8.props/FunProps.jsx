import React, { useState } from "react";
import { Button } from "reactstrap";

export default function FunProps(props) {
  console.log("props", props);
  let [name, setName] = useState(props.name);

  function changePro(params) {
    setName("test");
  }

  return (
    <>
      <h1>My name is {props.name}</h1>
      <h1>My age is {props.age}</h1>
      <h1>My name State {name}</h1>
      <Button color="danger" onClick={() => changePro()}>
        Change Name
      </Button>
    </>
  );
}
