import React from "react";
import ComB from "./ComB";

export default function ComA({ name }) {
  return (
    <h1>
      <ComB name2={name} />
    </h1>
  );
}
