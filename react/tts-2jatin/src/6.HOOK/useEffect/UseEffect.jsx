import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  /*
  // every time whenerever anything chnage in this componenet
  // state props
  useEffect(() => {
    console.log("-----With out dependancy----->");
  });
  */

  // only 1st time when page render
  useEffect(() => {
    console.log("-----With black array [] dependancy----->");
  }, []);

  //it will call when count's value will be changed
  useEffect(() => {
    console.log("-----With [count] dependancy----->");
  }, [count]);

  //it will call when count2's value will be changed
  useEffect(() => {
    console.log("-----With [count-2] dependancy----->");
  }, [count2]);

  //it will call when count2's value will be changed
  useEffect(() => {
    console.log("-----With [count,count-2] dependancy----->");
  }, [count, count2]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>inc-count-1</Button>
      <hr />
      <h1>Count is {count2}</h1>
      <Button onClick={() => setCount2(count2 + 1)}>inc-count-2</Button>
    </div>
  );
}
