import React from "react";
import headphone from "../Images/headphone.png";
import SW from "../Images/SW.png";

export default function Body() {
  return (
    <div
      style={{ backgroundColor: "#F1E5EA  ", height: "550px", display: "flex" }}
    >
      <div
        className="leftDiv"
        style={{ width: "30%", paddingLeft: "80px", paddingTop: "45px" }}
      >
        <div>
          <h1
            style={{
              fontSize: "70px",
              paddingLeft: "200px",
              paddingTop: "100px",
            }}
          >
            Roco WireLess Headphones
          </h1>
        </div>
        <div style={{ paddingLeft: "200px", paddingTop: "30px" }}>
          <button
            style={{
              height: "50px",
              width: "120px",
              borderRadius: "20px",
              fontSize: "20px",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="RightDiv">
        <div style={{ paddingLeft: "150px", display: "flex" }}>
          <img src={headphone} />
          <img style={{ height: "200px", paddingTop: "250px" }} src={SW} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
