import React, { useContext } from "react";
import { AgeContext } from "./UseContaxt";

// display input
export default function ComB1() {
  const data = useContext(AgeContext);
  return (
    <div>
      <hr />
      <h1>ComB1</h1>
      <h3>Age is {data.age}</h3>
    </div>
  );
}
