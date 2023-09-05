import React, { useEffect, useState } from "react";

export default function ListCom({ fun }) {
  let [arr, setArr] = useState();

  useEffect(() => {
    setArr(fun());
    console.log("-----called----->");
  }, [fun]);

  return (
    <>
      <h1>ListCom</h1>
      {arr?.map?.((e) => {
        return <h2>{e}</h2>;
      })}
    </>
  );
}
