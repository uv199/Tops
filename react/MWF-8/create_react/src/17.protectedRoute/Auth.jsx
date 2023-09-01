import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);
export default function Auth({ children }) {
  let [user, setUser] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    let data = localStorage.getItem("user");
    setUser(JSON.parse(data));
  });

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/profile");
  };
  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ login, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const authUser = () => {
  return useContext(AuthContext);
};
