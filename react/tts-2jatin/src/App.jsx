// functional componenet
import ClassCom from "./2.componenet/ClassCom";
import FunctionCom from "./2.componenet/FunctionCom";
import Home from "./3.Style/Home";
import MainFile from "./3.Style/project/MainFile";
import ClassComState from "./4.state/ClassComState";
import FunctionalState from "./4.state/FunctionalState";
import FragmentCom from "./5.Map-Key/FragmentCom";
import MapKeyCom from "./5.Map-Key/MapKeyCom";
import UseEffect from "./6.HOOK/useEffect/UseEffect";
function App(params) {
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
      <UseEffect />
    </div>
  );
}

export default App;
