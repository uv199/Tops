// package
import { useState } from "react";

// file
import "./App.css";
import ClassCom from "./components/ClassCom";
import ClassCom2 from "./components/ClassCom2";
import FunCom from "./components/FunCom";
import FunCom2 from "./components/FunCom2";
import UseStateFun from "./uses_state/UseStateFun";
import UseStateClass from "./uses_state/UseStateClass";
import StateProject1 from "./uses_state/StateProject1";
import StateProject2 from "./uses_state/StateProject2";
import ConditionalRen from "./ConditionalRendaring_Fragment/ConditionalRen";
import LifeCycleMethod from "./life_cycle_method/LifeCycleMethod";
import ConRenProject1 from "./ConditionalRendaring_Fragment/ConRenProject1";
import PropsFun from "./Props/PropsFun";
import PropsClass from "./Props/PropsClass";
import PropsProject1 from "./Props/PropsProject1";
import FragmentCom from "./ConditionalRendaring_Fragment/FragmentCom";

function App() {
  const [isPass, setIsPass] = useState("pass");
  function chnageInput(params) {
    setIsPass("email");
  }
  return (
    <div className="container">
      {/* ----------------------------component--------------------------  */}
      {/* <ClassCom />
      <ClassCom2 />
      <FunCom />
      <FunCom2 /> */}

      {/* ----------------------------use-state--------------------------  */}
      {/* <UseStateFun /> */}
      {/* <UseStateClass /> */}
      {/* <StateProject1 /> */}
      {/* <StateProject2 /> */}

      {/* ----------------------------conditional rendaring--------------------------  */}
      {/* <ConditionalRen  /> */}
      {/* <ConRenProject1 /> */}

      {/* ----------------------------Life Cycle Method--------------------------  */}
      {/* <LifeCycleMethod /> */}

      {/* ----------------------------Props--------------------------  */}
      {/* <PropsFun name={"urvish"} age={20} /> */}
      {/* <PropsFun name={"tejash"} age={10} />
      <PropsFun data={{ name: "test", age: 30 }} />
      <PropsFun arr={[1, 2, 3, 4]} /> */}
      {/* <PropsClass name={"urvish"} /> */}
      <PropsProject1 inputType={isPass} />
      <button onClick={() => chnageInput()}>chnage input</button>

      {/* ----------------------------Fragment--------------------------  */}
      {/* <FragmentCom /> */}
    </div>
  );
}

export default App;
