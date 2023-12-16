import React from "react";

export default function Header() {
  let subHeader = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <div
      style={{
        color: "red",
        height: "20vh",
        width: "100vw",
        backgroundColor: "lightcoral",
      }}
    >
      <h1>Header</h1>
      <div style={subHeader}>sub header</div>
    </div>
  );
}
