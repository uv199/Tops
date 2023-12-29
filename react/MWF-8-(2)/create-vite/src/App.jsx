import ClassCom from "./2.Componenets/class/ClassCom";
import FunctionalCom from "./2.Componenets/functional/FunctionalCom";
import StyleHome from "./3.Styling/StyleHome";
import ClassProps from "./4.props/class/ClassProps";
import FunProps from "./4.props/functional/FunProps";
import "./App.css";

function App() {
  return (
    <div>
      {/* <---------------------COMPONENET------------------------> */}
      {/* <FunctionalCom /> */}
      {/* <ClassCom /> */}

      {/* <---------------------STYLE------------------------> */}
      {/* <StyleHome /> */}

      {/* <---------------------PROPS------------------------> */}
      <FunProps name={"Happy User"} />
      {/* <ClassProps /> */}
    </div>
  );
}

export default App;
