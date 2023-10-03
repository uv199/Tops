import React from "react";

export default function Header() {
  const headStyle = {
    color: "white",
  };
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "lightcoral",
        textAlign: "center",
      }}
    >
      <h1 style={headStyle}>Header</h1>
    </div>
  );
}
