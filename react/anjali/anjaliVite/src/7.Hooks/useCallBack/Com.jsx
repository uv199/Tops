import React, { useEffect, useState } from "react";

export default function Com({ generateArr }) {
  let [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(generateArr());
  }, [generateArr]);
  return (
    <div>
      {arr.map((e, i) => {
        return (
          <h1 key={i}>
            Count + {i + 1} = {e}{" "}
          </h1>
        );
      })}
    </div>
  );
}
