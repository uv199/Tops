import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import icon from "../public/icons/image.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={icon} alt="" />
    </>
  );
}

export default App;
