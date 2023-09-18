import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
let ele = <h1>ele</h1>;
let a = 50;
let b = 60;

let arr = ["urvihs", "laxmi", "archit"];
let newEle = arr.map((e) => {
  return <h1>{e}</h1>;
});

root.render(
  <div>
    <h1>test-test</h1>
    <h1>test-test</h1>
    {/* {newEle} */}
    {/* <h1>{arr[0]}</h1>
    <h1>{arr[1]}</h1>
    <h1>{arr[2]}</h1> */}
    {arr.map((e) => {
      return <h1>{e}</h1>;
    })}
    {ele}
    <h1>
      {a + b}test
      {30 + 80}
    </h1>
  </div>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
