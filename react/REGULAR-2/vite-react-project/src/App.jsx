// package
import { useState } from "react";

// file
import "./App.css";
import ClassCom from "./1.components/ClassCom";
import ClassCom2 from "./1.components/ClassCom2";
import FunCom from "./1.components/FunCom";
import FunCom2 from "./1.components/FunCom2";
import UseStateFun from "./2.uses_state/UseStateFun";
import UseStateClass from "./2.uses_state/UseStateClass";
import StateProject1 from "./2.uses_state/StateProject1";
import StateProject2 from "./2.uses_state/StateProject2";
import ConditionalRen from "./4.ConditionalRendaring_Fragment/ConditionalRen";
import LifeCycleMethod from "./7.life_cycle_method/LifeCycleMethod";
import ConRenProject1 from "./4.ConditionalRendaring_Fragment/ConRenProject1";
import PropsFun from "./3.Props/PropsFun";
import PropsClass from "./3.Props/PropsClass";
import PropsProject1 from "./3.Props/PropsProject1";
import FragmentCom from "./4.ConditionalRendaring_Fragment/FragmentCom";
import MapFun_key from "./5.Map-key/MapFun_key";
import MapFun_key_2 from "./5.Map-key/MapFun_key_2";
import InputCom from "./6.Input/InputCom";
// or less ideally
import { Button } from "react-bootstrap";
import MultipleInputCom from "./6.Input/MultipleInputCom";
import Delete from "./6.Input/Delete";
import UpdateCom from "./6.Input/UpdateCom";
import PopModel from "./6.Input/PopModel";
import NewUpdate from "./6.Input/NewUpdate";
import ApiCom from "./8.API/ApiCom";
import LayoutCom from "./9.ANTD/LayoutCom";
import LocalStorage from "./10.localstorage/LocalStorage";

function App() {
  const [isPass, setIsPass] = useState("pass");
  function chnageInput(params) {
    setIsPass("email");
  }
  return (
    <div>
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

      {/* ----------------------------Props--------------------------  */}
      {/* <PropsFun name={"urvish"} age={20} /> */}
      {/* <PropsFun name={"tejash"} age={10} />
      <PropsFun data={{ name: "test", age: 30 }} />
      <PropsFun arr={[1, 2, 3, 4]} /> */}
      {/* <PropsClass name={"urvish"} /> */}
      {/* <PropsProject1 inputType={isPass} />
      <button onClick={() => chnageInput()}>chnage input</button> */}

      {/* ---------------------------- Fragment --------------------------  */}
      {/* <FragmentCom /> */}

      {/* ---------------------------- Map --------------------------  */}
      {/* <MapFun_key /> */}
      {/* <MapFun_key_2 /> */}

      {/* ---------------------------- Input --------------------------  */}
      {/* <InputCom /> */}
      {/* <MultipleInputCom /> */}
      {/* <Delete /> */}
      {/* <UpdateCom /> */}
      {/* <NewUpdate /> */}

      {/* ----------------------------Life Cycle Method--------------------------  */}

      {/* <LifeCycleMethod /> */}

      {/*  componentWillUnmount  will call when component is removeds here we will remove by use of ternary opt */}
      {/* {false ? <LifeCycleMethod /> : null} */}
      {/* {true ? <LifeCycleMethod /> : null} */}

      {/* ----------------------------Pop-Model--------------------------  */}
      {/* <PopModel /> */}

      {/* ----------------------------API--------------------------  */}
      {/* <ApiCom /> */}
      {/* ----------------------------Antd--------------------------  */}
      {/* <LayoutCom /> */}
      {/* ----------------------------LocalStorage--------------------------  */}
      <LocalStorage />
    </div>
  );
}

export default App;
