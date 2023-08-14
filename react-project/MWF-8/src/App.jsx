import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./ui/pages/Home/Home";
import LoginForm from "./ui/components/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <LoginForm /> */}
    </>
  );
}

export default App;
