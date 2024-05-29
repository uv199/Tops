import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Component1 />
      <Component2 />
    </div>
  );
}
