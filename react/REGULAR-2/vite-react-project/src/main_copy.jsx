import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import async from "async"

let root = ReactDOM.createRoot(document.getElementById("root"));

let a = 20;
let b = 10;
let headTag = <h1>urvish patel</h1>;
let body = <h1>urvish patel body</h1>;
// root.render(headTag);
// root.render(<h1>test-react-app {a} b</h1>);
root.render(
  <h1>
    {/* ((TEST))-react-app{" "} */}
    {[1, 2, 3, 4, 5, 6].map((e) => {
      return e;
    })}
    <p>{body}</p>
    {body}
    {body}
  </h1>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
