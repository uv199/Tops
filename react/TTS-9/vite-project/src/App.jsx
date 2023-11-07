import "./App.css";
import ClassCom from "./2.component/Class/ClassCom";
import FunCom from "./2.component/Functional/FunCom";
import MainPage from "./3.Style-CSS/Project/MainPage";
import ReactStrap from "./3.Style-CSS/ReactStrap";
import Slider from "./3.Style-CSS/Slider";
import Style from "./3.Style-CSS/Style";
import UseStaeCom from "./4.Hook/usestate/UseStaeFun";
import UseStaePro from "./4.Hook/usestate/UseStaePro";
import UseStaePro2 from "./4.Hook/usestate/UseStaePro2";
import UseStateClass from "./4.Hook/usestate/UseStateClass";
import FragmentCom from "./5.map-Key-Fragment/Fragment";
import MapKey from "./5.map-Key-Fragment/MapKey";
import FunProps from "./6.Props/Function/FunProps";
import ClassProps from "./6.Props/Class/ClassProps";
import PropPro1 from "./6.Props/PropPro1";
import PropsChange from "./6.Props/Function/PropsChange";
import LifeCycleMethod from "./7.LifeCycleMethod/LifeCycleMethod";

function App() {
  return (
    <div className="appContainer">
      {/*-----------------------COMPONENT--------------------------  */}
      {/* <FunCom /> */}
      {/* <ClassCom /> */}

      {/*-----------------------STYLE--------------------------  */}
      {/* <Style /> */}
      {/* <Slider /> */}
      {/* <ReactStrap /> */}
      {/* <MainPage /> */}

      {/*-----------------------USE_STATE--------------------------  */}
      {/* <UseStaeCom /> */}
      {/* <UseStaePro /> */}
      {/* <UseStaePro2 /> */}
      {/* <UseStateClass /> */}

      {/*-----------------------FRAGMENT--------------------------  */}
      {/* <FragmentCom /> */}
      {/* <FragmentCom /> */}

      {/*-----------------------MAP-KEY--------------------------  */}
      {/* <MapKey /> */}

      {/*-----------------------PROPS--------------------------  */}
      {/* <FunProps name={"Urvish"} age={23} color={"red"} /> */}
      {/* <FunProps name={"Nimesh"} age={20} color={"green"} /> */}
      {/* <ClassProps data={{ name: "Urvish", greeting: "Good-Morning" }} /> */}
      {/* <ClassProps /> */}
      {/* <PropPro1 /> */}
      {/* <PropsChange name="urvish" /> */}

      {/*-----------------------LIFE_CYCLE_METHOD--------------------------  */}
      <LifeCycleMethod />
    </div>
  );
}

export default App;
