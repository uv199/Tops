import React from "react";
import ClassCom from "../class/ClassCom";

export default function FunCome() {
  return (
    <div>
      <h1>FunCome</h1>
      {[1, 2, 3].map((e) => {
        return <ClassCom/>;
      })}
      <hr />
    </div>
  );
}
