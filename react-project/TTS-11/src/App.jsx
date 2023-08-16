import { useState } from "react";
import "./App.css";
import HomeCom from "./ui/pages/home/HomeCom";
import Women from "./ui/pages/women/Women";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <HomeCom />
      {/* <Women /> */}
    </>
  );
}

export default App;
