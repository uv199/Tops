// pakages
import React from "react";
// "test1"=> t-e+s-t+1
//files
import "./App.css";
import Body from "./class comp/Body";
import ClassCom from "./class comp/ClassCom";
import FunCom from "./functionalComponent/FunCom";
import UserSateClass from "./useState/class/UserSateClass";
import UserSateFun from "./useState/function/UseSateFun";
import UseSateFun from "./useState/function/UseSateFun";
import StateProject from "./useState/StateProject";
import Project2 from "./useState/Project2";
import FunProps from "./props/FunProps";
import FunPropsChnage from "./props/FunPropsChnage";

function App() {
  return (
    <div>
      {/*------------------ component ------------------ */}
      {/* <Body />
      <ClassCom />
      <FunCom /> */}

      {/*------------------ state------------------ */}
      {/* <UserSateClass /> */}
      {/* <UserSateFun /> */}
      {/* <StateProject /> */}
      {/* <Project2 /> */}

      {/*------------------Props------------------ */}
      {/* <FunProps name={"urvish"} age={20} /> */}
      <FunProps name={"urvish"} />
      {/* <FunProps obj={{ x: 10, y: 10 }} /> */}
      <FunPropsChnage name={"urvish"} />
    </div>
  );
}

export default App;
