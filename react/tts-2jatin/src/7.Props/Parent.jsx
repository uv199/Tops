import React from "react";
import Child from "./Child";

export default function Parent() {
  let name = "urvish";

  let age = 23;
  return (
    <div>
      <Child name={name} AGE={age} />
    </div>
  );
}
