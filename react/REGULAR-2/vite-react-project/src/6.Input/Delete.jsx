import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default function Delete() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);
  function getName(e) {
    setName(e?.target?.value);
  }

  function addName(params) {
    setArr([...arr, name]); // add name in array and also copy old array
    setName(""); // for do input empty on click of add btn
  }

  // remove event
  function handleDelete(index) {
    // by splice
    arr.splice(index, 1);
    setArr([...arr]);

    // by filter
    // setArr(
    //   arr.filter((ele, i) => {
    //     console.log(i);
    //     return i !== index;
    //   })
    // );

  }
  return (
<>
      <h1>{name}</h1>
      <label htmlFor="name">Name : </label>
      <input type="text" id="name" onChange={(e) => getName(e)} value={name} />
      <button onClick={() => addName()}>Add Name</button>
      <div style={{ color: "white", backgroundColor: "lightcoral" }}>
        {arr.length > 0 ? (
          <Table className="  mt-4" striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((e, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e}</td>
                  <td>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null
        }
      </div>
    </>
  );
}

// let arr =[1,2,3]

// let narr = [...arr,4]
