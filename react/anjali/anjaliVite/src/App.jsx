import FunCom2 from "./1.Componenets/FunCom2";
import FunctionalCom from "./1.Componenets/FunctionalCom";
import ClassCom1 from "./1.Componenets/class/ClassCom1";
import Body from "./2.styling/Body";
import Footer from "./2.styling/Footer";
import Header from "./2.styling/Header";
import ClassComState from "./3.state/ClassComState";
import FunState from "./3.state/FunState";
import LifeCycle from "./4.lifeCycleMethod/LifeCycle";
import Classsprops from "./5.porps/Classsprops";
import FunProps, { sum, sub } from "./5.porps/FunProps";
import Galary from "./6.map-key/Galary";

// export default "test test"
// import TEST from ""
// export const x = "hello world..!";
// import {x} from "path of file"

export default function App() {
  let arr = [1, 2, 3, 4, 5, 6];
  let com = arr.map((e) => {
    return <p>no is {e}</p>;
  });
  return (
    <div>
      {/* -----------COMPONENT--------------- */}
      {/* <ClassCom1 /> */}

      {/* -----------STYLING--------------- */}
      {/* <Header />
      <Body />
      <Footer /> */}

      {/* -----------STATE--------------- */}
      {/* <FunState /> */}
      {/* <ClassComState /> */}

      {/* -----------LIFE-CYCLE-METHOD--------------- */}
      {/* <LifeCycle /> */}

      {/* -----------PROPS--------------- */}
      {/* <FunProps name={"urvish"} age={20} /> */}
      {/* <FunProps name={"sanjay"} age={30} /> */}
      {/* <Classsprops name={"Urvish"} /> */}

      <Galary />
    </div>
  );
}

// export const sum = () => {
//   console.log("-----------  sum----------->");
// };

// export const sub = () => {
//   console.log("-----------  sub----------->");
// };
