import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import UserTable from "./UserTable";

let initialData = {
  userName: { firstName: "", lastName: "" },
  email: "",
  gender: "",
  dateOfBirth: "",
  hobby: "",
  city: "",
  password: "",
};

export default function UserForm() {
  let [userName, setUserName] = useState({ firstName: "", lastName: "" });
  let [newUser, setNewUser] = useState(initialData);
  let [index, setIndex] = useState(null);
  let [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let mainData = { ...newUser, userName: userName };
    setData([...data, mainData]);
    localStorage.setItem("user", JSON.stringify([...data, mainData]));
    setNewUser(initialData);
    setUserName({ firstName: "", lastName: "" });
  };

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user")) || [];
    setData(userData);
  }, []);

  let editData = (data, index) => {
    setNewUser(data);
    setUserName(data.userName);
    setIndex(index);
  };
  let deleteData = (index) => {
    let filterdData = data.filter((e, i) => i !== index);
    setData(filterdData);
    localStorage.setItem("user", JSON.stringify(filterdData));
  };

  let updateHandler = () => {
    if (index || index === 0) {
      let mainData = { ...newUser, userName: userName };
      data.splice(index, 1, mainData);
      console.log("🚀 ~ updateHandler ~ data:", data);
      setData([...data]);
      localStorage.setItem("user", JSON.stringify([...data]));
      setNewUser(initialData);
      setUserName({ firstName: "", lastName: "" });
      setIndex(null);
    }
  };

  return (
    <>
      <button className="btn-blue">click me</button>
      <h1 className="heading sm:text-green-500 md:text-yellow-400">texxtt </h1>
      <h1 className="heading tablet:text-green-500 laptop:text-yellow-500 desktop:text-red-500"> hello world</h1>
      <h1 className="text-3xl text-theam-color" >color base</h1>
      {/* <div className="flex justify-center mb-5">
        <Form className="w-50 border border-gray-500 p-4">
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              type="text"
              value={userName.firstName}
              onChange={(e) =>
                setUserName({ ...userName, firstName: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              type="text"
              value={userName.lastName}
              onChange={(e) =>
                setUserName({ ...userName, lastName: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter your email address"
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label>Gender</Label>
            <div className="flex gap-3">
              <FormGroup>
                <Input
                  checked={newUser.gender === "male"}
                  name="gender"
                  type="radio"
                  value="male"
                  onChange={(e) =>
                    setNewUser({ ...newUser, gender: e.target.value })
                  }
                />
                <Label className="ms-1">Male</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  checked={newUser.gender === "female"}
                  name="gender"
                  type="radio"
                  value="female"
                  onChange={(e) =>
                    setNewUser({ ...newUser, gender: e.target.value })
                  }
                />
                <Label className="ms-1">Female</Label>
              </FormGroup>
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="Enter date of birth"
              type="date"
              value={newUser.dateOfBirth}
              onChange={(e) =>
                setNewUser({ ...newUser, dateOfBirth: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelectHobby">Hobby</Label>
            <Input
              id="exampleSelectHobby"
              name="hobby"
              type="select"
              value={newUser.hobby}
              onChange={(e) =>
                setNewUser({ ...newUser, hobby: e.target.value })
              }
            >
              <option>---Select---</option>
              <option>Book Reading</option>
              <option>Sports</option>
              <option>Traveling</option>
              <option>Writing</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelectCity">City</Label>
            <Input
              id="exampleSelectCity"
              name="city"
              type="select"
              value={newUser.city}
              onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
            >
              <option>---Select---</option>
              <option>Surat</option>
              <option>Bhavnagar</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </FormGroup>

          {index || index === 0 ? (
            <Button onClick={updateHandler}>
              Update
            </Button>
          ) : (
            <Button onClick={submitHandler}>Submit</Button>
          )}
        </Form>
      </div>
      <div>
        <UserTable data={data} editData={editData} deleteData={deleteData} />
      </div> */}
    </>
  );
}
