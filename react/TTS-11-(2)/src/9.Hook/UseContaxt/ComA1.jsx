import React from "react";
import ComA2 from "./ComA2";

export default function ComA1({ name }) {
  console.log("-----------  name----------->", name);
  return (
    <div>
      <ComA2 name2={name} />
    </div>
  );
}
