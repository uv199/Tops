import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let name = ["urvish", "mit", "jay"];

let head = <h1>header</h1>;
let footer = <h1>footer</h1>;

let element = ReactDOM.createRoot(document.getElementById("root2"));

let person = [
  {
    name: "urvish",
    age: 23,
  },
  {
    name: "mit",
    age: 30,
  },
  {
    name: "jay",
    age: 43,
  },
];

element.render(
  <div>
    <h1>hello world</h1>
    {head}
    <body>
      <h1>person 1 name is {name[0]}</h1>
      <h1>person 2 name is {name[1]}</h1>
      <h1>person 3 name is {name[2]}</h1>

      {name.map((e, i) => {
        return (
          <div>
            <h1>
              {i + 1}. Name is {e}{" "}
            </h1>
            <h3></h3>
          </div>
        );
      })}
    </body>
    <h1>{5 + 5}</h1>
  </div>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
