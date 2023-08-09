import React, { useEffect, useState } from "react";

export default function LocalstorageCom() {
  let [firstName, setFirstName] = useState("");
  let [data, setData] = useState([]);
  function getData(e) {
    setFirstName(e?.target?.value);
  }

  function addData(params) {
    setData([...data, firstName]);
    setFirstName("");
    localStorage.setItem("data", JSON.stringify([...data, firstName]));
  }

  useEffect(() => {
    let data = localStorage.getItem("data");
    let normalData = JSON.parse(data);
    setData([...normalData]);
  }, []);

  return (
    <>
      <label htmlFor="fn">First Name : </label>
      <input type="text" value={firstName} onChange={(e) => getData(e)} />
      <button onClick={() => addData()}>Add Name</button>
      <h1>{firstName}</h1>
      <div>
        {data.map((e, i) => {
          return <h1 key={i}>{e}</h1>;
        })}
      </div>
    </>
  );
}
