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
      <Project2 />
    </div>
  );
}

export default App;
