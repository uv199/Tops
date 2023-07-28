import React, { useState } from "react";

// export default function InputCom() {
//   let [name, setName] = useState("");

//   function getData(e) {
//     // name=e.target.value
//     setName(e.target.value);
//     console.log("e.target.value:", e.target.value);
//   }

//   return (
//     <>
//       <label>First Name : </label>
//       <input type="text" onChange={(e) => getData(e)} />
//       <button></button>
//     </>
//   );
// }

export default function InputCom() {
  let [firstName, setFirstName] = useState("");
  let [data, setData] = useState([]);
  function getData(e) {
    setFirstName(e?.target?.value);
  }

  function addData(params) {
    setData([...data, firstName]);
    setFirstName("");
  }

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
