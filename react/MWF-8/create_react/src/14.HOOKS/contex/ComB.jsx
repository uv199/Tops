import React from "react";
import ComB2 from "./ComB2";

export default function ComB(props) {
  console.log("===b1====>", props.name);

  return (
    <>
      <h1>ComB</h1>
      <ComB2 name={props.name} />
    </>
  );
}
