import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function Auth({ children }) {
  let [user, setUser] = useState(null);

  let navigate = useNavigate();

  function login(data) {
    localStorage.setItem("userData", JSON.stringify(data));
    setUser(data);
    navigate("/profile");
  }

  function logOut() {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/login");
  }

  useEffect(() => {
    let jsonData = localStorage.getItem("userData");
    let convertedData = JSON.parse(jsonData);
    setUser(convertedData);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, login, logOut }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const authData = () => {
  return useContext(AuthContext);
};
