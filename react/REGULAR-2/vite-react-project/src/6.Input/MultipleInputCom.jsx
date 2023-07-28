import React from "react";
import "./input.scss";
import { Button, Table } from "react-bootstrap";
import { useState } from "react";

export default function MultipleInputCom() {
  let [data, setData] = useState({ email: "", password: "", name: "" });
  let [arrData, setArrData] = useState([]);

  // to get data from input and store them in data state
  function getData(e) {
    setData({ ...data, [e.target.name]: e?.target?.value });
  }

  // to cleate input feild
  function handlerSubmit() {
    setArrData([...arrData, data]);
    setData({ email: "", password: "", name: "" });
  }
  return (
    <>
      <div className="inputDiv">
        <label htmlFor="name">Email : </label>
        <input
          value={data.email}
          onChange={(e) => getData(e)}
          type="text"
          name="email"
          placeholder="Enter name"
        />
        <label htmlFor="name">Password : </label>
        <input
          value={data.password}
          type="text"
          name="password"
          onChange={(e) => getData(e)}
          placeholder="Enter Address"
        />
        <label htmlFor="name">Name : </label>
        <input
          value={data.name}
          type="text"
          name="name"
          onChange={(e) => getData(e)}
          placeholder="Enter Name"
        />
        <Button
          onClick={() => handlerSubmit()}
          className="mt-3 p-2"
          variant="dark"
        >
          Submit
        </Button>
      </div>
      <br />
      {arrData.length > 0 ? (
        <>
          <h1>Data Table</h1>
          <div className="tableDiv">
            <Table className="  mt-4" striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {arrData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      ) : null}
    </>
  );
}

// let obj = { name: 100, test: 90 };
// let keyName = "test";
// obj[keyName]; // => obj.test
