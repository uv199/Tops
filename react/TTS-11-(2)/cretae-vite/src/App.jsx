import { ToastContainer } from "react-toastify";
import Home from "./3.style/Home";
import State from "./4.State/State";
import Props from "./5.Props/Props";
import MapKey from "./6.Map-key/MapKey";
import LifeCycleCom from "./7.lifeCycle/LifeCycleCom";
import ConditionalRender from "./8.ConditionalRender/ConditionalRender";
import UseEffectCom from "./9.Hook/useEffect/UseEffectCom";
import InputCom from "./10.Input/InputCom";
import Component from "./2.Componenet/Component";

function App() {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      {/* <----------------------COMPONENT-----------------------> */}
      {/* <Component /> */}

      {/* <----------------------STYLE-----------------------> */}
      {/* <Home /> */}

      {/* <----------------------STATE-----------------------> */}
      {/* <State /> */}

      {/* <----------------------PROPS-----------------------> */}
      {/* <Props /> */}

      {/* <----------------------MAP-KEY-----------------------> */}
      {/* <MapKey /> */}

      {/* <----------------------LIFE-CYCLE-METHOD-----------------------> */}
      {/* <LifeCycleCom /> */}

      {/* <----------------------CONDITIONALRENDER-----------------------> */}
      {/* <ConditionalRender /> */}

      {/* <----------------------HOOK-----------------------> */}
      {/* <UseEffectCom /> */}

      {/* <----------------------INPUT-----------------------> */}
      <InputCom />

      <ToastContainer />
    </div>
  );
}

export default App;
