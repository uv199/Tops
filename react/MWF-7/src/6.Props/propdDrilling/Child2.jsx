import React from "react";
import Child3 from "./Child3";

export default function Child2({ greet2 }) {
  return (
    <div>
      <Child3 greet={greet2} />
    </div>
  );
}
