import React, { useContext } from "react";
import { Input } from "reactstrap";
import { UserContaxt } from "./MainContext";

export default function ComB2() {
  const { setName } = useContext(UserContaxt);

  return (
    <>
      <Input
        placeholder="Enter Name"
        // value={name}
        name="name"
        onChange={(e) => setName(e?.target?.value)}
      />
    </>
  );
}
