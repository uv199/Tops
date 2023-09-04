import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export default function Auth({ children }) {
  let [user, setUser] = useState({});

  // navigation variable
  const navigate = useNavigate();

  // to login
  function login(userObj) {
    localStorage.setItem("loginUser", JSON.stringify(userObj));
    setUser(userObj);
    navigate("/");
  }

  // to logout
  function logout() {
    localStorage.removeItem("loginUser");
    setUser();
    navigate("/login");
  }

  // to get data from localstorage and set that into user state
  useEffect(() => {
    let data = localStorage.getItem("loginUser");
    setUser(JSON.parse(data));
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ login, logout, user }}>
        {/* to wrap all children of Auth component*/}
        {children}
      </AuthContext.Provider>
    </>
  );
}

// to optimise code of usecontext
export const userAuth = () => {
  return useContext(AuthContext);
};
