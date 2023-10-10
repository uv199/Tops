import React, { useContext } from "react";

import { UserContext } from "./Usecontaxt";

export default function Com_B2({ name_B2 }) {
  const data = useContext(UserContext);
  console.log("data", data);
  return (
    <>
      {/* <h1>My Name is {data.userData.name}</h1> */}
      <label htmlFor="namne">Name</label>
      <input
        type="text"
        onChange={(e) =>
          data.setUserData({ ...data.userData, name: e?.target?.value })
        }
      />
    </>
  );
}
