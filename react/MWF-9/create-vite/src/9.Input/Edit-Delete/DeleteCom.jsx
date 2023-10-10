import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button, Table } from "reactstrap";

export default function DeleteCom() {
  let [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  let [dataArr, setDataArr] = useState([]);
  function addDataToArr(e) {
    e.preventDefault();
    setDataArr([...dataArr, userData]);
    setUserData({
      userName: "",
      password: "",
    });
  }
  const deleteHandler = (index) => {
    console.log("index", index);
    // dataArr.splice(index, 1);
    // setDataArr([...dataArr]);
    let newData = dataArr.filter((e, i) => i !== index);
    setDataArr(newData);
  };

  return (
    <div>
      <form
        onSubmit={(e) => addDataToArr(e)}
        className="d-flex flex-column gap-2 rounded-3 p-3"
        style={{ backgroundColor: "lightcyan", border: "1px solid black" }}
      >
        <label htmlFor="userName">Name</label>
        <input
          value={userData?.userName}
          className="rounded-2 border-1"
          type="text"
          onChange={(e) =>
            setUserData({ ...userData, userName: e?.target?.value })
          }
        />
        <label htmlFor="userName">Password</label>
        <input
          value={userData?.password}
          className="rounded-2 border-1"
          type="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e?.target?.value })
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataArr?.map?.((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e?.userName}</td>
                <td>{e?.password}</td>
                <td>
                  <Trash2
                    color="#e40707"
                    type="button"
                    onClick={() => deleteHandler(i)}
                  />
                </td>
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
