import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Form,
  Row,
  Col,
  Input,
} from "reactstrap";

const options = [
  { value: "shose", label: "Shose" },
  { value: "sports", label: "Sports" },
  { value: "casual", label: "Casual" },
];

export default ({ modal, toggle }) => {
  let [category, setCategory] = useState([]);
  const getSelectedData = (e) => {
    console.log("e", e);

    setCategory(e.map((e) => e.value));
    console.log("category", category);
  };
  return (
    <>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  id="exampleAddress"
                  name="address"
                  placeholder="1234 Main St"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input
                  id="exampleAddress2"
                  name="address2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input id="exampleCity" name="city" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input id="exampleState" name="state" />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input id="exampleZip" name="zip" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                <Input id="exampleCheck" name="check" type="checkbox" />
                <Label check for="exampleCheck">
                  Check me out
                </Label>
              </FormGroup>
              <Select
                options={options}
                isMulti
                onChange={(e) => getSelectedData(e)}
              />
              {category.map((e) => {
                return <h1>{e}</h1>;
              })}
              <Button>Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

/*
{
  title: "shose",
  description: "good shose",
  brand: "nike",
  gender: "male" // ["male", "female", "kids"],
  price: 500,
  thumbnail: "image url",
  discountPercentage: 20,
  category: ["sports","shose"],
  color:  ["red", "black", "white"],
  size:  ["44", "45", "42", "43"],
  availableStock: 500,
},
*/
