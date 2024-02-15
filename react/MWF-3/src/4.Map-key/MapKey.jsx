import React from "react";
import CardName from "./CardName";

const data = ["urvish", "shubham", "neel"];
export default function MapKey() {
  return (
    <>
      <h1>MapKey</h1>
      {/* {data.map((e, i) => {
        return (
          <div key={i}>
            <h1>my name is {e}</h1>;
          </div>
        );
      })} */}
      {data.map((e, i) => {
        return <CardName />;
      })}
      {/* <h1>my name is {data[1]}</h1>
      <h1>my name is {data[2]}</h1> */}
    </>
  );
}
