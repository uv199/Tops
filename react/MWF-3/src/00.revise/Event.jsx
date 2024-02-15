import React, { useState } from "react";
import { Button } from "reactstrap";

export default function Event() {
  let [index, setIndex] = useState(null);
  let nameArr = ["pavan", "subham", "tejas", "rupali"];

  const clickHandler = (currentIndex, data) => {
    console.log("data", data);
    console.log("currentIndex", currentIndex);
    setIndex(currentIndex);
  };
  const clickHandler_2 = (data) => {
    console.log("data", data);
  };
  return (
    <div>
      {nameArr.map((e, i) => {
        return (
          <div className="d-flex">
            <h2 style={{ color: index === i ? "red" : "black" }}>
              {i + 1}. {e}
            </h2>
            <Button color="danger" onClick={() => clickHandler(i, e)}>
              Change Color
            </Button>
            <Button color="danger" onClick={() => clickHandler_2(e)}>
              Log Data
            </Button>
          </div>
        );
      })}
    </div>
  );
}

/*
pavan => clickHandler(0)
subham => clickHandler(1)...
rupali => clickHandler(3)
*/
