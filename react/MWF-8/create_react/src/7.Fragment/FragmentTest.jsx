import React, { Fragment } from "react";
import "./fragment.css";

export default function FragmentTest() {
  return (
    // <div className="con">
    //   <h1 className="head">test1</h1>
    //   <h1 className="head">test2</h1>
    // </div>
    <>
      <h1 className="head">test1</h1>
      <h1 className="head">test2</h1>
    </>
  );
}
