import React from "react";
import FunctionalCom from "./1.componenet/FunctionalCom";
import HeaderCom from "./1.componenet/HeaderCom";
import FunctionalState from "./2.State/FunctionalState";
import Page from "./3.style/Page";
import FunProps from "./4.Props/FunProps";
import MapKeyCom from "./5.MapKey/MapKeyCom";
import FragmentCom from "./5.MapKey/FragmentCom";
import InputCom from "./6.Input/InputCom";

export default function App() {
  return (
    <div className="d-flex justify-content-center">
      {/* <HeaderCom /> */}

      {/* ---------------------COMPONENET------------------ */}
      {/* <FunctionalCom /> */}
      {/* <FunctionalState /> */}

      {/* ---------------------STYLE------------------ */}
      {/* <Page /> */}

      {/* ---------------------PROPS------------------ */}
      {/* <FunProps /> */}

      {/* ---------------------MAP-KEY------------------ */}
      {/* <MapKeyCom /> */}

      {/* ---------------------FRAGMENT------------------ */}
      {/* <FragmentCom /> */}

      {/* ---------------------INPUT------------------ */}
      <InputCom />
    </div>
  );
}
