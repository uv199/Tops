import React, { useState } from "react";
import { Button, Table } from "reactstrap";

export default function InputUpdate() {
  let [name, setName] = useState("");
  let [data, setData] = useState([]);
  const [index, setIndex] = useState(null);

  function addData() {
    if (name.length > 0) {
      let x = [...data, name];
      setData(x);
      setName("");
    }
  }

  function updateHandler(index, data) {
    console.log("index, data:", index, data);
    setName(data);
    setIndex(index);
  }

  function swipeData() {
    console.log("------->");
    if (index || index === 0) {
      // null-undefined-0-false
      data.splice(index, 1, name);
      setData([...data]);
      setName("");
      setIndex(null);
    } else {
      alert("please select data first");
    }
  }
  return (
    <>
      <h1>index : {index}</h1>
      <label htmlFor="">Name : </label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e?.target?.value)}
      />
      {index || index === 0 ? (
        <Button color="danger" outline onClick={() => swipeData()}>
          Update
        </Button>
      ) : (
        <Button color="danger" outline onClick={() => addData()}>
          Click Me
        </Button>
      )}
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
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e}</td>
                <td>
                  <Button
                    color="danger"
                    outline
                    onClick={() => updateHandler(i, e)}
                  >
                    Update
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
