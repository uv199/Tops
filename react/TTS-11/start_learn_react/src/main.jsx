import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ClassCom from "./class comp/ClassCom.jsx";
import Body from "./class comp/Body.jsx";
import FunCom from "./functionalComponent/FunCom.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ClassCom />
    <Body />
    <ClassCom />
    <FunCom />
    <FunCom />
  </React.StrictMode>
);

// // let x = <h1>test-------</h1>;
// let x = [1, 2, 3, 4, 5].map((e, index) => {
//   console.log(e, index);
//   return <h1 className="head">test</h1>;
// });
// let head = <h1>head</h1>;
// let body = <h1>body</h1>;
// let footer = <h1>footer</h1>;
// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   // <h1>{5 + 10}</h1>
//   <h1>
//     {head}
//     {head}
//     {body}
//   </h1>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );
