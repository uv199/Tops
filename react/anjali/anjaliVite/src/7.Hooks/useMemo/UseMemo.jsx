import { SeparatorHorizontal } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Input } from "reactstrap";

function generateArr(x) {
  console.log("---->");
  for (let i = 0; i < 1000000000; i++) {}
  return [x + 1, x + 2, x + 3];
}

export default function UseMemo() {
  let [count, setCount] = useState(0);
  let [isGirl, setisGirl] = useState(true);
  let [data, setData] = useState([]);

  //   const arr = generateArr(count);

  const arr = useMemo(() => generateArr(count), [count]);

  // useEffect(() => {
  //   const arr = generateArr(count);
  //   setData(arr);
  // }, [count]);

  return (
    <div>
      <h1>Count is {count}</h1>

      <h1>Count + 1 = {arr[0]}</h1>
      <h1>Count + 2 = {arr[1]}</h1>
      <h1>Count + 3 = {arr[2]}</h1>

      {/* <h1>Count + 1 = {data[0]}</h1>
      <h1>Count + 2 = {data[1]}</h1>
      <h1>Count + 3 = {data[2]}</h1> */}
      <Button color="danger" onClick={() => setCount(count + 1)}>
        INC
      </Button>
      <hr />
      <h1>hello {isGirl ? "girl" : "boy"} </h1>
      <Button color="danger" onClick={() => setisGirl(!isGirl)}>
        Chnage gender
      </Button>
    </div>
  );
}
