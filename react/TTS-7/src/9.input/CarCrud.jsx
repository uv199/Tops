import React, { useState } from "react";
import ReactSelect from "react-select";
import { Button, Form, FormGroup, Input, Label, FormText } from "reactstrap";

const options = [
  { value: "black", label: "black" },
  { value: "red", label: "red" },
  { value: "green", label: "green" },
];
export default function CarCrud() {
  let [car, setCar] = useState({
    name: "",
    color: [],
    carType: "",
    model: [],
  });

  const selectHandler = (selectedValue) => {
    let values = selectedValue.map((e) => e.value);
    setCar({ ...car, color: values });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCar({
      name: "",
      color: [],
      carType: "",
      model: [],
    });
  };

  const checkHandler = (e, modelNo) => {
    if (e?.target?.checked) {
      setCar({ ...car, model: [...car.model, modelNo] });
    } else {
      let filter = car.model.filter((modelName) => modelName !== modelNo);
      setCar({ ...car, model: filter });
    }
  };

  return (
    <div>
      <Form className="border p-3 rounded-md w-[400px]">
        <FormGroup>
          <Label for="carName">Car Name</Label>
          <Input
            id="carName"
            value={car.name}
            onChange={(e) => setCar({ ...car, name: e.target.value })}
            placeholder="Enter car name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <ReactSelect
            value={car?.color?.map((e) => {
              return { value: e, label: e };
            })}
            isMulti
            options={options}
            placeholder="Select your color"
            onChange={(e) => selectHandler(e)}
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label>Car type</Label>
          <div className="flex gap-4">
            <FormGroup check>
              <Input
                checked={car.carType === "sports"}
                type="radio"
                onChange={() => setCar({ ...car, carType: "sports" })}
              />{" "}
              <Label>Sports</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                checked={car.carType === "luxurious"}
                type="radio"
                onChange={() => setCar({ ...car, carType: "luxurious" })}
              />
              <Label>Luxurious</Label>
            </FormGroup>
          </div>
        </FormGroup>
        <hr />
        <FormGroup check>
          <Input
            checked={car.model.includes("suv-1")}
            onChange={(e) => checkHandler(e, "suv-1")}
            type="checkbox"
          />
          <Label check>SUV-1</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={car.model.includes("suv-2")}
            onChange={(e) => checkHandler(e, "suv-2")}
            type="checkbox"
          />
          <Label check>SUV-2</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={car.model.includes("suv-3")}
            onChange={(e) => checkHandler(e, "suv-3")}
            type="checkbox"
          />
          <Label check>SUV-3</Label>
        </FormGroup>
        <hr />
        <Button
          type="submit"
          onClick={(e) => submitHandler(e)}
          color="danger w-full"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
