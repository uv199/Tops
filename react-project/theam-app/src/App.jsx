import { useState } from "react";
import "./App.css";
import NavBarCom from "./ui/component/Header/NavBarCom";
import FooterCom from "./ui/component/Footer/FooterCom";
import Home from "./ui/Pages/Home/Home";
import About from "./ui/Pages/About/About";
import Shop from "./ui/Pages/Shop/Shop";

function App() {
  return (
    <>
      <NavBarCom />
      {/* <Home /> */}
      <About />
      {/* <Shop /> */}
      <FooterCom />
    </>
  );
}

export default App;
