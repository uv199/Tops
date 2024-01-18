import React from "react";
import FunctionalCom2 from "./functional/FunctionalCom2";
import ClassCom from "./class/ClassCom";
import FunctionalCom from "./functional/FunctionalCom";

export default function Component() {
  return (
    <div>
      <FunctionalCom2 />
      <ClassCom />
      <FunctionalCom />
    </div>
  );
}
