import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);
export default function Auth({ children }) {
  let navigate = useNavigate();
  const getUser = () => {
    return localStorage.getItem("user");
  };
  const login = (user) => {
    localStorage.setItem("user", user);
    navigate("/profile");
  };
  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ login, logOut, getUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// export const authUser = () => {
//   return useContext(AuthContext);
// };
