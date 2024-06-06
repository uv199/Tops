import React from "react";
import ComA3 from "./ComA3";

export default function ComA2({ name2 }) {
  console.log("-----------  name2----------->", name2);
  return (
    <div>
      <ComA3 name={name2} />
    </div>
  );
}
