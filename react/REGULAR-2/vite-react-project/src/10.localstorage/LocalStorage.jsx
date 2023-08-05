import React, { useEffect, useState } from "react";

export default function LocalStorage() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);
  function getName(e) {
    setName(e?.target?.value);
  }

  useEffect(() => {
    // console.log("--before--", arr);
    let dataFromLocalStorage = localStorage.getItem("arrData");
    let normalData = JSON.parse(dataFromLocalStorage);
    setArr(normalData); // state take some time to set
    // console.log("--after--", arr);
  }, []);

  function addName(params) {
    setArr([...arr, name]); // add name in array and also copy old array
    setName(""); // for do input empty on click of add btn
    localStorage.setItem("arrData", JSON.stringify([...arr, name]));
  }

  return (
    <>
      <h1>{name}</h1>
      <label htmlFor="name">Name : </label>
      <input type="text" id="name" onChange={(e) => getName(e)} value={name} />
      <button onClick={() => addName()}>Add Name</button>
      <div style={{ color: "white", backgroundColor: "lightcoral" }}>
        {arr.map((e, i) => {
          return <h1 key={i}>{e}</h1>;
        })}
      </div>
    </>
  );
}

// let arr =[1,2,3]

// let narr = [...arr,4]
