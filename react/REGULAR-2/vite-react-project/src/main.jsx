import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ClassCom from "./components/ClassCom.jsx";
import FunCom from "./components/FunCom.jsx";
import ClassCom2 from "./components/ClassCom2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <ClassCom />
    <FunCom />
    <ClassCom2 />
  </React.StrictMode>
);
