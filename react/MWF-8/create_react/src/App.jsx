import React from "react";
import "./App.css";
import FunState from "./3.user_state/FunState";
import ClassState from "./3.user_state/ClassState";
import StateProject1 from "./3.user_state/StateProject1";
import StateProject2 from "./3.user_state/StateProject2";
import FunProps from "./4.props/FunProps";
import ClassProps from "./4.props/ClassProps";
import ConditionalRendaring from "./5.conditionRend-Map/ConditionalRendaring";
import MapLoop from "./5.conditionRend-Map/MapLoop";
import FragmentTest from "./7.Fragment/FragmentTest";
import ListKey from "./8.List/ListKey";
import Map from "./6.map/Map";
import InputCom from "./9.input/InputCom";
import MultipleInputCom from "./9.input/MultipleInputCom";
import BootStrapCom from "./10.bootStrap/BootStrapCom";
import DeleteCom from "./9.input/DeleteCom";
import UpdateCom from "./9.input/UpdateCom";
import UpdateTest from "./9.input/UpdateTest";
import ApiCom from "./11.API/ApiCom";
import LifeCycleMethod from "./12.lifeCycle/LifeCycleMethod";
import LayoutAntd from "./Antd/LayoutAntd";
import UseEffectCom from "./14.HOOKS/UseEffectCom";
import LocalstorageCom from "./15.Local-Storage/LocalstorageCom";
import HeaderOne from "./Antd/HeaderOne";

function App() {
  // return <h1>{5 + 10}</h1>;

  return (
    <div className="test-1">
      <HeaderOne />
      {/* ------------------userState--------------------- */}
      {/* <FunState /> */}
      {/* <ClassState /> */}
      {/* <StateProject1 /> */}
      {/* <StateProject2 /> */}
      {/* ------------------Props--------------------- */}
      {/* <FunProps name={"urvish"} />
      <FunProps name={"tejash"} /> */}
      {/* <ClassProps name={"urvish"} />
      <ClassProps name={"Patel"} /> */}
      {/* ------------------Conditional render / Map --------------------- */}
      {/* <ConditionalRendaring /> */}
      {/* <MapLoop /> */}
      {/* ------------------Fragment --------------------- */}
      {/* <FragmentTest /> */}
      {/* ------------------List --------------------- */}
      {/* <ListKey /> */}
      {/* ------------------Map--------------------- */}
      {/* <Map /> */}
      {/* ------------------Input--------------------- */}
      {/* <InputCom /> */}
      {/* <MultipleInputCom /> */}
      {/* <DeleteCom /> */}
      {/* <UpdateCom /> */}
      {/* <UpdateTest /> */}
      {/* ------------------Boot-Strap--------------------- */}
      {/* <BootStrapCom /> */}
      {/* ------------------ApiCom--------------------- */}
      {/* <ApiCom /> */} // TODO have to explain post and more
      {/* ------------------LifeCycleMethod--------------------- */}
      {/* <LifeCycleMethod /> */}
      {/* ------------------Local storage--------------------- */}
      {/* <LocalstorageCom /> */}
      {/* ------------------Hook--------------------- */}
      <UseEffectCom />
    </div>
  );
}

export default App;
