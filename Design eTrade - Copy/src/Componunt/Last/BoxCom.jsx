import React from "react";
import Remote from "../Last/Remote.png";

export default function BoxCom() {
  return (
    <div
      style={{
        marginLeft: "100px",
        marginTop: "100px",
        height: "200px",
        width: "160px",
        // border: "1px solid black",
        position: "relative",
        boxShadow: "10px 20px 20px 5px black",
      }}
    >
      <div
        style={{
          // border: "1px solid black",
          height: "160px",
          width: "160px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#EFEFEF",
        }}
      >
        <div
          style={{
            backgroundColor: "blue",
            position: "absolute",
            right: "-25px",
            top: "10px",
            borderRadius: "3px",
            width: "45px",
            color: "white",
          }}
        >
          <h6>20% Off</h6>
        </div>
        <img src={Remote} style={{ height: "120px" }} />
      </div>
      <div>
        <h5>Gaming Remote </h5>
        <h4 style={{ fontWeight: "bolder" }}>20$ </h4>
      </div>
    </div>
  );
}
