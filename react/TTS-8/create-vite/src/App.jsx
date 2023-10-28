import ClassCom from "./2.components/ClassCom";
import FunCom from "./2.components/FunCom";
import Test from "./2.components/Test";
import Accordian from "./3.style-bootstrap/Accordian";
import ReactStarpCom from "./3.style-bootstrap/ReactStarpCom";
import ReactStrap2 from "./3.style-bootstrap/ReactStrap2";
import HeaderCom from "./0.Task/components/HeaderCom";
import FotterCom from "./0.Task/components/FotterCom";
import "./App.css";
import Body from "./0.Task/components/Body";
import ClassState from "./4.State/ClassState";
import FunState from "./4.State/FunState";
import ProposCom from "./5.props/ProposCom";
import FragmantCom from "./6.fragmant/FragmantCom";
import CondCom from "./7.conditionalRendaring/CondCom";
import MapKeyCom from "./8.map-key/MapKeyCom";
import ColorCom from "./0.Task/ColorBox/ColorCom";
import ColorCom2 from "./0.Task/ColorBox/ColorCom2";
import UseEffectCom from "./9.HOOK/useEffect/UseEffectCom";
import UseEffectPro from "./0.Task/Hook/UseEffectPro";
import UseRefCom from "./9.HOOK/useRef/UseRefCom";
import InputCom from "./10.input/InputCom";
import InputUpdate from "./10.input/InputUpdate";
import MultipleInput from "./10.input/multipleInput/MultipleInput";
import LifeCycle from "./11.LifeCycle_Methos/LifeCycle";
import SearchCom from "./10.input/search/SearchCom";
import Router from "./12.Routing/Router";
import ProRouter from "./13.ProtectedRoute/ProRouter";
import UseMemocom from "./9.HOOK/useMemo/UseMemocom";
import FormCom from "./14.localstorage/FormCom";
import LocalStorage from "./14.localstorage/LocalStorage";
import { ToastContainer } from "react-toastify";
import Usecontaxt from "./9.HOOK/Use-contaxt/Usecontaxt";
import UseReducer from "./9.HOOK/Use-Reducer/UseReducer";
import UseCallBack from "./9.HOOK/UseCallBack/UseCallBack";
import Select_Radio from "./10.input/Select_Radio";
import AppRedux from "./15.ReduxToolKit/AppRedux";

function App() {
  return (
    <>
      {/* <--------------------Task-------------------------> */}
      {/* <HeaderCom />
      <Body />
      <FotterCom /> */}
      {/* <ColorCom /> */}
      {/* <ColorCom2 /> */}
      {/* <UseEffectPro/> */}
      {/* <--------------------Component-------------------------> */}
      {/* <FunCom />0 */}
      {/* <ClassCom /> */}
      {/* <--------------------Component-------------------------> */}
      {/* <ReactStarpCom /> */}
      {/* <ReactStrap2 />
      <Accordian /> */}
      {/* <--------------------State-------------------------> */}
      {/* <ClassState /> */}
      {/* <FunState /> */}
      {/* <--------------------Props-------------------------> */}
      {/* <ProposCom /> */}
      {/* <--------------------Fragmant-------------------------> */}
      {/* <FragmantCom /> */}
      {/* <--------------------Conditional-rendaring-------------------------> */}
      {/* <CondCom /> */}
      {/* <--------------------Map And Key-------------------------> */}
      {/* <MapKeyCom /> */}
      {/* <--------------------HOOK-------------------------> */}
      {/* <UseEffectCom /> */}
      {/* <UseRefCom /> */}
      {/* <UseMemocom /> */}
      {/* <UseReducer /> */}
      {/* <Usecontaxt /> */}
      {/* <UseCallBack /> */}

      {/* <--------------------Input-------------------------> */}
      {/* <InputCom /> */}
      {/* <InputUpdate /> */}
      {/* <MultipleInput /> */}
      {/* <SearchCom /> */}
      {/* <Select_Radio /> */}

      {/* <--------------------LifeCycle-------------------------> */}
      {/* <LifeCycle /> */}
      {/* <--------------------Router-------------------------> */}
      {/* <Router /> */}
      {/* <ProRouter /> */}
      {/* <--------------------Localstorage-------------------------> */}
      {/* <FormCom /> */}
      {/* <LocalStorage /> */}
      {/* <ToastContainer limit={1} newestOnTop={false} /> */}

      {/* <--------------------Redux-------------------------> */}
      <AppRedux />
    </>
  );
}

export default App;
