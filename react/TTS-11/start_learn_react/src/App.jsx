// pakages
import React from "react";
// "test1"=> t-e+s-t+1
//files
import "./App.css";
import Body from "./class comp/Body";
import ClassCom from "./class comp/ClassCom";
import FunCom from "./functionalComponent/FunCom";
import UserSateClass from "./useState/class/UserSateClass";
import UserSateFun from "./useState/function/UseSateFun";
import UseSateFun from "./useState/function/UseSateFun";
import StateProject from "./useState/StateProject";
import Project2 from "./useState/Project2";
import FunProps from "./props/FunProps";
import FunPropsChnage from "./props/FunPropsChnage";
import ClassProps from "./props/ClassProps";
import PropsDestructuring from "./props/PropsDestructuring";
import FragmentCom from "./ConditionalRen-map-fragment/FragmentCom";
import ConditionalRen from "./ConditionalRen-map-fragment/ConditionalRen";
import MapKey from "./ConditionalRen-map-fragment/MapKey";
import MapCom from "./ConditionalRen-map-fragment/MapCom";
import BootStrapCom from "./BootStrap/BootStrapCom";
import InputCom from "./input/InputCom";
import PropsFunRep from "./repeatclass/PropsFunRep";
import PropsClassRep from "./repeatclass/PropsClassRep";

function App() {
  return (
    <div className="App_div">
      {/*------------------ component ------------------ */}
      {/* <Body />
      <ClassCom />
      <FunCom /> */}

      {/*------------------ state------------------ */}
      {/* <UserSateClass /> */}
      {/* <UserSateFun /> */}
      {/* <StateProject /> */}
      {/* <Project2 /> */}

      {/*------------------Props------------------ */}
      {/* <FunProps name={"urvish"} age={20} /> */}
      {/* <FunProps name={"urvish"} /> */}
      {/* <FunProps obj={{ x: 10, y: 10 }} /> */}
      {/* <FunPropsChnage name={"urvish"} /> */}
      {/* <ClassProps name={"what happen"} /> */}
      {/* <PropsDestructuring name={"urvish"} age={25} /> */}

      {/*------------------Fragment------------------ */}
      {/* <FragmentCom /> */}

      {/*------------------Conditional-Rendaring------------------ */}
      {/* <ConditionalRen isMale={"email"} isYoung={true} /> */}
      {/* <ConditionalRen isMale={false} /> */}

      {/*------------------Map------------------ */}
      {/* <MapKey /> */}
      {/* <MapCom /> */}

      {/*------------------Bootstrap------------------ */}
      {/* <BootStrapCom /> */}

      {/*------------------Input------------------ */}
      <InputCom />

      {/*------------------props rep------------------ */}
      {/* <PropsFunRep name={"urvish"} age={20} />
      <PropsFunRep name={"patel"} />
      <PropsClassRep age={"00000"} /> */}
    </div>
  );
}

export default App;

// function name(props) {
//   props.name
// }
// name(name="test")
