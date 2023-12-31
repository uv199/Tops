import { FileSignature, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultipleInput() {
  let [user, setUser] = useState({
    email: "",
    password: "",
    age: "",
  });
  let [searchText, setSearchText] = useState("");

  let [dataArr, setDataArr] = useState([]);

  // take data from local storage and store them in to dataArr state
  useEffect(() => {
    // take data from localstorage
    const data = localStorage.getItem("userData");
    //convert json data into normal data
    const normalData = JSON.parse(data);
    /*
    // without search 
     store normal data into dataArray
    setDataArr(normalData);
    */

    // withsearch
    //filter a data from all data and set them in state so then display a data only which have includes a searchText string
    // convert bodth string into lowercase to ignore cash sensitveness during search
    let filteredData = normalData.filter((e) =>
      e.email.toLowerCase().includes(searchText.toLowerCase())
    );

    setDataArr(filteredData);
  }, [searchText]);

  const submitHandler = () => {
    // user.email !=="" && user.password!==""
    // use ... fro copy old data
    setDataArr([...dataArr, user]);
    // store dta into localstorage
    localStorage.setItem("userData", JSON.stringify([...dataArr, user]));
    // set userState as old state for clean input
    setUser({
      email: "",
      password: "",
      age: "",
    });
  };

  return (
    <>
      <Form className="border p-3 border-dark rounded-3">
        <FormGroup>
          <Label for="name">Email</Label>
          <Input
            id="name"
            name="name"
            // take user state's value for control input value like cleare it on click of submit button
            value={user?.email}
            placeholder="Enter your name"
            type="text"
            // use ... for take old value of object
            onChange={(e) => setUser({ ...user, email: e.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            id="age"
            name="age"
            value={user?.age}
            placeholder="Enter your age"
            type="number"
            onChange={(e) => setUser({ ...user, age: e?.target?.value })}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            value={user?.password}
            placeholder="Enter your password"
            type="text"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup> */}

        {/* <Button color="danger" className="w-100">
          Update
        </Button> */}

        <Button onClick={submitHandler} color="danger" className="w-100">
          Submit
        </Button>
      </Form>

      <div
        style={{ backgroundColor: "lightsalmon" }}
        className="d-flex flex-column p-4 rounded-4 mt-4 w-50 align-items-end "
      >
        <input
          // set search input in state
          onChange={(e) => setSearchText(e?.target?.value)}
          className="w-100 p-1 border rounded-3 mt-3 mb-3"
          type="text"
          placeholder="Search your text here...!"
        />
        {dataArr.length > 0 ? (
          <Table striped>
            <thead>
              <tr>
                <th>SR.</th>
                <th>Email</th>
                <th>PASSWORD</th>
                <th>AGE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {dataArr?.map?.((e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{e?.email}</td>
                    <td>{e?.password}</td>
                    <td>{e?.age}</td>
                    <td>
                      <FileSignature role="button" />
                      <Trash2 color="#e71818" role="button" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <h1>Data not available...!</h1>
        )}
      </div>
    </>
  );
}
