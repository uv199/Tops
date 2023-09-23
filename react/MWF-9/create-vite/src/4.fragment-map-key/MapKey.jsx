import React from "react";

export default function MapKey() {
  let data = ["urvish", "archit", "laxmi"];
  let dataObj = [{ name: "urvish" }, { name: "archit" }, { name: "laxmi" }];
  return (
    <>
      {/* <h1>{data[0]}</h1>
      <h1>{data[1]}</h1>
      <h1>{data[2]}</h1> */}
      {/* {data.map((e, i) => {
        return (
          <div key={i}>
            <h1>hello ,</h1>
            <h1>My name is {e}</h1>
          </div>
        );
      })} */}
      {dataObj.map((e, i) => {
        return (
          <div key={i}>
            <h1>hello {e.name}</h1>
          </div>
        );
      })}
    </>
  );
}
