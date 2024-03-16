import { LogOut } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Profile() {
  let [user, setUser] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("login-user");
    navigate("/login");
  };

  useEffect(() => {
    let jsonData = localStorage.getItem("login-user") || "{}";
    let normalData = JSON.parse(jsonData);
    setUser(normalData);
  }, []);

  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <div
          className="d-flex justify-content-center rounded-2 "
          style={{ backgroundColor: "#FFE8E8" }}
        >
          <div
            style={{ backgroundColor: "#ffff" }}
            className="p-4 pt-1 w-25 mt-5 mb-5 border rounded-2"
          >
            <h1 className="text-center">User Profile</h1>
            <hr />
            Email : {user.email}
            <br />
            password: {user.password}
            <Button
              onClick={() => logOutHandler()}
              className="mt-3 w-100"
              color="danger"
            >
              Logout <LogOut />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
