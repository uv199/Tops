import React, { createContext, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const UserContaxt = createContext();

export default function MainContext() {
  let [name, setName] = useState("urvish");
  return (
    <div>
      <UserContaxt.Provider value={{ name, setName }}>
        <AuthContaxt.Provider value={"hello"}>
          <ComA />
        </AuthContaxt.Provider>
        <ComB />
      </UserContaxt.Provider>
    </div>
  );
}
