import React, { useState, createContext } from "react";
import Com_A from "./Com_A";
import Com_B from "./Com_B";

export const UserContext = createContext(null);
export const CarContext = createContext(null);

export default function Usecontaxt() {
  const [userData, setUserData] = useState({ name: "Urvish", age: 26 });

  return (
    <>
      <div>
        <h1>My Name is {userData.name}</h1>

        <UserContext.Provider value={{ userData, setUserData }}>
          <CarContext.Provider value={"Mustang-salby"}>
            <Com_A age={userData.age} />
          </CarContext.Provider>
          <Com_B name_B={userData.name} />
        </UserContext.Provider>
      </div>
    </>
  );
}
