import React from "react";
import FunChild from "./FunChild";

// props are read only/inmutable

export default function ParentCom() {
  let name = "Urvish patel";
  return (
    <div>
      <FunChild NAME={name}/>
    </div>
  );
}
