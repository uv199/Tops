import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

/*
// only for explaination
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>Helllo world</h1>
    <h2>Urvish</h2>
  </div>
);
*/
