import React, { useState } from "react";

export default function Conditio() {
  let [userType, setUserType] = useState("");
  return (
    <div>
      {userType === "admin" && <h1>Admin</h1>}
      {(userType === "admin" || userType === "employee") && <h1>Employee</h1>}
      {userType && <h1>User</h1>}
    </div>
  );
}
