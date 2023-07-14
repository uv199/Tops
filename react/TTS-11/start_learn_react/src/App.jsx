// pakages
import React from "react";

//files
import "./App.css";
import Body from "./class comp/Body";
import ClassCom from "./class comp/ClassCom";
import FunCom from "./functionalComponent/FunCom";
import UserSateClass from "./useState/class/UserSateClass";
import UserSateFun from "./useState/function/UserSateFun";

function App() {
  return (
    <div>
      {/* <Body />
      <ClassCom />
      <FunCom /> */}
      <UserSateClass />
      <UserSateFun />
    </div>
  );
}

export default App;
