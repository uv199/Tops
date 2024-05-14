import React from "react";
import FunCome from "./2.componenet/functional/FunCome";
import ClassCom from "./2.componenet/class/ClassCom";
import Home from "./3.style/Home";
import FunComState from "./4.state/FunComState";
import ClassComState from "./4.state/ClassComState";
import MapKeyCom from "./5.MapKey-Fragment/MapKeyCom";
import HomePage from "./3.style/Project/HomePage";

export default function App() {
  return (
    <div className="flex items-center justify-center">
      {/* --------------COMPONENET------------ */}
      {/* <FunCome /> */}
      {/* <ClassCom /> */}

      {/* -------------STYLE------------- */}
      {/* <Home /> */}

      {/* -------------STATE------------- */}
      {/* <FunComState /> */}
      {/* <ClassComState /> */}
      <HomePage />

      {/* -------------MAPKEY------------- */}
      {/* <MapKeyCom /> */}
    </div>
  );
}
