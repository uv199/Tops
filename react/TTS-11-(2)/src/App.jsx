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
import SimpleRouter from "./11.router/simpeRouter/SimpleRouter";
import ProtectedRoute from "./11.router/protectedRouter/ProtectedRoute";
import Localstorage from "./12.localstorage/Localstorage";
import UseRefCom from "./9.Hook/useRef/UseRefCom";
import ProjectApp from "./13.Project/ProjectApp";

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
      {/* <UseRefCom /> */}

      {/* <----------------------INPUT-----------------------> */}
      {/* <InputCom /> */}

      {/* <----------------------LOCAL STORAGE-----------------------> */}
      {/* <Localstorage /> */}

      {/* <----------------------ROUTER-----------------------> */}
      {/* <SimpleRouter /> */}
      {/* <ProtectedRoute /> */}

      {/* <----------------------PROJECT-----------------------> */}
      <ProjectApp />

      <ToastContainer />
    </div>
  );
}

export default App;
