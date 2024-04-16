import { ToastContainer } from "react-toastify";
import ClassCom from "./2.Componenets/class/ClassCom";
import FunctionalCom from "./2.Componenets/functional/FunctionalCom";
import StyleHome from "./3.Styling/StyleHome";
import ClassProps from "./4.props/class/ClassProps";
import FunProps from "./4.props/functional/FunProps";
import FragmentCom from "./5.Map-Key/FragmentCom";
import MapAndKey from "./5.Map-Key/MapAndKey";
import MapProject from "./5.Map-Key/MapProject";
import ClassState from "./6.State/Class/ClassState";
import StatePro from "./6.State/StatePro";
import FunState from "./6.State/functional/FunState";
import ConRendaring from "./7.Conditional-rendaring/ConRendaring";
import Conditoin2 from "./7.Conditional-rendaring/Conditoin2";
import Home from "./8.project/Home";
import LifeCycleCom from "./9.LifeCycleMethod/LifeCycleCom";
import LoginPopUp from "./9.LifeCycleMethod/LoginPopUp";
import "./App.css";
import UseEffect from "./10.Hook/useEffect/UseEffect";
import UseEffectPro from "./10.Hook/useEffect/UseEffectPro";
import InputCom from "./11.Input/InputCom";
import NavBarCom from "./3.Styling/NavBArCom";
import MultiInput from "./11.Input/MultiInput";
import Radio from "./11.Input/Radio";
import CheckBox from "./11.Input/CheckBox";
import MultiUser from "./11.Input/MultiUser";
import LocalStorageCom from "./12.localStorage/LocalStorageCom";
import SelectCom from "./11.Input/SelectCom";
import SearchInput from "./11.Input/SearchInput";
import Router from "./13.router/Router";
import LocalStorageMultiInputs2 from "./11.Input/LocalStorageMultiInputs2";
import ProtectedRouter from "./14.ProtectedRoute/Router";
import ProtectedProject from "./15.ProtectedProject/Router";
import UeRefCom from "./10.Hook/useRef/UeRefCom";
import UseContaxtCom from "./10.Hook/useContaxt/UseContaxtCom";
import ToDoList from "./00.task/todo/ToDoList";
import Product from "./00.task/productApi/Product";

function App() {
  return (
    <div className="appDiv">
      {/* <---------------------COMPONENET------------------------> */}
      {/* <FunctionalCom /> */}
      {/* <ClassCom /> */}

      {/* <---------------------STYLE------------------------> */}
      {/* <StyleHome /> */}
      {/* <NavBarCom /> */}

      {/* <---------------------PROPS------------------------> */}
      {/* <FunProps name={"Happy User"} /> */}
      {/* <ClassProps /> */}

      {/* <---------------------FRAGMENT - MAP-KEY------------------------> */}
      {/* <MapAndKey /> */}
      {/* <FragmentCom /> */}
      {/* <MapProject/> */}

      {/* <---------------------FUNSTATE------------------------> */}
      {/* <FunState /> */}
      {/* <ClassState /> */}
      {/* <StatePro /> */}

      {/* <---------------------CONTIDIONAL RENDARING------------------------> */}
      {/* <ConRendaring /> */}
      {/* <Conditoin2 /> */}
      {/* <Home /> */}

      {/* <---------------------LIFECYCLE METHOD------------------------> */}
      {/* <LifeCycleCom /> */}
      {/* <LoginPopUp /> */}

      {/* <---------------------HOOK------------------------> */}
      {/* <UseEffect /> */}
      {/* <UseEffectPro /> */}
      {/* <UeRefCom /> */}
      {/* <UseContaxtCom /> */}

      {/* <---------------------INPUT------------------------> */}
      {/* <InputCom /> */}
      {/* <MultiInput /> */}
      {/* <Radio /> */}
      {/* <CheckBox /> */}
      {/* <MultiUser /> */}
      {/* <SelectCom /> */}
      {/* <SearchInput /> */}
      {/* <LocalStorageMultiInputs2 /> */}

      {/* <---------------------LOCALSTORAGE------------------------> */}
      {/* <LocalStorageCom /> */}

      {/* <---------------------ROUTER------------------------> */}
      {/* <Router /> */}
      {/* <ProtectedRouter /> */}
      {/* <ProtectedProject /> */}

      {/* <---------------------TASK------------------------> */}
      {/* <Product /> */}
      {/* <ToDoList /> */}

      <ToastContainer />
    </div>
  );
}

export default App;
