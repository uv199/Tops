import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function Auth({ children }) {
  let [user, setUser] = useState(null);

  const navigate = useNavigate();

  function LogIn(data) {
    localStorage.setItem("loginUser", JSON.stringify(data));
    setUser(data);
    navigate("/");
  }

  function LogOut() {
    localStorage.removeItem("loginUser");
    setUser(null);
    navigate("/login");
  }

  useEffect(() => {
    let data = localStorage.getItem("loginUser");
    setUser(JSON.parse(data));
  });

  return (
    <>
      <AuthContext.Provider value={{ LogIn, LogOut, user }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const userAuth = () => {
  return useContext(AuthContext);
};
