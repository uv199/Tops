import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Table,
} from "reactstrap";

export default function MultipleInput() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    color: [],
  });
  let [userArr, setUserArr] = useState([]);

  let [index, setIndex] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserArr([...userArr, user]);
    setUser({
      name: "",
      email: "",
      password: "",
      gender: "",
      color: [],
    });
  };

  const deleteHandler = (index) => {
    setUserArr(userArr.filter((e, i) => i !== index));
  };

  const checkHandler = (clr, e) => {
    if (e.target.checked) {
      setUser({ ...user, color: [...user.color, clr] });
    } else {
      let filterData = user.color.filter((e) => e !== clr);
      setUser({ ...user, color: filterData });
    }
  };

  const editHandler = (data, index) => {
    console.log("-----------  data----------->", data);
    setUser(data);
    setIndex(index);
  };

  const updateHandler = () => {
    let newArr = userArr.map((e, i) => {
      if (i === index) return user;
      else return e;
    });
    setUserArr(newArr);
    setIndex(null);
    setUser({ name: "", email: "", password: "", gender: "", color: [] });
  };

  return (
    <div className="w-100 d-flex justify-content-center flex-column align-items-center ">
      <h1>index = {index}</h1>
      <Form
        onSubmit={(e) => submitHandler(e)}
        className="mt-3 w-50 p-3 border border-dark rounded-2"
      >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
          <Label check>Gender</Label>
          <div className="d-flex gap-2">
            <FormGroup check>
              <Input
                checked={user.color.includes("red")}
                type="checkbox"
                onChange={(e) => checkHandler("red", e)}
              />
              <Label check>Red</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                checked={user.color.includes("green")}
                type="checkbox"
                onChange={(e) => checkHandler("green", e)}
              />
              <Label check>Green</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                checked={user.color.includes("yellow")}
                type="checkbox"
                onChange={(e) => checkHandler("yellow", e)}
              />
              <Label check>yellow</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                checked={user.color.includes("blue")}
                type="checkbox"
                onChange={(e) => checkHandler("blue", e)}
              />
              <Label check>blue</Label>
            </FormGroup>
          </div>

          <FormGroup check>
            <Input
              checked={user.gender === "male"}
              type="radio"
              onChange={() => setUser({ ...user, gender: "male" })}
            />
            <Label check>male</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              checked={user.gender === "female"}
              type="radio"
              onChange={() => setUser({ ...user, gender: "female" })}
            />
            <Label check>female</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              checked={user.gender === "kids"}
              type="radio"
              onChange={() => setUser({ ...user, gender: "kids" })}
            />
            <Label check>kids</Label>
          </FormGroup>
        </FormGroup>
        {/* 0-""-null-undefined-false */}
        {index || index === 0 ? (
          <Button
            onClick={() => updateHandler()}
            color="danger"
            className="w-100"
          >
            Update
          </Button>
        ) : (
          <Button
            //   onClick={(e) => submitHandler(e)}
            color="danger"
            className="w-100"
          >
            Submit
          </Button>
        )}
      </Form>
      <hr className="w-100" />
      <Table className="w-75 mt-4" striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Color</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
                <td>{e?.gender}</td>
                <td>
                  {e?.color.map((clr) => {
                    return (
                      <div div className="d-flex gap-2 align-items-center">
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: clr,
                            borderRadius: "50%",
                          }}
                        ></div>
                        <li className="list-unstyled">{clr}</li>
                      </div>
                    );
                  })}
                </td>
                <td>
                  <Button onClick={() => editHandler(e, i)} color="info">
                    Edit
                  </Button>
                  <Button
                    className="ms-3"
                    onClick={() => deleteHandler(i)}
                    color="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
