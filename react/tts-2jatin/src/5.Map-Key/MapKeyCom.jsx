import React from "react";

let nameArr = ["urvish", "jatin", "rohit", "dharmik", "vinita"];

export default function MapKeyCom() {
  return (
    <div>
      {/* <h1>name 1 is {nameArr[0]}</h1>
      <h1>name 2 is {nameArr[1]}</h1>
      <h1>name 3 is {nameArr[2]}</h1>
      <h1>name 4 is {nameArr[3]}</h1>
      <h1>name 5 is {nameArr[4]}</h1> */}

      {nameArr.map((e, i) => {
        return (
          <div key={i}>
            <h1>
              name {i + 1} is {e}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
