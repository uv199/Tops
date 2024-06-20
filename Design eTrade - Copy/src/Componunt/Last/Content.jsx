import React from "react";
import BoxCom from "./BoxCom";

export default function Content() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <BoxCom />
        <BoxCom />
        <BoxCom />
        <BoxCom />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <BoxCom />
        <BoxCom />
        <BoxCom />
        <BoxCom />
      </div>
    </div>
  );
}
