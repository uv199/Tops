import React from "react";
import Com_B2 from "./Com_B2";

export default function Com_B({ name }) {
  console.log("name--Com_B", name);
  return (
    <>
      <Com_B2 name2={name} />
    </>
  );
}
