import React from "react";
import ComB2 from "./ComB2";

export default function ComB1(props) {
  console.log("----comb1----", props.name);
  return (
    <>
      {/* <h1>ComB1</h1> */}
      <ComB2 name={props.name} />
    </>
  );
}
