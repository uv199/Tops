import ClassCom from "./2.Component/ClassCom";
import FunctionCom from "./2.Component/FunctionCom";
import HomeBody from "./3.Style/HomeBody";
import FragmentCom from "./4.mapKey/FragmentCom";
import MapKeyCom from "./4.mapKey/MapKeyCom";
import ClassState from "./5.state/ClassState";
import FunState from "./5.state/FunState";

export default function App() {
  return (
    <div className="app flex justify-center items-center flex-col">
      {/* --------------COMPONENT--------------- */}
      {/* <FunctionCom /> */}
      {/* <ClassCom/>  */}

      {/* --------------STYLE--------------- */}
      {/* <HomeBody /> */}

      {/* --------------MAP-KEY--------------- */}
      {/* <MapKeyCom /> */}
      {/* <FragmentCom /> */}

      {/* --------------STATE--------------- */}
      {/* <FunState /> */}
      <ClassState />
    </div>
  );
}
