import { Eye, EyeOff, LogOut } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Profile() {
  let [user, setUser] = useState({});
  let [show, setShow] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem("loginUser") || "{}"));
  }, []);
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/login");
    localStorage.clear();
  };
  return (
    <div>
      <div className="border border-dark p-4 rounded-3 mt-4">
        <h1>{user?.name || "Not given"} </h1>
        <h2>{user?.email}</h2>
        <div>
          <input
            style={{ border: "1px solid lightGray" }}
            type={show ? "text" : "password"}
            className="border-none"
            value={user.password}
          />
          {show ? (
            <EyeOff className="ms-2" onClick={() => setShow(false)} />
          ) : (
            <Eye className="ms-2" onClick={() => setShow(true)} />
          )}
        </div>
        <Button onClick={logoutHandler} className="mt-4 w-100" color="danger">
          <LogOut />
        </Button>
      </div>
    </div>
  );
}
