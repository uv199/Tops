import React from "react";
import Component1 from "./DisplayCom";
import Component2 from "./IncrementCom";
import AmountCom from "./AmountCom";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Component1 />
      <Component2 />
      <hr />
      <AmountCom />
    </div>
  );
}
