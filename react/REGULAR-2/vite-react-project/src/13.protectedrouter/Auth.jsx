import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
let staticData = [
  {
    email: "urvish@gmail.com",
    pass: "12345",
  },
  {
    email: "kaushal@gmail.com",
    pass: "23456",
  },
];
export default function Auth({ children }) {
  let [user, setUser] = useState(null);

  const navigate = useNavigate();

  function LogIn(data) {
    let matchUser = staticData.find((e) => e.email === data.email);
    if (matchUser) {
      localStorage.setItem("loginUser", JSON.stringify(data));
      setUser(data);
      navigate("/");
    } else {
      alert("user not found");
    }
  }

  function LogOut() {
    localStorage.removeItem("loginUser");
    setUser(null);
    navigate("/login");
  }

  useEffect(() => {
    let data = localStorage.getItem("loginUser");
    setUser(JSON.parse(data));
  }, []);

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
