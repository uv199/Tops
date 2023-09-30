import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const nameEle = <h1>URVISH</h1>;
const arr = ["neel", "uv", "subham"];
const data = arr.map((e) => {
  return <h1>---- {e}</h1>;
});
const obj = {
  name: "urvish",
  age: 23,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>hello world</h1>
    {nameEle}
    <h1>{90 + 100}</h1>
    {arr.map((e) => {
      console.log("----", e);
      return <h1>My name is {e}</h1>;
    })}
    {data}
    {/* can't use object directly */}
    {/* <h1>{obj}</h1>  */}
  </div>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
