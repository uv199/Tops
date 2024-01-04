import React from "react";
import ClassState from "./class/ClassState";
import StatePro1 from "./StatePro1";
import Funstate from "./functional/Funstate";

export default function State() {
  return (
    <div>
      {/* <ClassState/> */}
      <Funstate />
      <StatePro1 />
    </div>
  );
}
