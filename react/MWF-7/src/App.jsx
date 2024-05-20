import React from "react";
import FunCome from "./2.componenet/functional/FunCome";
import ClassCom from "./2.componenet/class/ClassCom";
import Home from "./3.style/Home";
import FunComState from "./4.state/FunComState";
import ClassComState from "./4.state/ClassComState";
import MapKeyCom from "./5.MapKey-Fragment/MapKeyCom";
import HomePage from "./3.style/Project/HomePage";
import PropsFunCom from "./6.Props/PropsFunCom";
import Parent from "./6.Props/propdDrilling/Parent";
import HomeAssignMent1 from "./000.task/Assignment1/Home";

export default function App() {
  return (
    <div className="flex items-center justify-center">
      {/* --------------TASK------------ */}
      <HomeAssignMent1 />

      {/* --------------COMPONENET------------ */}
      {/* <FunCome /> */}
      {/* <ClassCom /> */}

      {/* -------------STYLE------------- */}
      {/* <Home /> */}

      {/* -------------STATE------------- */}
      {/* <FunComState /> */}
      {/* <ClassComState /> */}
      {/* <HomePage /> */}

      {/* -------------MAPKEY------------- */}
      {/* <MapKeyCom /> */}

      {/* -------------PROPS------------- */}
      {/* <PropsFunCom /> */}
      {/* <Parent /> */}
    </div>
  );
}
