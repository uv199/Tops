import React from "react";
import ReactDOM from "react-dom/client";
import FunCom1 from "./2.component/FunCom1";
import ClassCom from "./2.component/ClassCom";
import FunCom2 from "./2.component/FunCom2";
import StyleCom from "./3.style/StyleCom";
import BootstrapCom from "./3.style/BootstrapCom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./3.style/Header";

// import "./3.style/style.css"
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
let ele = <h1>ele</h1>;
let a = 50;
let b = 60;

let arr = ["urvihs", "laxmi", "archit"];
let newEle = arr.map((e) => {
  return <h1>{e}</h1>;
});

root.render(
  <div>
  <h1>test-test</h1>
  <h1>test-test</h1>
  {newEle} 
   <h1>{arr[0]}</h1>
  <h1>{arr[1]}</h1>
<h1>{arr[2]}</h1> 
{arr.map((e) => {
  return <h1>{e}</h1>;
})}
{ele}
<h1>
      {a + b}test
      {30 + 80}
    </h1>
  </div>
  );
  
  */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>test</h1>
    {/* <FunCom1 />
    <ClassCom />
    <FunCom1 /> */}
    {/* <FunCom2 /> */}
    {/* <StyleCom /> */}
    {/* <BootstrapCom /> */}
    <Header />
  </React.StrictMode>
);
