import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const colorArr = ["red", "green", "yellow", "orange", "lightBlue", "pink","brown"];
export default function BGColorChnage() {
  let [index, setIndex] = useState(0);

  const incrementHandler = () => {
    if (index ===colorArr.length-1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: colorArr[index] }}
    >
      <h1 className="text-3xl">{index}</h1>
      <h1 className="text-3xl">{colorArr[index]}</h1>
      <Button onClick={() => incrementHandler()}>Chnage Color</Button>
    </div>
  );
}
