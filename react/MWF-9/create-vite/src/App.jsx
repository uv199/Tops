import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCom from "./3.style/BootstrapCom";
import StyleCom from "./3.style/StyleCom";
import FunCom2 from "./2.component/FunCom2";
import ClassCom from "./2.component/ClassCom";
import FunCom1 from "./2.component/FunCom1";
import FragmentCom from "./4.fragment-map-key/FragmentCom";
import Header from "./3.style/Header";
import MapKey from "./4.fragment-map-key/MapKey";
import MapKey2 from "./4.fragment-map-key/MapKey2";
import UseStateFun from "./6.State/UseStateFun";
import ClassComState from "./6.State/classComState";
import StatePro1 from "./6.State/statePro1";
import ClassPro1 from "./6.State/classPro1";
import LifeCycle from "./7.lifeCycleMethos/LifeCycle";
import UseEffect from "./5.HOOKS/useEffect/UseEffect";
import FunProps from "./8.props/FunProps";
import ClassPro from "./8.props/ClassPro";
import ProjectProps from "./8.props/project/ProjectProps";
import Parents from "./8.props/propsLifting/Parents";
import SingleInput from "./9.Input/single/SingleInput";
import SingleInput2 from "./9.Input/single/SingleInput2";
import MultiInput from "./9.Input/multi_input/MultiInput";

function App() {
  let x = "urvish";

  return (
    <div>
      {/* <-------------------------Components---------------------------------> */}
      {/* <FunCom1 /> */}
      {/* <ClassCom /> */}
      {/* <FunCom2 /> */}

      {/* <-------------------------style---------------------------------> */}
      {/* <StyleCom /> */}
      {/* <BootstrapCom /> */}
      {/* <Header /> */}

      {/* <-------------------------Fragment---------------------------------> */}
      {/* <FragmentCom /> */}

      {/* <-------------------------map-key---------------------------------> */}
      {/* <MapKey /> */}
      {/* <MapKey2 /> */}

      {/* <-------------------------State---------------------------------> */}
      {/* <UseStateFun /> */}
      {/* <ClassComState /> */}
      {/* <StatePro1 /> */}
      {/* <ClassPro1 /> */}

      {/* <-------------------------LifeCycle---------------------------------> */}
      {/* <LifeCycle /> */}

      {/* <-------------------------HOOK---------------------------------> */}
      {/* <UseEffect /> */}

      {/* <-------------------------Props---------------------------------> */}
      {/* <FunProps name={"urvish"} age={30} /> */}
      {/* <FunProps name="laxmi" /> */}
      {/* <ClassPro data={{ name: "urvish", age: 23 }} /> */}
      {/* <ClassPro /> */}
      {/* <ProjectProps /> */}
      {/* <Parents /> */}
      {/* <-------------------------Input---------------------------------> */}
      {/* <SingleInput /> */}
      {/* <SingleInput2 /> */}
      <MultiInput />
    </div>
  );
}

export default App;
