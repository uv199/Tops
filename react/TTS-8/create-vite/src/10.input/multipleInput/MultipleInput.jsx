import React, { useState } from "react";
import { Table } from "reactstrap";

export default function MultipleInput() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [dataArr, setDataArr] = useState([]);

  function getData(e) {
    console.log("e", e?.target.value);
    console.log("e", e.target.name);
    setUser({ ...user, [e.target.name]: e?.target?.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    setDataArr([...dataArr, user]);
    setUser({
      name: "",
      email: "",
      number: "",
    });
  }

  console.log("------>", dataArr);
  return (
    <>
      <form className="d-flex flex-column">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={(e) => getData(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => getData(e)}
        />
        <label htmlFor="number">Number</label>
        <input
          type="number"
          name="number"
          id="number"
          value={user.number}
          onChange={(e) => getData(e)}
        />
        <input
          type="submit"
          className="mt-3"
          onClick={(e) => submitHandler(e)}
        />
      </form>

      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {dataArr?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.email}</td>
                <td>{e?.number}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

// let obj = {
//   name: "urvish",
//   age: 23,
// };

// obj = {
//   ...obj,
//   age: 34,
// };

// // obj ?
