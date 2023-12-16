import React from "react";
import ReactDOM from "react-dom/client";
// import App, { sum, sub } from "./App.jsx";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// console.log("-----------  sub----------->", sub);
// console.log("-----------  sum----------->", sum);
console.log("-----------  App----------->", App);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

/*
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let head = <h1>HEADER</h1>;
let body = <h1>BODY</h1>;
let footer = <h1>FOOTER</h1>;
root.render(
  <div>
    {head}
    {body}
    <h1>Sum of 5 and 10 is {5 + 10}</h1>
    {5 + 10}
    {footer}
  </div>
);
*/
