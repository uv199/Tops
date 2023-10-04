import React from "react";
import { Button } from "reactstrap";

export default function Child(props) {
  console.log("props", props);
  function moveData(params) {
    let name = "urvish";
    props.setName(name);
  }
  return (
    <>
      <h1>Child</h1>
      <Button onClick={() => moveData()}>MoveData</Button>
    </>
  );
}
