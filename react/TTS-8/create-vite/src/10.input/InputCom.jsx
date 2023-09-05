import React, { useState } from "react";
import { Button, Table } from "reactstrap";

export default function InputCom() {
  let [name, setName] = useState("");
  let [data, setData] = useState([]);

  // to get data from input
  function getData(e) {
    // console.log("---->", e.target.value);
    setName(e?.target?.value);
  }

  // push a data to array on click a add button
  function addData() {
    // console.log("---->");
    let x = [...data, name]; // have to copy old data and add new data
    setData(x);
    setName(""); // to clear input feild on a button click
  }

  // delete data from array on button click
  function deleteHandler(index) {
    // console.log("index:", index);
    // data.splice(index, 1);
    // setData([...data]);

    // with use of filter
    let newData = data.filter((e, i) => {
      return i !== index;
    });
    setData(newData);
  }

  return (
    <>
      <h1>{name}</h1>
      <label htmlFor="">Name : </label>
      <input type="text" value={name} onChange={(e) => getData(e)} />
      <Button color="danger" outline onClick={() => addData()}>
        Click Me
      </Button>
      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>First Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e}</td>
                <td>
                  <Button
                    color="danger"
                    outline
                    onClick={() => deleteHandler(i)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

// function deleteHandler(index) {
//   // console.log("index:", index);
//   // data.splice(index, 1);
//   // setData([...data]);
//   const con = confirm("Really you want to delete ?");
//   console.log("🚀 ~ file: InputCom.jsx:28 ~ deleteHandler ~ con:", con);
//   if (con) {
//     // with use of filter
//     let newData = data.filter((e, i) => {
//       return i !== index;
//     });
//     setData(newData);
//   }
// }
