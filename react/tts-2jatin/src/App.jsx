// functional componenet
import ClassCom from "./2.componenet/ClassCom";
import FunctionCom from "./2.componenet/FunctionCom";
import Home from "./3.Style/Home";
import ClassComState from "./4.state/ClassComState";
import FunctionalState from "./4.state/FunctionalState";
import FragmentCom from "./5.Map-Key/FragmentCom";
import MapKeyCom from "./5.Map-Key/MapKeyCom";
function App(params) {
  return (
    <div className="flex justify-center items-center">
      {/* ------------COMPONENT------------ */}

      {/* <FunctionCom /> */}
      {/* <ClassCom /> */}

      {/* ------------STYLE------------ */}

      {/* <Home /> */}

      {/* ------------STATE------------ */}

      {/* <FunctionalState /> */}
      {/* <ClassComState /> */}

      {/* ------------MAP-KEY------------ */}
      {/* <MapKeyCom /> */}
      <FragmentCom />
    </div>
  );
}

export default App;
