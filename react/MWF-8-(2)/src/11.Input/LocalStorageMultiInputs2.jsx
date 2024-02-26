import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Pencil, Trash2, User } from "lucide-react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { toast } from "react-toastify";

// Locations Single Select Options
const locations = [
  { value: "Select Location", label: "Select Location", isDisabled: true },
  { value: "Surat", label: "Surat" },
  { value: "Vadodara", label: "Vadodara" },
  { value: "Alto", label: "Patan" },
  { value: "Ahmedabad", label: "Ahmedabad" },
];

// Cars Multi Select Options
const cars = [
  { value: "Select Car", label: "Select Car", isDisabled: true },
  { value: "Swift Dzire", label: "Swift Dzire" },
  { value: "Innova", label: "Innova" },
  { value: "Alto", label: "Alto" },
  { value: "Honda City", label: "Honda City" },
];

var initialData = {
  name: "",
  gender: "",
  hobby: [],
  date: "",
  color: "",
  location: "Select Location",
  car: [],
};

export default function LocalStorageMultiInputs2() {
  const [user, setUser] = useState(initialData);
  const [userArr, setUserArr] = useState([]);

  var valueArr = Object.values(user);
  var empty = valueArr.includes("");
  // console.log("empty? : ", empty);

  useEffect(() => {
    let jsonData = localStorage.getItem("userData");
    let normalData = JSON.parse(jsonData) || [];
    console.log("-----------  normalData----------->", normalData);
    setUserArr(normalData);
  }, []);

  // Add User to Localstorage
  const addUser = (e) => {
    e.preventDefault();

    if (!empty) {
      // userArr
      //   ? setUserArr([user, ...(userArr?.length > 0 && [...userArr])])
      //   : setUser([user]);
      setUser([user, ...userArr]);
      // Set userArr in local storage
      localStorage.setItem("userData", JSON.stringify([user, ...userArr]));
      setUser(initialData);
    } else {
      toast.warn("Please fill all data");
    }
  };
  // console.log("UserArr: ", userArr);

  // Delete User
  const deleteHandler = (index) => {
    let filteredData = userArr.filter((e, i) => i !== index);
    setUserArr(filteredData);
    localStorage.setItem("userData", JSON.stringify(filteredData));
  };

  // Hobby Handler
  const handleHobby = (hby, e) => {
    // console.log("Hobby e: ", e?.target?.checked);
    // console.log("Hobby: ", hby);

    if (e?.target?.checked) {
      setUser({ ...user, hobby: [...user.hobby, hby] });
    } else {
      let filterHobbyData = user.hobby.filter((e) => e !== hby);
      setUser({ ...user, hobby: filterHobbyData });
    }
  };

  return (
    <div className="row p-3">
      {/* Form */}
      <div className="col-md-3">
        <div className="border border-dark-subtle rounded-3 p-3">
          <h4>Local Storage Multi Input Form 2</h4>

          <hr />

          <h6>Name: {user.name}</h6>
          <h6>Gender: {user.gender}</h6>
          <h6>Hobby: {user.hobby.join(", ")}</h6>
          <h6>Date: {user.date}</h6>
          <h6>Color: {user.color}</h6>
          <h6>location: {user.location}</h6>
          <h6>car: {user.car}</h6>

          <hr />

          <Form onSubmit={(e) => addUser(e)}>
            {/* Name */}
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                type="text"
                onChange={(e) => setUser({ ...user, name: e?.target?.value })}
              />
            </FormGroup>

            {/* Gender */}
            <label>Gender</label>
            <FormGroup>
              <div className="d-flex gap-3">
                <FormGroup check>
                  <Input
                    type="radio"
                    id="male"
                    checked={user.gender === "Male"}
                    onChange={() => setUser({ ...user, gender: "Male" })}
                  />
                  <Label for="male">Male</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    type="radio"
                    id="female"
                    checked={user.gender === "Female"}
                    onChange={() => setUser({ ...user, gender: "Female" })}
                  />
                  <Label for="female">Female</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    type="radio"
                    id="other"
                    checked={user.gender === "Other"}
                    onChange={() => setUser({ ...user, gender: "Other" })}
                  />
                  <Label for="other">Other</Label>
                </FormGroup>
              </div>
            </FormGroup>

            {/* Hobby */}
            <label>Hobby</label>
            <FormGroup>
              <div className="d-flex gap-3">
                <FormGroup check>
                  <Input
                    type="checkbox"
                    id="reading"
                    checked={user.hobby.includes("Reading")}
                    onChange={(e) => handleHobby("Reading", e)}
                  />
                  <Label for="reading">Reading</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    type="checkbox"
                    id="swim"
                    checked={user.hobby.includes("Swim")}
                    onChange={(e) => handleHobby("Swim", e)}
                  />
                  <Label for="swim">Swim</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    type="checkbox"
                    id="cricket"
                    checked={user.hobby.includes("Cricket")}
                    onChange={(e) => handleHobby("Cricket", e)}
                  />
                  <Label for="cricket">Cricket</Label>
                </FormGroup>
              </div>
            </FormGroup>

            {/* Date */}
            <div className="d-flex">
              <div className="col-md-8 me-1">
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    onChange={(e) =>
                      setUser({ ...user, date: e?.target?.value })
                    }
                  />
                </FormGroup>
              </div>

              <div className="col-md-4 ms-1">
                <FormGroup>
                  <Label for="color">Color</Label>
                  <Input
                    id="color"
                    type="color"
                    onChange={(e) =>
                      setUser({ ...user, color: e?.target?.value })
                    }
                  />
                </FormGroup>
              </div>
            </div>

            {/* Single Select "Location" */}
            <FormGroup>
              <Label>Location</Label>
              <Select
                options={locations}
                value={{ value: user.location, label: user.location }}
                onChange={(e) => setUser({ ...user, location: e?.value })}
              />
            </FormGroup>

            {/* Multi Select "Car" */}
            <FormGroup>
              <Label>Car</Label>
              <Select
                isMulti
                options={cars}
                // value={[{ value: user.car, label: user.car }]}
                onChange={(selectedOptions) =>
                  setUser({
                    ...user,
                    car: selectedOptions
                      ?.map((option) => option?.value)
                      .join(", "),
                  })
                }
              />
            </FormGroup>

            <Button color="danger">Submit</Button>
          </Form>
        </div>
      </div>

      {/* Table */}
      <div className="col-md-9">
        <div className="border border-dark-subtle rounded-3 p-3">
          <div className="table-responsive">
            <Table striped>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Hobby</th>
                  <th>Date</th>
                  <th>Color</th>
                  <th>Location</th>
                  <th>Car</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userArr?.map?.((e, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{e?.name}</td>
                      <td>{e?.gender}</td>
                      <td>{e?.hobby.join(", ")}</td>
                      <td>{e?.date}</td>
                      <td>{e?.color}</td>
                      <td>{e?.location}</td>
                      <td>{e?.car}</td>
                      <td>
                        <div className="d-flex align-items-center gap-3 ">
                          <Pencil role="button" size={20} color="#0d6efd" />
                          <Trash2
                            role="button"
                            size={20}
                            color="#ff0000"
                            onClick={() => deleteHandler(i)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
