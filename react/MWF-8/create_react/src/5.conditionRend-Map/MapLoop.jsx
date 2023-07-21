import React from "react";

export default function MapLoop() {
  let names = ["urvish", "tejash", "akshit"];
  let data = [
    { name: "urvish", age: 20, },
    { name: "tejash", age: 20 },
    { name: "akshit", age: 20 },
  ];
  return (
    <div>
      {names.map((e) => {
        return <h1>{e}</h1>;
      })}

      {data.map((e) => {
        return (
          <div>
            <h1>Name : {e.name}</h1>
            <h1>age : {e.age}</h1>
          </div>
        );
      })}
    </div>
  );
}
