import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let head = <h1>Header</h1>;

let arr = ["jay", "seema", "neema"];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {head}
    {5 + 5}
    {arr.map((e) => {
      console.log("e", e);
      return <h1>{e}</h1>;
    })}
  </React.StrictMode>
);
