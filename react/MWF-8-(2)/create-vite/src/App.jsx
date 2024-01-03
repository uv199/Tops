import ClassCom from "./2.Componenets/class/ClassCom";
import FunctionalCom from "./2.Componenets/functional/FunctionalCom";
import StyleHome from "./3.Styling/StyleHome";
import ClassProps from "./4.props/class/ClassProps";
import FunProps from "./4.props/functional/FunProps";
import FragmentCom from "./5.Map-Key/FragmentCom";
import MapAndKey from "./5.Map-Key/MapAndKey";
import MapProject from "./5.Map-Key/MapProject";
import FunState from "./6.State/functional/FunState";
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
      <FunState />
    </div>
  );
}

export default App;
