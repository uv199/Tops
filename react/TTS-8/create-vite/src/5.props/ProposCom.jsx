import React, { useState } from "react";
import FunPro from "./FunPro";
import ClassPro from "./ClassPro";
import PropsDestructuring from "./propsDestructuring";

export default function ProposCom() {
  const [name, setName] = useState("URVISH");
  return (
    <div>
      <FunPro name={name} age={20} />
      {/* <FunPro name={"Nayan"} obj={{ a: 200, b: 30 }} /> */}
      {/* <ClassPro name={"urvish"} /> */}
      {/* <PropsDestructuring name={"test"} age={20} /> */}
    </div>
  );
}
