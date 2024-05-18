import React from "react";
import Child1 from "./Child1";

export default function Parent() {
  let greet = "hello user good morning";
  return (
    <div>
      <Child1 greet={greet} />
    </div>
  );
}
