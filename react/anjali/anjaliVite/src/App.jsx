import { ToastContainer } from "react-toastify";
import FetchData from "./00.Practicle/FetchData";
import FunCom2 from "./1.Componenets/FunCom2";
import FunctionalCom from "./1.Componenets/FunctionalCom";
import ClassCom1 from "./1.Componenets/class/ClassCom1";
import Router from "./10.routing/simpleRoute/Router";
import Body from "./2.styling/Body";
import Footer from "./2.styling/Footer";
import Header from "./2.styling/Header";
import ClassComState from "./3.state/ClassComState";
import FunState from "./3.state/FunState";
import LifeCycle from "./4.lifeCycleMethod/LifeCycle";
import Classsprops from "./5.porps/Classsprops";
import FunProps, { sum, sub } from "./5.porps/FunProps";
import Galary from "./6.map-key/Galary";
import MapKey from "./6.map-key/MapKey";
import UseEffectCom from "./7.Hooks/useEffect/UseEffectCom";
import UseEffectPro1 from "./7.Hooks/useEffect/UseEffectPro1";
import Home from "./8.Crud/Home";
import MultiInput from "./8.Crud/MultiInput";
import SingleInput from "./8.Crud/SingleInput";
import TodoList from "./9.api/TodoList";
import AppPro from "./Project/AppPro";
import UseRefCom from "./7.Hooks/useRef/UseRefCom";
import ReducerCom from "./7.Hooks/useReducer/ReducerCom";
import MainContext from "./7.Hooks/useContaxt/MainContext";
import UseMemo from "./7.Hooks/useMemo/UseMemo";
import CallBackCom from "./7.Hooks/useCallBack/CallBackCom";

// export default "test test"
// import TEST from ""
// export const x = "hello world..!";
// import {x} from "path of file"

export default function App() {
  let arr = [1, 2, 3, 4, 5, 6];
  let com = arr.map((e) => {
    return <p>no is {e}</p>;
  });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* -----------COMPONENT--------------- */}
      {/* <ClassCom1 /> */}

      {/* -----------STYLING--------------- */}
      {/* <Header />
      <Body />
      <Footer /> */}

      {/* -----------STATE--------------- */}
      {/* <FunState /> */}
      {/* <ClassComState /> */}

      {/* -----------LIFE-CYCLE-METHOD--------------- */}
      {/* <LifeCycle /> */}

      {/* -----------PROPS--------------- */}
      {/* <FunProps name={"urvish"} age={20} /> */}
      {/* <FunProps name={"sanjay"} age={30} /> */}
      {/* <Classsprops name={"Urvish"} /> */}

      {/* -----------MAP-KEY--------------- */}
      {/* <MapKey/> */}
      {/* <Galary /> */}

      {/* -----------HOOK--------------- */}
      {/* <UseEffectCom /> */}
      {/* <UseEffectPro1 /> */}
      {/* <UseRefCom /> */}
      {/* <ReducerCom /> */}
      {/* <MainContext /> */}
      <UseMemo />
      {/* <CallBackCom /> */}

      {/* -----------INPUT--------------- */}
      {/* <SingleInput /> */}
      {/* <Home /> */}

      {/* -----------PARCTICE--------------- */}
      {/* <FetchData /> */}

      {/* -----------ROUTER--------------- */}
      {/* <Router /> */}

      {/* -----------API--------------- */}
      {/* <TodoList /> */}

      {/* -----------PROJECT--------------- */}
      {/* <AppPro /> */}
      <ToastContainer />
    </div>
  );
}

// export const sum = () => {
//   console.log("-----------  sum----------->");
// };

// export const sub = () => {
//   console.log("-----------  sub----------->");
// };
