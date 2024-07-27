import React, { createContext } from "react";
import ComA from "./ComA";

export const UserContext = createContext();

export default function UseContextCom() {
  let name = "urvish patel";
  return (
    <div>
      <UserContext.Provider value={{ name: name }}>
        <ComA name={name} />
      </UserContext.Provider>
    </div>
  );
}
