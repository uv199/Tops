import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Multiple_Input() {
  let [computer, set_computer] = useState({
    brand: "",
    ram: "",
    rom: "",
    price: "",
  });
  let [all_Computer, set_all_computer] = useState([]);

  const data_task = () => {
    set_all_computer([...all_Computer, computer]);
  };

  return (
    <>
      <div>
        <Label>computer</Label>
        <Form>
          <FormGroup>
            <Label for="exampleBrand">Brand</Label>
            <Input
              id="exampleBrand"
              placeholder="enter brand name"
              type="text"
              onChange={(e) =>
                set_computer({ ...computer, brand: e?.target?.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleRam">Ram</Label>
            <Input
              id="exampleRam"
              placeholder="enter ram name"
              type="text"
              onChange={(e) =>
                set_computer({ ...computer, ram: e?.target?.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleRom">Rom</Label>
            <Input
              id="exampleRom"
              placeholder="enter rom name"
              type="text"
              onChange={(e) =>
                set_computer({ ...computer, rom: e?.target?.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePrice">Price</Label>
            <Input
              id="examplePrice"
              placeholder="enter price"
              type="text"
              onChange={(e) =>
                set_computer({ ...computer, price: e?.target?.value })
              }
            />
          </FormGroup>
          <Button color="danger" onClick={() => data_task()}>
            Submit
          </Button>
        </Form>

        {all_Computer.length > 0 ? (
          <div className="m-5">
            <Table striped>
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Brand</th>
                  <th>Ram</th>
                  <th>Rom</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {all_Computer.map((e, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{e.brand}</td>
                      <td>{e.ram}</td>
                      <td>{e.rom}</td>
                      <td>{e.pricr}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        ) : (
          <h1 className="text-center">Please Enter Your Detailes</h1>
        )}
      </div>
    </>
  );
}
