import React, { useContext } from "react";
import { CountContaxt } from "./UseContaxtCom";

export default function ComB() {
  let dataB = useContext(CountContaxt);
  console.log("-----------  dataB----------->", dataB);
  return (
    <div>
      <hr />
      <h3>Count comB - {dataB}</h3>
    </div>
  );
}
