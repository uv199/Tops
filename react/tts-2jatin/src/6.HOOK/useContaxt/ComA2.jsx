import React, { useContext } from "react";
import ComA3 from "./ComA3";

import { UserContaxt } from "./UseContaxt";

export default function ComA2({ name }) {
  const comA2 = useContext(UserContaxt);
  console.log("-----------  comA2----------->", comA2);
  return (
    <div>
      <ComA3 name={name} />
    </div>
  );
}
