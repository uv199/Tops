import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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
