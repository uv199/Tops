import React from "react";
import ComB3 from "./ComB3";

export default function ComB2(props) {
  console.log("===b2====>", props.name);

  return (
    <>
      <h1>ComB2</h1>
      <ComB3 name={props.name} />
    </>
  );
}
