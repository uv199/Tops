import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultipleInput() {
  let [user, setUser] = useState({
    state: "",
    city: "",
    pincode: "",
  });

  let [allUser, setAllUser] = useState([]);

  const addData = (e) => {
    if (
      user.state.length > 0 &&
      user.pincode.length > 0 &&
      user.city.length > 0
    ) {
      e.preventDefault();
      setAllUser([...allUser, user]);
      toast.success("User Added succesfully");
    } else {
      toast.error("Please fill data");
    }
  };
  return (
    <>
      <Form className="border border-dark p-3 rounded-3">
        <FormGroup>
          <Label for="examplestate">state</Label>
          <Input
            id="examplestate"
            name="text"
            placeholder="Enter your state"
            type="text"
            onChange={(e) => setUser({ ...user, state: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="City">City</Label>
          <Input
            id="City"
            placeholder="Enter your city"
            type="text"
            onChange={(e) => setUser({ ...user, city: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplepincode">pincode</Label>
          <Input
            id="examplepincode"
            name="password"
            placeholder="Enter your pincode"
            type="password"
            onChange={(e) => setUser({ ...user, pincode: e?.target?.value })}
          />
        </FormGroup>
        <Button onClick={(e) => addData(e)} className="w-100" color="danger">
          Submit
        </Button>
      </Form>

      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>City</th>
            <th>pincode</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.state}</td>
                <td>{e.city}</td>
                <td>{e.pincode}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
