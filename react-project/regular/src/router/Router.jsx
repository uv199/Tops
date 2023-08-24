import React from "react";
import FooterCom from "../ui/components/FooterCom";
import Women from "../ui/pages/Women/Women";
import { Route, Routes } from "react-router-dom";
import { Home } from "lucide-react";
import LoginCom from "../ui/pages/login/LoginCom";

export default function Router() {
  return (
    <>
      {/* <h1>{searchText}</h1> */}
      {/* <Searchcontext.Provider
        // value={{ searchText: searchText, setSearchText: setSearchText }}
        value={{ searchText, setSearchText: setSearchText }}
        >
      </Searchcontext.Provider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<LoginCom />} />
      </Routes>
    </>
  );
}
