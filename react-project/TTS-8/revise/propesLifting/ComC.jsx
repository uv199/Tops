import React from "react";
import { Button, Input } from "reactstrap";

export default function ComC({ getName }) {
  let x = 9000000;
  return (
    <div>
      {/* <Input placeholder="Enter your name" onChange={(e) => getName("data")} /> */}
      <Button onClick={() => getName(x)}>Move data</Button>
    </div>
  );
}
