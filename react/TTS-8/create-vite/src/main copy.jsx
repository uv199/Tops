import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Test from "./Test";

let head = <h1>How are you ?</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Test />
    <App />
    <h1>Hello world</h1>
    <div>{head}</div>
    <div>
      {[1, 2, 3].map((e) => {
        return <h1>{e}</h1>;
      })}
    </div>

    <Button color="danger">danger</Button>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
