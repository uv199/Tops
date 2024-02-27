import React from "react";

export default function Header() {
  let style = {
    color: "white",
  };
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "darkgrey",
      }}
    >
      <h1 style={style}>HEADER</h1>
    </div>
  );
}
