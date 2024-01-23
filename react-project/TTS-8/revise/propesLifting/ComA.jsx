import React, { useState } from "react";
import ComB from "./ComB";

export default function ComA() {
  let [user, setUser] = useState("");
  const getName = (name) => {
    setUser(name);
  };
  return (
    <div>
      <h1>Name is {user}</h1>
      <ComB getName={getName} />
    </div>
  );
}
