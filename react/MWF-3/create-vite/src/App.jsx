import ClassCom from "./2.component/ClassCom";
import FunCom from "./2.component/FunCom";
import HomePage from "./2.component/project/HomePage";
import PropsCalssCom from "./3.Props/PropsCalssCom";
import PropsChange from "./3.Props/PropsChange";
import PropsFunCom from "./3.Props/PropsFunCom";
import CityTable from "./4.Map-key/CityTable";
import FragmentCom from "./4.Map-key/FragmentCom";
import MapKey from "./4.Map-key/MapKey";

function App() {
  return (
    <div>
      {/* ------------------------------COMPONENT------------------------- */}
      {/* <ClassCom /> */}
      {/* <FunCom /> */}
      {/* <HomePage /> */}
      {/* ------------------------------PROPS------------------------- */}
      {/* <PropsFunCom name={"Urvish"} age={23} /> */}
      {/* <PropsChange name={"Urvish"} /> */}
      {/* <PropsFunCom name={"Shubham"} /> */}
      {/* <PropsCalssCom data={{ name: "urvish", age: 23 }} /> */}
      {/* <PropsCalssCom /> */}
      {/* ------------------------------Fragment------------------------- */}
      {/* <FragmentCom /> */}
      {/* <FragmentCom /> */}
      {/* ------------------------------Map-Key------------------------- */}
      {/* <MapKey /> */}
      <CityTable />
    </div>
  );
}

export default App;
