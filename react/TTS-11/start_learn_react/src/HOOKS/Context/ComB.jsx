import React from "react";
import ComB1 from "./ComB1";

export default function ComB(props) {
  console.log("----comb----", props.name);

  return (
    <>
      {/* <h1>ComB</h1> */}
      <ComB1 name={props.name} />
    </>
  );
}
