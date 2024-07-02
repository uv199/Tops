import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let x = <h1>hello world</h1>;

let name = "urvish";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>{5 + 5}</h1>
    <h1>
      {name} {10 + 14}
    </h1>
    {x}
  </div>
);

/*
let root = ReactDOM.createRoot(document.getElementById("root2"))
root.render(<h1>test - worldF</h1>)
*/
