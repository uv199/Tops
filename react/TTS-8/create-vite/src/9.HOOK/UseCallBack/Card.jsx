import React, { useEffect, useState } from "react";

export default function Card({ fun }) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    console.log("====----===>");
    let x = fun();
    // console.log("x", x);
    setArr(x);
  }, [fun]);

  // every times
  useEffect(() => {
    console.log("====--every--===>");
  });

  return (
    <>
      <h1>count after 1 {arr[0]}</h1>
      <h1>count after 2 {arr[1]}</h1>
      <h1>count after 3 {arr[2]}</h1>
    </>
  );
}
