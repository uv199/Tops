import React from "react";
import ComB2 from "./ComB2";

export default function ComB(props) {
  console.log("-----------  props----------->", props);
  return (
    <div>
      <ComB2 name={props.name} />
    </div>
  );
}
