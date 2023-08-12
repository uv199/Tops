import React from "react";
import ComB2 from "./ComB2";

export default function ComB(props) {
  return (
    <>
      <h1>Com-B</h1>
      <ComB2 value={props.value} />
    </>
  );
}
