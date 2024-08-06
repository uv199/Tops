import CheckBoxCom from "./10.input/CheckBoxCom";
import MultiInput from "./10.input/MultiInput";
import RadioInput from "./10.input/RadioInput";
import SelectInput from "./10.input/SelectInput";
import SingleInput from "./10.input/SingleInput";
import UserCrud from "./10.input/UserCrud";
import Router from "./11.Router/Router";
import ClassCom from "./2.Component/ClassCom";
import FunctionCom from "./2.Component/FunctionCom";
import HomeBody from "./3.Style/HomeBody";
import FragmentCom from "./4.mapKey/FragmentCom";
import MapKeyCom from "./4.mapKey/MapKeyCom";
import ClassState from "./5.state/ClassState";
import FunState from "./5.state/FunState";
import BGColorChnage from "./5.state/Project/BGColorChnage";
import ParentCom from "./6.Props/ParentCom";
import CityPage from "./6.Props/Project/CityPage";
import MainPage from "./6.Props/Project2/MainPage";
import UseContextCom from "./7.Hook/useContaxt/UseContextCom";
import UseEffectCom from "./7.Hook/useEffect/UseEffectCom";
import UseRef from "./7.Hook/userRef/UseRef";
import LifeCycleMethod from "./8.LifeCycleMethod/LifeCycleMethod";
import Condition from "./9.ConditionalRender/Condition";

export default function App() {
  return (
    <div className="app flex justify-center items-center flex-col">
      {/* --------------COMPONENT--------------- */}
      {/* <FunctionCom /> */}
      {/* <ClassCom/>  */}

      {/* --------------STYLE--------------- */}
      {/* <HomeBody /> */}

      {/* --------------MAP-KEY--------------- */}
      {/* <MapKeyCom /> */}
      {/* <FragmentCom /> */}

      {/* --------------STATE--------------- */}
      {/* <FunState /> */}
      {/* <ClassState /> */}
      {/* <BGColorChnage /> */}

      {/* --------------PROPS--------------- */}
      {/* <ParentCom /> */}
      {/* <CityPage /> */}
      {/* <MainPage /> */}

      {/* --------------LIFE CYCLE METHOD--------------- */}
      {/* <LifeCycleMethod /> */}

      {/* --------------HOOKS--------------- */}
      {/* <UseEffectCom /> */}
      {/* <UseRef /> */}
      {/* <UseContextCom /> */}

      {/* --------------CONDITIONAL RENDERING--------------- */}
      {/* <Condition /> */}

      {/* --------------INPUT--------------- */}
      {/* <SingleInput /> */}
      {/* <MultiInput /> */}
      {/* <RadioInput /> */}
      {/* <CheckBoxCom /> */}
      {/* <SelectInput/> */}
      {/* <UserCrud /> */}
      {/* --------------ROUTER--------------- */}
      <Router />
    </div>
  );
}
