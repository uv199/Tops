import { ToastContainer } from "react-toastify";
import ClassCom from "./2.Componenets/class/ClassCom";
import FunctionalCom from "./2.Componenets/functional/FunctionalCom";
import StyleHome from "./3.Styling/StyleHome";
import ClassProps from "./4.props/class/ClassProps";
import FunProps from "./4.props/functional/FunProps";
import FragmentCom from "./5.Map-Key/FragmentCom";
import MapAndKey from "./5.Map-Key/MapAndKey";
import MapProject from "./5.Map-Key/MapProject";
import ClassState from "./6.State/Class/ClassState";
import StatePro from "./6.State/StatePro";
import FunState from "./6.State/functional/FunState";
import ConRendaring from "./7.Conditional-rendaring/ConRendaring";
import Conditoin2 from "./7.Conditional-rendaring/Conditoin2";
import Home from "./8.project/Home";
import LifeCycleCom from "./9.LifeCycleMethod/LifeCycleCom";
import LoginPopUp from "./9.LifeCycleMethod/LoginPopUp";
import "./App.css";

function App() {
  return (
    <div className="appDiv">
      {/* <---------------------COMPONENET------------------------> */}
      {/* <FunctionalCom /> */}
      {/* <ClassCom /> */}

      {/* <---------------------STYLE------------------------> */}
      {/* <StyleHome /> */}

      {/* <---------------------PROPS------------------------> */}
      {/* <FunProps name={"Happy User"} /> */}
      {/* <ClassProps /> */}

      {/* <---------------------FRAGMENT - MAP-KEY------------------------> */}
      {/* <MapAndKey /> */}
      {/* <FragmentCom /> */}
      {/* <MapProject/> */}

      {/* <---------------------FUNSTATE------------------------> */}
      {/* <FunState /> */}
      {/* <ClassState /> */}
      {/* <StatePro /> */}

      {/* <---------------------CONTIDIONAL RENDARING------------------------> */}
      {/* <ConRendaring /> */}
      {/* <Conditoin2 /> */}
      {/* <Home /> */}

      {/* <---------------------LIFECYCLE METHOD------------------------> */}
      {/* <LifeCycleCom /> */}
      <LoginPopUp />

      <ToastContainer />
    </div>
  );
}

export default App;
