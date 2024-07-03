import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

export default function UberTask() {
  let [arr, setArr] = useState([1, 1, 1, 1, 0, 0, 1, 1, 1]);
  let [index, setIndex] = useState([]);

  const colorHandler = (i) => {
    let copyArr = [...arr];
    copyArr[i] = 2;
    setIndex([...index, i]);
    setArr(copyArr);
  };

  const reverseHandler = () => {
    let copyIndex = [...index];
    let copyArr = [...arr];
    let id = null;
    id = setInterval(async () => {
      let i = copyIndex.pop();
      copyArr[i] = 1;
      await setArr([...copyArr]);
      if (copyIndex.length === 0) {
        clearInterval(id);
      }
    }, 1000);
  };

  return (
    <div className="grid gap-2 grid-cols-3">
      {arr.map((e, i) => {
        return (
          <div
            onClick={() => colorHandler(i)}
            style={{
              backgroundColor: e === 1 ? "white" : "green",
              visibility: e ? "visible" : "hidden",
            }}
            className="w-[100px] h-[100px] border border-black"
          >
            {e}
          </div>
        );
      })}
      <Button onClick={() => reverseHandler()}>Reverse</Button>
    </div>
  );
}
