import React, { useState } from "react";

export default function SelectInput() {
  let [userType, setUserType] = useState("");
  const getSelect = (e) => {
    setUserType(e.target.value);
  };
  return (
    <div>
      <select onChange={(e) => getSelect(e)} value={userType}>
        <option value="">select</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
      </select>
    </div>
  );
}
