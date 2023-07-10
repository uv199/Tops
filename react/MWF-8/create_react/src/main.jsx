import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import fs from "fs";

let header = (
  <h1>
    <p1>test</p1> header tag
  </h1>
);
let body = <h1>body tag</h1>;
let footer = <h1>footer tag</h1>;

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {header}
//     {header}
//     {body}
//     {footer}
//   </React.StrictMode>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>test -root {header}</h1>);
