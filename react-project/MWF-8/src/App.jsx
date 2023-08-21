import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./ui/pages/Home/Home";
import LoginForm from "./ui/components/LoginForm";
import Women from "./ui/pages/women/Women";

export const SearchContext = createContext();
function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      {/* <h1>{searchText}</h1> */}
      <SearchContext.Provider value={{ setSearchText, searchText }}>
        <Home />
        <Women />
      </SearchContext.Provider>
      <LoginForm />
    </>
  );
}

export default App;
