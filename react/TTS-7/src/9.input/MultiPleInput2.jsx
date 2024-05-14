import React, { useState } from "react";
import { Trash } from "react-feather";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import { Checkbox } from "flowbite-react";

export default function MultiPleInput2() {
  let [user, setUser] = useState({ email: "", password: "", country: [] }); // setUser({ ...user, email:e.target.value})
  let [userArr, setUserArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let exist = userArr.some((e) => e.email === user.email);
    if (!exist) {
      setUserArr([...userArr, user]);
      setUser({ email: "", password: "", country: [] });
    } else {
      return toast.error("Email already used");
    }
  };

  const deleteHandler = (index) => {
    let filterData = userArr.filter((e, i) => i !== index);
    setUserArr(filterData);
    toast.success("Task Deleted");
  };

  const checkBoxHandler = (countryName, e) => {
    if (e.target.checked) {
      //   setCountry([...country, countryName]);
      setUser({ ...user, country: [...user.country, countryName] });
    } else {
      let filterData = user.country.filter((e) => e !== countryName);
      setUser({ ...user, country: filterData });
    }
  };

  return (
    <div>
      <Form onSubmit={(e) => submitHandler(e)}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="with a placeholder"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                id="Password"
                placeholder="password placeholder"
                type="password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
          </Col>
          <Col>
            <div className="w-full flex flex-col items-center">
              <div className="flex max-w-md flex-col gap-4" id="checkbox">
                <fieldset className="flex max-w-md flex-col gap-4">
                  <legend className="mb-4">Choose your favorite country</legend>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="bharat"
                      checked={user.country.includes("bharat")}
                      onChange={(e) => checkBoxHandler("bharat", e)}
                    />
                    <Label htmlFor="bharat">Bharat</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="united-state"
                      checked={user.country.includes("us")}
                      onChange={(e) => checkBoxHandler("us", e)}
                    />
                    <Label htmlFor="united-state">United States</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="germany"
                      checked={user.country.includes("germany")}
                      onChange={(e) => checkBoxHandler("germany", e)}
                    />
                    <Label htmlFor="germany">Germany</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="spain"
                      checked={user.country.includes("spain")}
                      onChange={(e) => checkBoxHandler("spain", e)}
                    />
                    <Label htmlFor="spain">Spain</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="uk"
                      checked={user.country.includes("uk")}
                      onChange={(e) => checkBoxHandler("uk", e)}
                    />
                    <Label htmlFor="uk">United Kingdom</Label>
                  </div>
                </fieldset>
              </div>
            </div>
          </Col>
        </Row>
        <Button color="danger">Sign in</Button>
      </Form>

      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userArr?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td className="flex gap-2">
                  {e.country.map((ele) => {
                    return (
                      <div className="p-2 bg-gray-400 border border-black rounded-md">
                        {ele}
                      </div>
                    );
                  })}
                </td>
                <td>
                  <Trash
                    className="cursor-pointer"
                    color="red"
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
