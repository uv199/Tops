import React, { useState } from "react";
import "./sunChokdi.css";
import { Button } from "reactstrap";
let obj = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};
export default function SunChokdi() {
  let [boxIndex, setIndex] = useState(obj);
  let [isCross, setIsCross] = useState(true);

  const clickEvent = (index) => {
    setIndex({ ...boxIndex, [index]: isCross ? "x" : "o" });
    setIsCross(!isCross);
  };

  let combinations = (str) => {
    let tempArr = [];
    let resultArr = [];
    for (let i = 0; i < str.length; i++) {
      tempArr = [str[i]];
      let index = 0;
      while (resultArr[index]) {
        if (resultArr[index].length === 3) {
          tempArr.push(resultArr[index] + str[i]);
        }
        resultArr[index] + str[i];
        index++;
      }
      resultArr = resultArr.concat(tempArr);
    }
    return resultArr;
  };
  console.log(combinations("123456789"));

  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="box" onClick={() => clickEvent(1)}>
          {boxIndex[1]}
        </div>
        <div className="box" onClick={() => clickEvent(2)}>
          {boxIndex[2]}
        </div>
        <div className="box" onClick={() => clickEvent(3)}>
          {boxIndex[3]}
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="box" onClick={() => clickEvent(4)}>
          {boxIndex[4]}
        </div>
        <div className="box" onClick={() => clickEvent(5)}>
          {boxIndex[5]}
        </div>
        <div className="box" onClick={() => clickEvent(6)}>
          {boxIndex[6]}
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="box" onClick={() => clickEvent(7)}>
          {boxIndex[7]}
        </div>
        <div className="box" onClick={() => clickEvent(8)}>
          {boxIndex[8]}
        </div>
        <div className="box" onClick={() => clickEvent(9)}>
          {boxIndex[9]}
        </div>
      </div>
      <Button color="danger" onClick={() => setIndex(obj)}>
        Reset
      </Button>
    </>
  );
}
