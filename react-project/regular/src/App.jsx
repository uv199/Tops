import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./ui/pages/Home/Home";
import Women from "./ui/pages/Women/Women";
import FooterCom from "./ui/components/FooterCom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home /> */}

      <Women />
      <FooterCom />
    </>
  );
}

export default App;
