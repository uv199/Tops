import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./ui/pages/Home/Home";
import Women from "./ui/pages/Women/Women";
import FooterCom from "./ui/components/FooterCom";

export const Searchcontext = createContext(null);
function App() {
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Searchcontext.Provider value={{ searchText:searchText, setSearchText:setSearchText }}>
        <Home />

        {/* <Women />
      <Women /> */}
      </Searchcontext.Provider>
      <FooterCom />
    </>
  );
}

export default App;
