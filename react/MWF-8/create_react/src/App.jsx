import React from "react";
import "./App.css";
import FunState from "./user_state/FunState";
import ClassState from "./user_state/ClassState";
import StateProject1 from "./user_state/StateProject1";
import StateProject2 from "./user_state/StateProject2";
import FunProps from "./props/FunProps";
import ClassProps from "./props/ClassProps";
import ConditionalRendaring from "./conditionRend-Map/ConditionalRendaring";
import MapLoop from "./conditionRend-Map/MapLoop";

function App() {
  // return <h1>{5 + 10}</h1>;
  return (
    <div>
      {/* ------------------userState--------------------- */}
      {/* <FunState /> */}
      {/* <ClassState /> */}
      {/* <StateProject1 /> */}
      {/* <StateProject2 /> */}
      {/* ------------------Props--------------------- */}
      {/* <FunProps name={"urvish"} />
      <FunProps name={"tejash"} /> */}
      {/* <ClassProps name={"urvish"} />
      <ClassProps name={"Patel"} /> */}
      {/* ------------------Conditional render / Map --------------------- */}
      {/* <ConditionalRendaring /> */}
      <MapLoop />
    </div>
  );
}

export default App;
