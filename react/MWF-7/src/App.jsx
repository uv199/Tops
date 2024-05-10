import React from "react";
import FunCome from "./2.componenet/functional/FunCome";
import ClassCom from "./2.componenet/class/ClassCom";
import Home from "./3.style/Home";
import FunComState from "./4.state/FunComState";
import ClassComState from "./4.state/ClassComState";

export default function App() {
  return (
    <div className="flex items-center justify-center">
      {/* --------------COMPONENET------------ */}
      {/* <FunCome /> */}
      {/* <ClassCom /> */}

      {/* -------------STYLE------------- */}
      {/* <Home /> */}

      {/* -------------STATE------------- */}
      <FunComState />
      {/* <ClassComState /> */}
    </div>
  );
}
