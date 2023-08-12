import { createContext, useState } from "react";
import "./App.css";
import Home from "./ui/pages/Home/Home";
import Women from "./ui/pages/Women/Women";
import FooterCom from "./ui/components/FooterCom";

export const Searchcontext = createContext();
function App() {
  let [searchText, setSearchText] = useState("test");
  return (
    <>
      <h1>{searchText}</h1>
      <Searchcontext.Provider
        // value={{ searchText: searchText, setSearchText: setSearchText }}
        value={{ searchText, setSearchText: setSearchText }}
      >
        <Home />
        {/* <Women /> */}
      </Searchcontext.Provider>
      {/* <Women /> */}
      <FooterCom />
    </>
  );
}

export default App;
