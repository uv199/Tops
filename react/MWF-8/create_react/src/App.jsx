import React from "react";
import "./App.css";
import FunState from "./user_state/FunState";
import ClassState from "./user_state/ClassState";
import ClassProps from "./props/ClassProps";
import FunProps from "./props/FunProps";

function App() {
  // return <h1>{5 + 10}</h1>;
  return (
    // <div>userState
    //   {/* <FunState /> */}
    //   {/* <ClassState /> */}
    // </div>
    <div>
      {/* <ClassProps type={"head"} /> */}
      <FunProps type={{ test: "monety" }} />
    </div>
  );
}

export default App;
