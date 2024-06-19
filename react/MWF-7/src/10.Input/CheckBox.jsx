import React, { useState } from "react";

export default function CheckBox() {
  let [alphabet, setAlphabet] = useState([]);

  const checkHandler = (value, e) => {
    if (e.target.checked) {
      setAlphabet([...alphabet, value]);
    } else {
      let filterData = alphabet.filter((e) => e !== value);
      setAlphabet(filterData);
    }
  };
  return (
    <div className="">
      <h1>{alphabet}</h1>
      <input
        type="checkbox"
        checked={alphabet.includes("a")}
        onChange={(e) => checkHandler("a", e)}
      />
      A
      <br />
      <input
        type="checkbox"
        checked={alphabet.includes("b")}
        onChange={(e) => checkHandler("b", e)}
      />
      B
      <br />
      <input
        type="checkbox"
        checked={alphabet.includes("c")}
        onChange={(e) => checkHandler("c", e)}
      />
      C
      <br />
      <input
        type="checkbox"
        checked={alphabet.includes("d")}
        onChange={(e) => checkHandler("d", e)}
      />
      D
    </div>
  );
}

/*

[a,b,c] => a arr.filter((e)=>e!==a) => [b,c] =>setAlphabet([b,c])
*/
