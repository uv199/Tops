import { FileSignature } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";

export default function LocalStorage() {
  let [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  let [dataArr, setDataArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    let jsonString = localStorage.getItem("dataArr");
    console.log("jsonString", jsonString);
    let normalData = JSON.parse(jsonString);
    console.log("normalData", normalData);
    setDataArr(normalData);
  }, []);

  function addDataToArr(e) {
    e.preventDefault();
    if (userData.userName.length > 0 && userData.password.length > 0) {
      setDataArr([...dataArr, userData]);
      localStorage.setItem("dataArr", JSON.stringify([...dataArr, userData]));
      setUserData({
        userName: "",
        password: "",
      });
    } else {
      alert("please add some data ");
    }
  }

  const updateHandler = (data, index) => {
    setUserData(data);
    setUpdateMode(true);
    setIndex(index);
  };
  const updateInArr = () => {
    console.log("--==--==");

    dataArr.splice(index, 1, userData);
    setDataArr([...dataArr]);
    localStorage.setItem("dataArr", JSON.stringify([...dataArr]));
    setUserData({
      userName: "",
      password: "",
    });
    setUpdateMode(false);
  };
  return (
    <div>
      <h1>{index}</h1>
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
        {!updateMode ? (
          <input type="submit" />
        ) : (
          <Button color="danger" onClick={() => updateInArr()}>
            UPDATE
          </Button>
        )}
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
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.userName}</td>
                <td>{e?.password}</td>
                <td>
                  <FileSignature
                    color="#6e6e6e"
                    type="button"
                    onClick={() => updateHandler(e, i)}
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
