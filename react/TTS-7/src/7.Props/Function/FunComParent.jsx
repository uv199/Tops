import React from "react";
import FunComChild from "./FunComChild";

export default function FunComParent() {
  let p1 = "Urvish";
  let p2 = "Meet";
  return (
    <div>
      <h1>Hello</h1>
      <FunComChild person={p1} age={23} />
      <FunComChild person={p2} />
     
    </div>
  );
}
