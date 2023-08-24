import { createContext, useState } from "react";
import "./App.css";
import HomeCom from "./ui/pages/home/HomeCom";
import Women from "./ui/pages/women/Women";
import LoginForm from "./ui/pages/login/LoginForm";

export const SearchContext = createContext();

function App() {
  const [searchTxt, setSearchTxt] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ searchTxt, setSearchTxt }}>
        {/* <HomeCom searchTxt={searchTxt} /> */}
        <Women searchTxt={searchTxt} />
      </SearchContext.Provider>

      {/* <LoginForm /> */}
    </>
  );
}

export default App;
