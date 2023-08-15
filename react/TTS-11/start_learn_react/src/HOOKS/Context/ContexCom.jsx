import React, { createContext, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const UserContext = createContext();
export default function ContexCom() {
  let [user, setUser] = useState("meet");
  return (
    <>
      <h1>ContexCom</h1>
      <UserContext.Provider value={{ setUser, user: user }}>
      <ComA />
        <ComB name={"urvish"} />
      </UserContext.Provider>

      <h1>{user}</h1>
    </>
  );
}

// export const NameContext = createContext();

// export default function ContexCom() {
//     return (
//       <>
//         <h1>ContexCom</h1>
//         <NameContext.Provider value={"URVISH"}>
//           <ComA />
//           <ComB name={"urvish"} />
//         </NameContext.Provider>

//         <h1>{user}</h1>
//       </>
//     );
//   }
