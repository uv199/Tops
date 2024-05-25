import { Button, Select } from "flowbite-react";
import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    gender: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    availableStock: "",
    brand: "",
    category: "",
    mainCategorie: "",
    size: [],
    thumbnail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[50%] border border-black p-5">
          <h2 className="text-[30px]">Add Product From</h2>
          <Form className="text-left" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input id="title" name="title" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input id="description" name="description" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input id="price" name="price" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="discountPercentage">Discount Percentage</Label>
              <Input
                id="discountPercentage"
                name="discountPercentage"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="availableStock">Available Stock</Label>
              <Input id="availableStock" name="availableStock" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="brand">Brand</Label>
              <Input id="brand" name="brand" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Select id="category" name="category" required>
                <option value="">Select a category</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label for="mainCategorie">Main category</Label>
              <Select id="mainCategorie" name="mainCategorie" required>
                <option value="">Select a main category</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </Select>
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label for="gender">Gender</Label>
              <div className="flex gap-3">
                <FormGroup check>
                  <Input name="gender" type="radio" value="male" />
                  <Label check>Male</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="gender" type="radio" value="female" />
                  <Label check>Female</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="gender" type="radio" value="kids" />
                  <Label check>Kids</Label>
                </FormGroup>
              </div>
            </FormGroup>
            <FormGroup>
              <Label>Size</Label>
              <div className="flex gap-3">
                <FormGroup check>
                  <Input name="size" type="checkbox" value="50ml" />
                  <Label check>50ml</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="size" type="checkbox" value="100ml" />
                  <Label check>100ml</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="size" type="checkbox" value="150ml" />
                  <Label check>150ml</Label>
                </FormGroup>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="thumbnail">Thumbnails</Label>
              <Input id="thumbnail" name="thumbnail" type="text" />
            </FormGroup>
            <div className="flex justify-center">
              <Button type="submit" className="w-[30%] ">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

let data = {
  gender: "kids", // radio kids - lable unisex
  title: "Aqua", // text
  description: "Ut quod dolorem enim .", // text
  price: 3155, // number
  discountPercentage: 9, // number -max 100
  availableStock: 17, // number
  brand: "diwaliSale", // text
  category: ["aqua", "light"], // select - multi
  mainCategorie: "perfume", // select - single
  size: ["100ml", "50ml", "150ml", "10ml"], // checkBox 10,50,100,150,200
  thumbnail:
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11785242/2022/8/1/2f3f908a-87be-4aa5-a32e-de8639d21dd11659356765426SKINNbyTitanWomenCelesteFragrance-50ML2.jpg", // text
};
