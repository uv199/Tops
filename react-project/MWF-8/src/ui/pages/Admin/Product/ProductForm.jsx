import Select from "react-select";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Row,
  FormGroup,
  Input,
  Col,
  Label,
} from "reactstrap";

const options = [
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "blue", label: "Blue" },
  { value: "pink", label: "Pink" },
];

export default ({ modal, toggle }) => {
  let [prouductData, setProductData] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
    thumbnail: "",
    discountPercentage: "",
    availableStock: "",
  });

  let [color, setColor] = useState([]);

  const getColor = (e) => {
    console.log("e", e);
    let values = e.map((ele) => ele.value);
    setColor(values);
  };
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Product Form</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="title">Name</Label>
                  <Input
                    id="title"
                    placeholder="Enter product name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="decription">Description</Label>
                  <Input
                    id="decription"
                    placeholder="Enter product description"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="brand">Brand</Label>
                  <Input
                    id="brand"
                    placeholder="Enter product name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Gender</Label>
                  <Row>
                    <Col>
                      <Input id="gender" className="me-2" type="radio" />
                      <Label for="gender">Male</Label>
                    </Col>
                    <Col>
                      <Input id="gender" className="me-2" type="radio" />
                      <Label for="gender">Female</Label>
                    </Col>
                    <Col>
                      <Input id="gender" className="me-2" type="radio" />
                      <Label for="gender">Kids</Label>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="thumbnail">Image</Label>
                  <Input
                    id="thumbnail"
                    placeholder="Enter product name"
                    type="url"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="discountPercentage">Discount</Label>
                  <Input
                    id="discountPercentage"
                    placeholder="Enter product description"
                    type="number"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="availableStock">Available Stock</Label>
                  <Input
                    id="availableStock"
                    placeholder="Enter product name"
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="category">Category</Label>
                  <Input
                    id="category"
                    placeholder="Enter product description"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="color">Available Color</Label>
                  <Select
                    isMulti
                    options={options}
                    onChange={(e) => getColor(e)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="size">Available Size</Label>
                  <Input
                    id="category"
                    placeholder="Enter product description"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="w-100">Add Product</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
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
