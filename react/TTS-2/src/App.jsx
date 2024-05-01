import React from "react";
import FunctionalCom from "./1.componenet/FunctionalCom";
import HeaderCom from "./1.componenet/HeaderCom";
import FunctionalState from "./2.State/FunctionalState";
import Page from "./3.style/Page";
import FunProps from "./4.Props/FunProps";

export default function App() {
  return (
    <div>
      {/* <HeaderCom /> */}
      <div>
        {/* ---------------------COMPONENET------------------ */}
        {/* <FunctionalCom /> */}
        {/* <FunctionalState /> */}

        {/* ---------------------STYLE------------------ */}
        {/* <Page /> */}

        {/* ---------------------PROPS------------------ */}
        <FunProps />
      </div>
    </div>
  );
}
