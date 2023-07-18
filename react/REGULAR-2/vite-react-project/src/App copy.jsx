// package
import { useState } from "react";

// file
import "./App.css";
import ClassCom from "./components/ClassCom";
import ClassCom2 from "./components/ClassCom2";
import FunCom from "./components/FunCom";
import FunCom2 from "./components/FunCom2";
import UseStateFun from "./uses_state/UseStateFun";
import UseStateClass from "./uses_state/UseStateClass";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* ----------------------------component--------------------------  */}
      {/* <ClassCom />
      <ClassCom2 />
      <FunCom />
      <FunCom2 /> */}

      {/* ----------------------------use-state--------------------------  */}
      {/* <UseStateFun /> */}
      {/* <UseStateClass /> */}
      {/* myname */}
      {/* myName
      MyName
      my_name */}
      <div className="head_container">
        <div className="head_logo">
          <h1>Tops</h1>
        </div>
        <div className="head_list">
          <h2>home</h2>
          <h2>about</h2>
          <h2>service</h2>
        </div>
      </div>

      <div className="body_container">
        <div className="content_1">
          <h1>
            Serving you <br />
            since 1989.
          </h1>
          <p>
            Acme Outdoors is an outdoor and adventure <br /> shop located in the
            Boathouse District in <br />
            Oklahoma City.
          </p>
          <button>Shop merch</button>
        </div>
        <div className="container_2">
          <div className="sub1_con_2">
            <p className="sub_title">
              WAYS TO SUPPORT{" "}
              <span className="title_1">
                Support Acme Outdoors.
                {/* <b>Support Acme Outdoors.</b> */}
              </span>
            </p>
            <p>
              COVID-19 has forced us to close our retail space, but we need{" "}
              <br />
              support from patrons like yourself now more than ever. Below,
              we’ve
              <br /> listed the best ways to help us through this season.
            </p>
          </div>
          <div className="sub2_con_2">sub2</div>_1
        </div>
      </div>
    </div>
  );
}

export default App;
