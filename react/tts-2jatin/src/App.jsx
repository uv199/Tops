import { ToastContainer } from "react-toastify";
// functional componenet

import ClassCom from "./2.componenet/ClassCom";
import FunctionCom from "./2.componenet/FunctionCom";
import Home from "./3.Style/Home";
import MainFile from "./3.Style/project/MainFile";
import ClassComState from "./4.state/ClassComState";
import FunctionalState from "./4.state/FunctionalState";
import FragmentCom from "./5.Map-Key/FragmentCom";
import MapKeyCom from "./5.Map-Key/MapKeyCom";
import UseContaxt from "./6.HOOK/useContaxt/UseContaxt";
import UseEffect from "./6.HOOK/useEffect/UseEffect";
import UseEffectPro1 from "./6.HOOK/useEffect/demoProject/UseEffectPro1";
import UseReducer from "./6.HOOK/useReducer/UseReducer";
import UseRefCom from "./6.HOOK/userRef/UseRefCom";
import Parent from "./7.Props/Parent";
import SingleInput from "./8.input/SingleInput";
import ConditionCom from "./9.conditionalRender/ConditionCom";

function App(params) {
  console.log("---->");
  return (
    <div className="flex justify-center items-center">
      {/* ------------COMPONENT------------ */}

      {/* <FunctionCom /> */}
      {/* <ClassCom /> */}

      {/* ------------STYLE------------ */}

      {/* <Home /> */}
      {/* <MainFile /> */}

      {/* ------------STATE------------ */}

      {/* <FunctionalState /> */}
      {/* <ClassComState /> */}

      {/* ------------MAP-KEY------------ */}
      {/* <MapKeyCom /> */}
      {/* <FragmentCom /> */}

      {/* ------------HOOK------------ */}
      {/* <UseEffect /> */}
      {/* <UseEffectPro1 /> */}
      {/* <UseRefCom /> */}
      {/* <UseReducer /> */}
      {/* <UseContaxt /> */}

      {/* ------------PROPS------------ */}
      {/* <Parent /> */}

      {/* ------------INPUT------------ */}
      <SingleInput />

      {/* ------------CONTIONAL RENDERING------------ */}
      {/* <ConditionCom /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
