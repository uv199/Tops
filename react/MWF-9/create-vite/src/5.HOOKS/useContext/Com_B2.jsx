import React from "react";
import Com_B3 from "./Com_B3";

export default function Com_B2({ name2 }) {
  console.log("name--Com_B2", name2);

  return (
    <>
      <Com_B3 name3={name2} />
    </>
  );
}
