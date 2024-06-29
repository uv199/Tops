import React from "react";
import ComA2 from "./ComA2";

export default function ComA1({ name1 }) {
  console.log("-----------  name----------->", name1);
  return (
    <div>
      <ComA2 name={name1} />
    </div>
  );
}
