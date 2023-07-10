import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let x = <h1>test-------</h1>;
ReactDOM.createRoot(document.getElementById("root")).render(
  <h1>
    test {5 + 10} {x}
  </h1>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
