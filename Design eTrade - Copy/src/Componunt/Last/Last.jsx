import React from "react";
import Upper from "../Container/Upper";
import Content from "./Content";

export default function Last() {
  return (
    <div
      style={{
        marginTop: "700px",
        backgroundColor: "#E1E1E1",
        textAlign: "center",
        padding: "60px",
      }}
    >
      <Upper />
      <Content />
      <button
        style={{
          display: "block",
          margin: " auto",
          marginTop: "100px",
          backgroundColor: "#F89880 ",
          border: "none",
          height: "25px",
          width: "120px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        View all Products
      </button>
    </div>
  );
}
