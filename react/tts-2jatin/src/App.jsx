import { ToastContainer } from "react-toastify";
// functional componenet

import ClassCom from "./2.componenet/ClassCom";
import FunctionCom from "./2.componenet/FunctionCom";
import Home from "./3.Style/Home";
import MainFile from "./3.Style/project/MainFile";
import ClassComState from "./4.state/ClassComState";
import FunctionalState from "./4.state/FunctionalState";
import FragmentCom from "./5.Map-Key/FragmentCom";
import MapKeyCom from "./5.Map-Key/MapKeyCom";
import UseContaxt from "./6.HOOK/useContaxt/UseContaxt";
import UseEffect from "./6.HOOK/useEffect/UseEffect";
import UseEffectPro1 from "./6.HOOK/useEffect/demoProject/UseEffectPro1";
import UseReducer from "./6.HOOK/useReducer/UseReducer";
import UseRefCom from "./6.HOOK/userRef/UseRefCom";
import Parent from "./7.Props/Parent";
import SingleInput from "./8.input/SingleInput";
import ConditionCom from "./9.conditionalRender/ConditionCom";
import MultiPleInput from "./8.input/MultiPleInput";
import Dropdown from "./3.Style/Dropdown";
import RadioInput from "./8.input/RadioInput";
import CheckBox from "./8.input/CheckBox";
import SelectInput from "./8.input/SelectInput";
import Localstorage from "./10.localstorage/Localstorage";
import SingleInputLocalStorage from "./8.input/SingleInputLocalStorage";

const data = [
  {
    lable: "activity",
    subDropdown: [
      {
        lable: "test1",
        subDropdown: [
          {
            lable: "test1",
            subDropdown: null,
          },
        ],
      },
    ],
  },
  {
    lable: "activity-2",
    subDropdown: [
      {
        lable: "test1",
        subDropdown: [
          {
            lable: "test1",
            subDropdown: null,
          },
        ],
      },
      {
        lable: "test1",
        subDropdown: [],
      },
    ],
  },
  {
    lable: "activity-3",
    subDropdown: [
      {
        lable: "test1",
        subDropdown: [
          {
            lable: "test1.1",
            subDropdown: [
              {
                lable: "test1.1.1",
                subDropdown: [],
              },
            ],
          },
        ],
      },
      {
        lable: "test2",
        subDropdown: [],
      },
    ],
  },
];
function App(params) {
  console.log("---->");
  return (
    <div className="flex justify-center items-center">
      {/* ------------COMPONENT------------ */}

      {/* <FunctionCom /> */}
      {/* <ClassCom /> */}

      {/* ------------STYLE------------ */}

      {/* <Home /> */}
      {/* <MainFile /> */}

      {/* ------------STATE------------ */}

      {/* <FunctionalState /> */}
      {/* <ClassComState /> */}

      {/* ------------MAP-KEY------------ */}
      {/* <MapKeyCom /> */}
      {/* <FragmentCom /> */}

      {/* ------------HOOK------------ */}
      {/* <UseEffect /> */}
      {/* <UseEffectPro1 /> */}
      {/* <UseRefCom /> */}
      {/* <UseReducer /> */}
      {/* <UseContaxt /> */}

      {/* ------------PROPS------------ */}
      {/* <Parent /> */}

      {/* ------------INPUT------------ */}
      {/* <SingleInput /> */}
      <MultiPleInput />
      {/* <RadioInput /> */}
      {/* <CheckBox /> */}
      {/* <SelectInput /> */}
      {/* <Localstorage /> */}
      {/* <SingleInputLocalStorage /> */}

      {/* ------------CONTIONAL RENDERING------------ */}
      {/* <ConditionCom /> */}
      {/* <Dropdown items={data} /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
