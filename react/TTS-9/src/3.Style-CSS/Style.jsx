import React from "react";
import "./index.css";
import ReactStrap from "./ReactStrap";

export default function Style() {
  let divStyle = {
    height: "100px",
    width: "100px",
    backgroundColor: "Black",
    color: "white",
  };
  return (
    <>
      <h1 style={{ color: "lightcoral" }}> inline CSS</h1>
      <hr />
      <h3>style variable</h3>
      <div style={divStyle}> </div>
      <hr />
      <div className="container">Hello External CSS</div>
      <hr />
      <div>
        <h1 className="text-danger text-decoration-line-through m-4 border border-black p-4 text-center ">
          Hello BOOTSTRAP
        </h1>
      </div>
    </>
  );
}
