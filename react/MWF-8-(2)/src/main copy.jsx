import React from "react";
import ReactDOM from "react-dom/client";

let head = (
  <header>
    <h1>Header</h1>
  </header>
);

let nameArr = ["urvish", "nirmal", "dhaval", "sona"];

// let printDiv = nameArr

// get root element
const root = ReactDOM.createRoot(document?.getElementById("root"));

// render some elemenet in root
root.render(
  <div>
    {head}
    <h1>{5 + 10}</h1>
    {nameArr.map((e, i) => {
      return (
        <div>
          <h1>
            {i + 1}.{e}
          </h1>
          <hr />
        </div>
      );
    })}
  </div>
);



