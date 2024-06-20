import React from "react";
import RoundCompo from "./RoundCompo";
import { Button } from "@material-tailwind/react";
import airPodsMax from "../ConMain/airPodsMax.png";

export default function MiddleUpper() {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        backgroundColor: "#EEFCFD",
        borderRadius: "10px",
        margin: "50px",
        marginTop: "100px",
        height: "520px",
      }}
    >
      <div style={{}}>
        <div style={{ width: "30%", padding: "50px" }}>
          <h4 style={{ color: "red" }}>Great Deal</h4>
          <h1 style={{ fontSize: "45px", paddingTop: "20px" }}>
            Enhance Your Music Experience
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "50px",
            width: "25%",
            paddingLeft: "15px",
          }}
        >
          <RoundCompo />
          <RoundCompo />
          <RoundCompo />
          <RoundCompo />
        </div>
        <div style={{}}>
          <Button
            style={{
              backgroundColor: "blue",
              color: "white",
              height: "50px",
              width: "110px",
              marginLeft: "40px",
              marginTop: "40px",
              fontWeight: "bolder",
              borderRadius: "10px",
            }}
          >
            Check it Out
          </Button>
        </div>
      </div>
      <div>
        <img
          src={airPodsMax}
          style={{ position: "relative", bottom: "180px", right: "80px" }}
        />
      </div>
    </div>
  );
}
