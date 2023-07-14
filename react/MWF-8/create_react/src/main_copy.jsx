import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ClassCom from "./component/ClassCom.jsx";
import ClassCom2 from "./component/classCom2.jsx";
import Fun from "./component/fun.jsx";
import Header from "./component/layout/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ==========================================================================

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Fun />
//     {/* <ClassCom />
//     <ClassCom />
//     <ClassCom />
//     <ClassCom />
//     <ClassCom2 /> */}
//   </React.StrictMode>
// );

// ====================================just for understand
// let header = (
//   <h1>
//     <p1>test</p1>
//   </h1>
// );
// let body = <h1>body tag</h1>;
// let footer = <h1>footer tag</h1>;

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {header}
//     {header}
//     {body}
//     {footer}
// );

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>test -root {header}</h1>);
