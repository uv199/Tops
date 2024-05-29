import React, { useEffect, useState } from "react";
import { Edit, Eye, EyeOff, Trash } from "react-feather";
import Select from "react-select";
import { toast } from "react-toastify";
import { Button, Input, Table } from "reactstrap";

const userTypeOptions = [
  { value: "user", label: "User" },
  { value: "employee", label: "Employee" },
  { value: "admin", label: "Admin" },
];
const intialUser = {
  id: 0,
  name: "",
  email: "",
  password: "",
  cpassword: "",
  mobile: "",
  userType: "",
};

export default function FilterWithViewPassword() {
  const [update, setUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const [showpasswordType, setShowPasswordType] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterByUserType, setFilterByUserType] = useState("");
  const [bkpUsers, setBkpUsers] = useState([]);
  const [user, setUser] = useState(intialUser);

  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const getUsers = localStorage.getItem("users");
  //   if (getUsers) {
  //     const jsonToNormal = JSON.parse(getUsers);
  //     setBkpUsers(jsonToNormal);
  //   }
  // }, []);

  useEffect(() => {
    const getUsers = localStorage.getItem("users");
    console.log("point-1 ---->", getUsers);
    if (getUsers) {
      let filteredUsers = JSON.parse(getUsers);
      setBkpUsers(filteredUsers);
      console.log("point-2 ---->", filteredUsers);

      if (searchText) {
        filteredUsers = filteredUsers.filter((e) =>
          e?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      if (filterByUserType) {
        filteredUsers = filteredUsers.filter(
          (e) => e?.userType?.toLowerCase() === filterByUserType.toLowerCase()
        );
      }

      setUsers(filteredUsers);
    }
  }, [searchText, filterByUserType]);

  const addHandler = () => {
    if (
      user?.name &&
      user?.email &&
      user?.password &&
      user?.cpassword &&
      user?.mobile
    ) {
      if (user?.password === user?.cpassword) {
        const newUser = {
          ...user,
          cpassword: "",
        };
        console.log("----->", bkpUsers);
        setUsers([...bkpUsers, { ...newUser }]);
        localStorage.setItem("users", JSON.stringify([...bkpUsers, newUser]));
        setUser(intialUser);
      } else {
        toast.error("Password and Confirm password do not match.");
      }
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  const editHandler = (e, i) => {
    setUpdate(true);
    setUpdateIndex(i);
    setUser(e);
  };

  const updateHandler = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index] = user;
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUpdate(false);
    setUser(intialUser);
  };

  const deleteHandler = (index) => {
    if (confirm("Do you want to delete this user?")) {
      const filteredUsers = users.filter((e, i) => i !== index);
      setUsers(filteredUsers);
      localStorage.setItem("users", JSON.stringify(filteredUsers));
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="my-2">
            <Input
              type="text"
              value={user?.name}
              onChange={(e) => setUser({ ...user, name: e?.target?.value })}
              placeholder="Enter name"
            />
          </div>
          <div className="my-2">
            <Input
              type="text"
              value={user?.email}
              onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              placeholder="Enter email"
            />
          </div>
          <div className="my-2">
            <Input
              type="text"
              value={user?.mobile}
              onChange={(e) => setUser({ ...user, mobile: e?.target?.value })}
              placeholder="Enter mobile"
            />
          </div>
          <Select
            options={userTypeOptions}
            value={userTypeOptions?.filter((e) => e?.value === user?.userType)}
            onChange={(e) => setUser({ ...user, userType: e?.value })}
          />
          <div className="my-2">
            <div className="d-flex">
              <Input
                type={passwordType}
                value={user?.password}
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
                placeholder="Enter password"
              />
              {passwordType === "text" ? (
                <Button onClick={() => setPasswordType("password")}>
                  <Eye />
                </Button>
              ) : (
                <Button onClick={() => setPasswordType("text")}>
                  <EyeOff />
                </Button>
              )}
            </div>
          </div>
          {!update && (
            <div className="my-2">
              <Input
                type="text"
                value={user?.cpassword}
                onChange={(e) =>
                  setUser({ ...user, cpassword: e?.target?.value })
                }
                placeholder="Enter confirm password"
              />
            </div>
          )}
          {update ? (
            <Button onClick={() => updateHandler(updateIndex)}>Update</Button>
          ) : (
            <Button onClick={() => addHandler()}>Add</Button>
          )}
        </div>
      </div>
      <div className="d-flex gap-3 my-3">
        <Input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <Select
          options={userTypeOptions}
          value={userTypeOptions?.filter((e) => e?.value === filterByUserType)}
          onChange={(e) => setFilterByUserType(e.value)}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Password</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((e, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{e?.name}</td>
              <td>{e?.email}</td>
              <td>{e?.userType}</td>
              <td>
                <Input
                  type={showpasswordType === i ? "text" : "password"}
                  value={e?.password}
                  readOnly
                />
                {showpasswordType === i ? (
                  <Button onClick={() => setShowPasswordType(null)}>
                    <Eye />
                  </Button>
                ) : (
                  <Button onClick={() => setShowPasswordType(i)}>
                    <EyeOff />
                  </Button>
                )}
              </td>
              <td>{e?.mobile}</td>
              <td>
                <Button
                  className="btn btn-sm btn-info"
                  onClick={() => editHandler(e, i)}
                >
                  <Edit />
                </Button>
                <Button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteHandler(i)}
                >
                  <Trash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <tr className="odd:bg-red-500 even:bg-yellow-200">
        <td>test-1</td>
        <td>test-2</td>
        <td>test-3</td>
        <td>test-4</td>
        <td>test-5</td>
      </tr>
      {/* <tr class="odd:bg-white even:bg-slate-50">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr> */}
    </>
  );
}
