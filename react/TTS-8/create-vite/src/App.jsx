import ClassCom from "./2.components/ClassCom";
import FunCom from "./2.components/FunCom";
import Test from "./2.components/Test";
import Accordian from "./3.style-bootstrap/Accordian";
import ReactStarpCom from "./3.style-bootstrap/ReactStarpCom";
import ReactStrap2 from "./3.style-bootstrap/ReactStrap2";
import "./App.css";

function App() {
  return (
    <div>
      {/* <--------------------Component-------------------------> */}
      {/* <FunCom />0 */}
      {/* <ClassCom /> */}
      {/* <--------------------Component-------------------------> */}
      {/* <ReactStarpCom /> */}
      <Test>
        <ReactStrap2 />
        <Accordian />
      </Test>
    </div>
  );
}

export default App;
