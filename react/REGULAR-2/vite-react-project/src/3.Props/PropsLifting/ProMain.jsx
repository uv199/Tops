import React, { useState } from "react";
import ProCom2 from "./ProCom2";
import ProCom1 from "./ProCom1";

export default function ProMain() {
  const [name, setname] = useState("urvish");
  const [age, setage] = useState(0);

  return (
    <>
      <h1>{age}</h1>
      <ProCom1 data={name} />
      <ProCom2 setage={setage} />
    </>
  );
}
