import { Button, Input, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

export default function UserCrud() {
  let [user, setUser] = useState({
    email: "",
    password: "",
    gender: "",
    userType: "",
    hobby: [],
  });
  let [userArr, setUserArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);
  let [filter, setFilter] = useState("");
  let [searchText, setSearchText] = useState("");

  console.log("-----------  userArr----------->", userArr);

  useEffect(() => {
    let jsonData = localStorage.getItem("userData");
    let normalData = JSON.parse(jsonData) || [];
    if (filter) {
      let filterData = normalData.filter((e) => e.gender === filter);
      setUserArr(filterData);
    } else {
      setUserArr(normalData);
    }
    if (searchText) {
      let filterData = normalData.filter((e) => e.email.includes(searchText));
      setUserArr(filterData);
    }
    
  }, [filter, searchText]);

  // ---------------------Checkbox handler --------------------
  const checkBoxHandler = (e, value) => {
    if (e.target.checked) {
      let oldArr = user.hobby;
      let newArr = [...oldArr, value];
      setUser({ ...user, hobby: newArr });
    } else {
      let oldArr = user.hobby;
      let newArr = oldArr.filter((e) => {
        return e !== value;
      });
      setUser({ ...user, hobby: newArr });
    }
  };

  // ---------------------submit handler --------------------
  const submitHandler = () => {
    setUserArr([...userArr, user]);
    localStorage.setItem("userData", JSON.stringify([...userArr, user]));

    setUser({
      email: "",
      password: "",
      gender: "",
      userType: "",
      hobby: [],
    });
  };

  // ---------------------delete handler --------------------
  const deleteHandler = (index) => {
    let newArr = userArr.toSpliced(index, 1);
    setUserArr(newArr);
    localStorage.setItem("userData", JSON.stringify(newArr));
  };

  // ---------------------edit handler --------------------
  const editHandler = (index, value) => {
    setUser(value);
    setIndex(index);
    setUpdateMode(true);
  };

  // ---------------------update handler --------------------
  const updateHandler = () => {
    // index-index state
    // arr = userArr state
    // new data = user state
    let newArr = userArr.toSpliced(index, 1, user);
    setUserArr(newArr);
    localStorage.setItem("userData", JSON.stringify(newArr));

    setUser({
      email: "",
      password: "",
      gender: "",
      userType: "",
      hobby: [],
    });
    setUpdateMode(false);
  };
  return (
    <div className="flex m-5 justify-center flex-col items-center">
      <div>
        {/* 
        <li>email : {user.email}</li>
        <li>password : {user.password}</li>
        <li>gender : {user.gender}</li>
        <li>hobby : {user.hobby.join("--")}</li>
        <li>UserType : {user.userType}</li>
        */}
      </div>
      <form className=" w-[50vw] border flex flex-col  gap-3 rounded-md border-black p-4">
        {/* ----------------------- email ------------------ */}
        <div>
          <label htmlFor="">EMAIL</label>
          <Input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        {/* ----------------------- password ------------------ */}
        <div>
          <label htmlFor="">PASSWORD</label>
          <Input
            value={user.password}
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        {/* ----------------------- gender radio ------------------ */}
        <div>
          <label htmlFor="">GENDER</label>
          <div className="flex gap-2">
            <input
              type="radio"
              checked={user.gender === "male"}
              onChange={() => setUser({ ...user, gender: "male" })}
            />{" "}
            Male
            <input
              type="radio"
              checked={user.gender === "female"}
              onChange={() => setUser({ ...user, gender: "female" })}
            />{" "}
            Female
          </div>
        </div>
        {/* -----------------------select user ------------------ */}
        <div>
          <label htmlFor="">USER TYPE</label>
          <select
            className="border border-black rounded-md w-full py-1"
            onChange={(e) => setUser({ ...user, userType: e.target.value })}
            value={user.userType}
          >
            <option value="">Select</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        {/* -----------------------Hobby checkBox ------------------ */}
        <div>
          <label htmlFor="">Hobby</label>
          <div className="flex gap-2">
            <input
              checked={user.hobby.includes("reading")}
              type="checkbox"
              onChange={(e) => checkBoxHandler(e, "reading")}
            />
            Reading
            <input
              checked={user.hobby.includes("dancing")}
              type="checkbox"
              onChange={(e) => checkBoxHandler(e, "dancing")}
            />
            Dancing
            <input
              checked={user.hobby.includes("swimming")}
              type="checkbox"
              onChange={(e) => checkBoxHandler(e, "swimming")}
            />
            Swimming
          </div>
        </div>
        {updateMode ? (
          <Button onClick={() => updateHandler()}>Update</Button>
        ) : (
          <Button onClick={() => submitHandler()}>Submit</Button>
        )}
      </form>

      <div>
        <h1>{filter}</h1>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <h1>{searchText}</h1>
      <div>
        <Input
          label="Search by email..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {/* ----------------------table start------------------ */}
      <h1 className="text-2xl text-center my-3">Table Data</h1>
      <hr className="h-1 bg-gray-500 mb-3" />
      <table className="border border-black rounded-md">
        <tr className="bg-gray-500">
          <th className="px-3">Sr.</th>
          <th className="px-3">Email</th>
          <th className="px-3">Password</th>
          <th className="px-3">Gender</th>
          <th className="px-3">UserType</th>
          <th className="px-3">Hobby</th>
          <th className="px-3">Action</th>
        </tr>
        <tbody>
          {userArr.map((e, index) => {
            return (
              <tr>
                <td>1</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>{e.gender}</td>
                <td>{e.userType}</td>
                <td>
                  <div className="flex list-none gap-2">
                    {e.hobby.map((hobbyEle) => {
                      return (
                        <li className="border py-1 px-2 bg-gray-300 rounded-lg">
                          {hobbyEle}
                        </li>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className="flex gap-2 px-3">
                    <p
                      className="cursor-pointer underline text-blue-500"
                      onClick={() => editHandler(index, e)}
                    >
                      Edit
                    </p>
                    <p
                      className="cursor-pointer underline text-red-500"
                      onClick={() => deleteHandler(index)}
                    >
                      Delete
                    </p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

(e) => {};
