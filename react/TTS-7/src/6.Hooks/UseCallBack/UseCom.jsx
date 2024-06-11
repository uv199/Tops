import React, { useEffect, useState } from "react";

export default function UseCom({ generateNum }) {
  let [arr, setArr] = useState([]);

  useEffect(() => {
    let ans = generateNum();
    setArr(ans);
  }, [generateNum]);

  return (
    <div>
      <h2>Coun + 1 = {arr[0]}</h2>
      <h2>Coun + 2 = {arr[1]}</h2>
    </div>
  );
}
