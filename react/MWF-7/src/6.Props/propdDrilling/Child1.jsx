import React from "react";
import Child2 from "./Child2";

export default function Child1({ greet }) {
  return (
    <div>
      <Child2 greet2={greet} />
    </div>
  );
}
