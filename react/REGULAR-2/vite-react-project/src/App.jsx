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
import ConditionalRen from "./ConditionalRendaring_map/ConditionalRen";
import LifeCycleMethod from "./life_cycle_method/LifeCycleMethod";

function App() {
  const [count, setCount] = useState(0);

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
      {/* <ConditionalRen /> */}

      {/* ----------------------------Life Cycle Method--------------------------  */}
      <LifeCycleMethod />
    </div>
  );
}

export default App;
