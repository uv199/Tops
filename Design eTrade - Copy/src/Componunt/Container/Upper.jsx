import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
export default function Upper() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3>Companies</h3>
        <h1>Browse By Catogory</h1>
      </div>
      <div
        style={{ fontSize: "30px", paddingTop: "15px", paddingRight: "15px" }}
      >
        <FaArrowAltCircleLeft />
        <FaArrowAltCircleRight />
      </div>
    </div>
  );
}
