import React from "react";
import Component1 from "./DisplayCom";
import Component2 from "./IncrementCom";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Component1 />
      <Component2 />
    </div>
  );
}
