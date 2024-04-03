import FunCom from "./2.component/FunCom";
import ClassCom from "./2.component/ClassCom";
import "./App.css";
import MainStyle from "./3.style/MainStyle";
import State from "./4.State/State";
import LifeCycle from "./5.lifeCycleMethod/LifeCycle";

export default function App() {
  return (
    <div className="d-flex justify-content-center">
      {/* -------------COMPONENETS------------- */}
      {/* <FunCom /> */}
      {/* <ClassCom /> */}

      {/* -------------STYLE------------- */}
      {/* <MainStyle /> */}

      {/* -------------STATE------------- */}
      {/* <State /> */}

      {/* -------------LIFE CYCLE------------- */}
      <LifeCycle />
    </div>
  );
}