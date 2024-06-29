import React, { useContext } from "react";

import { UserContaxt } from "./UseContaxt";

export default function ComB1() {
  const data = useContext(UserContaxt);
  console.log("-----------  data-comb1----------->", data)
  return (
    <div>
      <h1>City is {"surat"}</h1>
    </div>
  );
}
