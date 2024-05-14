import FunCom from "./2.component/FunCom";
import ClassCom from "./2.component/ClassCom";
import "./App.css";
import MainStyle from "./3.style/MainStyle";
import State from "./4.State/State";
import LifeCycle from "./5.lifeCycleMethod/LifeCycle";
import Hook from "./6.Hooks/Hook";
import Props from "./7.Props/Props";
import ConditionalRender from "./8.CondRender-Fragment/ConditionalRender";
import FragmentCom from "./8.CondRender-Fragment/FragmentCom";
import Task from "./000.task/Task";
import MapKey from "./8.CondRender-Fragment/MapKey";
import InputCom from "./9.input/InputCom";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="d-flex justify-content-center">
      {/* -------------TASK------------- */}
      <Task />

      {/* -------------COMPONENETS------------- */}
      {/* <FunCom /> */}
      {/* <ClassCom /> */}

      {/* -------------STYLE------------- */}
      {/* <MainStyle /> */}

      {/* -------------STATE------------- */}
      {/* <State /> */}

      {/* -------------LIFE CYCLE------------- */}
      {/* <LifeCycle /> */}

      {/* -------------HOOK------------- */}
      {/* <Hook /> */}

      {/* -------------PROPS------------- */}
      {/* <Props /> */}

      {/* -------------CONDITIONAL RENDER------------- */}
      {/* <ConditionalRender /> */}

      {/* -------------FRAGMENT------------- */}
      {/* <FragmentCom /> */}

      {/* -------------MAP-KEY------------- */}
      {/* <MapKey /> */}

      {/* -------------INPUT------------- */}
      {/* <InputCom /> */}

      <ToastContainer />
    </div>
  );
}
