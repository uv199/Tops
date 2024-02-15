import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
const userName = [
  "urvish",
  "meet",
  "manohar",
  "saif",
  "vivek",
  "nimesh",
  "nidhipriya",
];

let blockList = ["meet", "nimesh"];

export default function UseEfreectProject() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (userName[index].length >= 6) {
      alert("Name is too long");
    }
  }, [index]);

  const chnageNameHandler = () => {
    if (userName.length - 2 < index) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <>
      <div className="border border-black p-4 d-flex flex-column gap-2">
        <h1>Name is {userName[index]}</h1>
        <h1>Count is {count}</h1>
        <Button color="danger" onClick={() => chnageNameHandler()}>
          Chnage name
        </Button>
        <Button color="danger" onClick={() => setCount(count + 1)}>
          inc
        </Button>
      </div>
    </>
  );
}
