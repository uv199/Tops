import React, { useContext } from "react";

import { NameContaxt } from "./UseContaxtCom";
import { Button, Input, Label } from "reactstrap";

export default function ComA() {
  const data = useContext(NameContaxt);
  console.log("-----------  datAAAAAAa----------->", data);
  return (
    <>
      <Input
        id="name"
        placeholder="Enter your name"
        onChange={(e) => data.setName(e?.target?.value)}
      />
    </>
  );
}
