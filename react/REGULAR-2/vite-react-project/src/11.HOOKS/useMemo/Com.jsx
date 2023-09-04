import React, { useEffect, useState } from "react";

export default function Com({ arr }) {
  let [data, setData] = useState([]);
  useEffect(() => {
    setData(arr());
  },[arr]);
  return (
    <div>
      {data.map((e) => {
        return <h1>{e}</h1>;
      })}
    </div>
  );
}
