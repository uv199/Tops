import React, { useState } from "react";
import { Button } from "reactstrap";

export default function PropsChanges1(props) {
  let [name, setstate] = useState(props.name);
  let [isProps, setIsProps] = useState(false);

  const changeName = () => {
    setstate(isProps ? props.name : "USER");
    setIsProps(!isProps);
  };

  console.log("isProps", isProps);
  return (
    <>
      <h1>PropsChange {name}</h1>
      <Button color="danger" size="lg" onClick={() => changeName()}>
        change name
      </Button>
      <hr />
    </>
  );
}
