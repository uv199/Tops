import ClassCom from "./2.Componenet/class/ClassCom";
import FunctionalCom from "./2.Componenet/functional/FunctionalCom";
import FunctionalCom2 from "./2.Componenet/functional/FunctionalCom2";
import Home from "./3.style/Home";
import State from "./4.State/State";
import Props from "./5.Props/Props";
import MapKey from "./6.Map-key/MapKey";

function App() {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      {/* <----------------------COMPONENT-----------------------> */}
      {/* <FunctionalCom2 />
      <ClassCom />
      <FunctionalCom /> */}
      {/* <----------------------STYLE-----------------------> */}
      {/* <Home /> */}

      {/* <----------------------STATE-----------------------> */}
      {/* <State /> */}

      {/* <----------------------PROPS-----------------------> */}
      {/* <Props /> */}

      {/* <----------------------MAP-KEY-----------------------> */}
      <MapKey />
    </div>
  );
}

export default App;
