import React from "react";
import Card from "./Card";

export default function FunProps(user) {
  console.log("-----------  user----------->", user);
  
  return (
    <div>
      FunProps
      <Card name={"Urvish"} age={23} />
      <Card name={"Jemish"} age={33} />
      {/* <Card name={"Jay"} /> */}
      {/* <Card name={user?.name} /> */}
    </div>
  );
}
