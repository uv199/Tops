import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let head = <h1>Header</h1>;

let nameArr = ["uv", "js", "ts"];

let user = { name: "uv", age: 23, hobby: [1, 2, 3, 4] };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <h1>5 + 5 </h1>
    <h1>{5 + 5}</h1>
    {head}

    <hr />``

    <h1>name : {user.name}</h1>
    <h1>age : {user.name}</h1>

    <hr />

    {nameArr.map((e) => {
      return <h1>{e}</h1>;
    })}
    <hr />

    <h1>{nameArr[0]}</h1>
    <h1>{nameArr[1]}</h1>
    <h1>{nameArr[2]}</h1>
  </React.StrictMode>
);
