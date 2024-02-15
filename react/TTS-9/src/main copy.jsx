import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import FunCom from "./2.component/Functional/FunCom";

let obj = { name: "JEEL", age: 23 };
let x = <h1>What is this.?</h1>;
let arr = ["urvish", "jeel", "nimesh"];
let nameDiv = arr.map((e) => {
  return <h1>{e}</h1>;
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <h1>hello World</h1>
    <h1>hello World</h1> */}
    {/*  -----use {} to write js----  */}
    {/* <h1>{15 + 15}</h1> */}
    {/* {x} */}
    {/*  -----use of map----- */}
    {/* {arr.map((e) => {
      return <h1>{e}</h1>;
    })}
    <hr />
    {nameDiv} */}
    <hr />
    {/* --- can't print object----- */}
    {/* <h1>{obj.name}</h1> */}
    <hr />
    {/* --- can print array----- */}
    {/* <h1>{arr}</h1> */}
    {/*  -----print value of array */}
    {/* <h1>{arr[0]}</h1>
    <h1>{arr[1]}</h1>
    <h1>{arr[2]}</h1> */}
    {/* -------componet------- */}
    <FunCom />
  </React.StrictMode>
);
