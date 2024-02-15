import React, { useEffect, useState } from "react";

export default function DisplayArr({ cbFun }) {
  let [arr, setArr] = useState([]);

  useEffect(() => {
    let a = cbFun();
    console.log("-----------  a----------->", a);
    setArr(a);
  }, [cbFun]);

  return (
    <div>
      <h3>number = {arr[0]}</h3>
      <h3>number + 1 = {arr[1]}</h3>
      <h3>number + 2 = {arr[2]}</h3>
    </div>
  );
}
