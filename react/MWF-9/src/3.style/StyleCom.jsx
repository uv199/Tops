import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";

export default function StyleCom() {
  let style = {
    color: "lightcoral",
    backgroundColor: "black",
  };
  return (
    <div>
      <h1
        style={{
          color: "lightcoral",
          backgroundColor: "black",
        }}
      >
        StyleCom-inline
      </h1>
      <h1 style={style}>StyleCom</h1>
      <h1 className="head">StyleCom-exyernal</h1>
      <div className="box">BOX</div>
      <Button variant="success">Click me</Button>
    </div>
  );
}
