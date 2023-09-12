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
import Delete from "./input/Delete";
import Update from "./input/Update";
import TestUpdate from "./input/TestUpdate";
import MultiInput from "./input/MultiInput";
import LifeCycleMethod from "./LifecycleMethod/LifeCycleMethod";
import AntdLayout from "./Antd/AntdLayout";
import LocalStorage from "./Localstorage/LOcalStorage";
import UseEffectCom from "./HOOKS/UseEffectCom";
import ApiCom from "./API/ApiCom";
import ApiCom2 from "./API/ApiCom2";
import ContexCom from "./HOOKS/Context/ContexCom";
import UseRefCom from "./HOOKS/userRef/UseRefCom";
import UseReducer from "./HOOKS/useReducer/UseReducer";
import UseReducer2 from "./HOOKS/useReducer/UserReducer2";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import RouterRev from "./router/navigation-rev/RouterRev";
import PrvRouter from "./protectedRoute/rev/Router";
import PrvRouterContext from "./proRoute/Router";
import UseMemo from "./HOOKS/useMemo/UseMemo";
import UseCallBack from "./HOOKS/useCallBack/UseCallBack";
import AppCom from "./redux/AppCom";

function App() {
  return (
    <BrowserRouter>
      <div className="App_div w-100">
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
        {/* <InputCom /> */}
        {/* <Delete /> */}
        {/* <Update /> */}
        {/* <TestUpdate/> */}
        {/* <MultiInput /> */}

        {/*------------------props rep------------------ */}
        {/* <PropsFunRep name={"urvish"} age={20} />
      <PropsFunRep name={"patel"} />
      <PropsClassRep age={"00000"} /> */}

        {/*------------------LifeCycleMethod------------------ */}
        {/* <LifeCycleMethod /> */}

        {/*------------------AntdLayout------------------ */}
        {/* <AntdLayout /> */}

        {/*------------------LocalStorage------------------ */}
        {/* <LocalStorage /> */}

        {/*------------------HOOKs------------------ */}
        {/* <UseEffectCom /> */}
        {/* <ContexCom /> */}
        {/* <UseRefCom /> */}
        {/* <UseReducer /> */}
        {/* <UseReducer2 /> */}
        {/* <UseMemo/> */}
        {/* <UseCallBack /> */}

        {/*------------------ApiCom------------------ */}
        {/* <ApiCom /> */}
        {/* <ApiCom2 /> */}
        {/*------------------Router------------------ */}
        {/* <Router /> */}
        {/* <PrvRouter /> */}
        {/* <RouterRev /> */}
        {/* <PrvRouterContext /> */}
        {/*------------------Redux------------------ */}
        <AppCom />
      </div>
    </BrowserRouter>
  );
}

export default App;

// function name(props) {
//   props.name
// }
// name(name="test")
