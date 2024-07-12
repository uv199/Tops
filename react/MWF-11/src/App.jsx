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
      <MainPage/>
    </div>
  );
}
