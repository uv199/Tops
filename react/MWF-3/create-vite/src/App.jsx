import ClassCom from "./2.component/ClassCom";
import FunCom from "./2.component/FunCom";
import HomePage from "./2.component/project/HomePage";
import PropsCalssCom from "./3.Props/PropsCalssCom";
import PropsChange from "./3.Props/PropsChange";
import PropsFunCom from "./3.Props/PropsFunCom";
import CityTable from "./4.Map-key/CityTable";
import FragmentCom from "./4.Map-key/FragmentCom";
import MapKey from "./4.Map-key/MapKey";
import ConditionCom from "./5.conditionalRendaring/ConditionCom";
import StatePro1 from "./6.useState/StatePro1";
import UseStateClass from "./6.useState/UseStateClass";
import UseStateFun from "./6.useState/UseStateFun";
import UseEffect from "./7.UseEffect/UseEffect";
import UseEffectPro from "./7.UseEffect/UseEffectPro";
import LifeCycle from "./8.LifeCycle/LifeCycle";
import DeleteData from "./9.input/DeleteData";
import FullCrud from "./9.input/FullCrud";
import InputData from "./9.input/InputData";
import UpdateData from "./9.input/UpdateData";
import "./App.css";

function App() {
  return (
    <div className="app_container">
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
      {/* ------------------------------FRAGMENT------------------------- */}
      {/* <FragmentCom /> */}
      {/* <FragmentCom /> */}
      {/* ------------------------------MAP-KEY------------------------- */}
      {/* <MapKey /> */}
      {/* <CityTable /> */}
      {/* ------------------------------CONDITION-RENDARING------------------------- */}
      {/* <ConditionCom /> */}
      {/* ------------------------------USE-STATE------------------------- */}
      {/* <UseStateFun /> */}
      {/* <UseStateClass /> */}
      {/* <StatePro1 /> */}
      {/* ------------------------------LIFE-CYCLE------------------------- */}
      {/* <LifeCycle /> */}
      {/* ------------------------------HOOK------------------------- */}
      {/* <UseEffect /> */}
      {/* <UseEffectPro /> */}
      {/* <InputData /> */}
      {/* <DeleteData /> */}
      {/* <UpdateData /> */}
      <FullCrud />
    </div>
  );
}

export default App;
