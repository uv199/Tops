import React from "react";
import Card from "./Card";
import img from "../../../public/16693733985639.jpeg";

export default function FunProps(user) {
  console.log("-----------  user----------->", user);

  return (
    <div>
      FunProps
      <Card name={"Urvish"} age={23} img={"../../../public/16693733985639.jpeg"} />
      <Card name={"Jemish"} age={33} />
      {/* <Card name={"Jay"} /> */}
      {/* <Card name={user?.name} /> */}
    </div>
  );
}
