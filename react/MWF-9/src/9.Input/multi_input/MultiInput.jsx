import React, { useState } from "react";
import { Button, Table } from "reactstrap";

export default function MultiInput() {
  let [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
  });
  let [dataArr, setDataArr] = useState([]);
  function addDataToArr(e) {
    e.preventDefault();
    setDataArr([...dataArr, userData]);
    setUserData({
      name: "",
      password: "",
      email: "",
    });
  }
  console.log("dataArr", dataArr);

  return (
    <div>
      <h1>My Name is {userData.name}</h1>
      <h1>My password is {userData.password}</h1>
      <form
        onSubmit={(e) => addDataToArr(e)}
        className="d-flex flex-column gap-2 rounded-3 p-3"
        style={{ backgroundColor: "lightcyan", border: "1px solid black" }}
      >
        <label htmlFor="name">Name</label>
        <input
          value={userData?.name}
          className="rounded-2 border-1"
          type="text"
          onChange={(e) => setUserData({ ...userData, name: e?.target?.value })}
        />
        <label htmlFor="name">Password</label>
        <input
          value={userData?.password}
          className="rounded-2 border-1"
          type="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e?.target?.value })
          }
        />
        <label htmlFor="email">Email</label>
        <input
          value={userData?.email}
          className="rounded-2 border-1"
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, email: e?.target?.value })
          }
        />
        <input type="submit" />
      </form>
      <Table>
        <thead>
          <tr>
            <th>SR.</th>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataArr?.map?.((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.password}</td>
                <td>{e?.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

// let o = {
//   a: "",
//   b: "",
// };

// o = { a: "test" };
// o = { ...o,a: "test" };
