import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function CheckBox() {
  let [data, setData] = useState([]);

  const checkHandler = (name) => {
    let index = data?.indexOf(name);
    if (index !== -1) {
      data.splice(index, 1);
      setData([...data]);
    } else {
      setData([...data, name]);
    }
  };
  return (
    <div>
      <Form className="border border-danger rounded-2 p-3 mt-5 d-flex flex-column">
        <FormGroup check inline>
          <Input
            onClick={() => checkHandler("urvish")}
            checked={data?.includes("urvish")}
            type="checkbox"
          />
          <Label check>URVISH</Label>
        </FormGroup>
        <FormGroup check inline>
          <Input
            onClick={() => checkHandler("manish")}
            checked={data?.includes("manish")}
            type="checkbox"
          />
          <Label check>MANISH</Label>
        </FormGroup>
        <FormGroup check inline>
          <Input
            onClick={() => checkHandler("pawan")}
            checked={data?.includes("pawan")}
            type="checkbox"
          />
          <Label check>PAWAN</Label>
        </FormGroup>
        <FormGroup check inline>
          <Input
            onClick={() => checkHandler("tejash")}
            checked={data?.includes("tejash")}
            type="checkbox"
          />
          <Label check>TEJASH</Label>
        </FormGroup>
        <FormGroup check inline>
          <Input
            onClick={() => checkHandler("yagnik")}
            checked={data?.includes("yagnik")}
            type="checkbox"
          />
          <Label check>YAGNIK</Label>
        </FormGroup>
      </Form>
      {data.map((e) => (
        <h1>{e}</h1>
      ))}
    </div>
  );
}
