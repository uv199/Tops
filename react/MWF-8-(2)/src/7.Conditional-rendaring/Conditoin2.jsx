import React, { useState } from "react";

import FunctionalCom from "../2.Componenets/functional/FunctionalCom";
import ClassCom from "../2.Componenets/class/ClassCom";
import { Button } from "reactstrap";
export default function Conditoin2() {
  let [component, setComponent] = useState("function");

  return (
    <div className="m-4">
      <Button onClick={() => setComponent("function")}>Function</Button>
      <Button onClick={() => setComponent("class")} className="me-3">
        Class
      </Button>
      {component === "class" ? <ClassCom /> : <FunctionalCom />}
    </div>
  );
}
