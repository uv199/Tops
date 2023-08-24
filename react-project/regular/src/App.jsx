import { createContext, useState } from "react";
import "./App.css";
import Home from "./ui/pages/Home/Home";
import Women from "./ui/pages/Women/Women";
import FooterCom from "./ui/components/FooterCom";
import LoginCom from "./ui/pages/login/LoginCom";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

export const Searchcontext = createContext();
function App() {
  let [searchText, setSearchText] = useState("test");
  return (
    <>
      <BrowserRouter>
        <Searchcontext.Provider
          value={{ searchText, setSearchText: setSearchText }}
        >
          <Router />
        </Searchcontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
