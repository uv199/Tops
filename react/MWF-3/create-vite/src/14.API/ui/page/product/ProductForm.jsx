import React, { useState } from "react";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";

const initialData = {
  title: "",
  description: "",
  brand: "",
  category: [""],
  price: "",
  gender: "",
  discountPercentage: "0",
  color: [""],
  size: [""],
};
export default function ProductForm() {
  let [product, setProduct] = useState(initialData);
  // do logic for check
  // do map for all size, chatagory gender
  // on submit par log form data
  const submitHandler = () => {
    console.log(product);
  };

  const colorCheck = (i, color) => {
    let available = product?.color?.includes(i);
    if (available) {
      let data = product?.color?.filter((e, i) => e !== color);
      setProduct({ ...product, color: data });
    } else {
      setProduct({ ...product, color: [...product?.color, e] });
    }
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="exampleEmail">Title</Label>
          <Input
            id="exampleEmail"
            name="title"
            value={product.title}
            placeholder="Title"
            type="text"
            onChange={(e) => {
              setProduct({ ...product, title: e?.target?.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Description</Label>
          <Input
            id="exampleEmail"
            name="description"
            placeholder="Description"
            type="text"
            value={product.description}
            onChange={(e) => {
              setProduct({ ...product, description: e?.target?.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Brand</Label>
          <Input
            id="exampleEmail"
            name="brand"
            placeholder="Brand"
            type="text"
            value={product.brand}
            onChange={(e) => {
              setProduct({ ...product, brand: e?.target?.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Category</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            value={product.category}
            onChange={(e) => {
              setProduct({ ...product, category: e?.target?.value });
            }}
          >
            <option>---select---</option>
            <option>Formal</option>
            <option>Casual</option>
            <option>Shoe</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Price</Label>
          <Input
            id="examplenumber"
            name="number"
            type="number"
            value={product.price}
            onChange={(e) => {
              setProduct({ ...product, price: e?.target?.value });
            }}
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label>Gender :</Label>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
              value="male"
              checked={product.gender === "male"}
              onChange={(e) => {
                setProduct({ ...product, gender: e?.target?.value });
              }}
            />
            <Label check>male</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
              value="female"
              checked={product.gender === "female"}
              onChange={(e) => {
                setProduct({ ...product, gender: e?.target?.value });
              }}
            />
            <Label check>female</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              name="radio1"
              type="radio"
              value="other"
              checked={product.gender === "other"}
              onChange={(e) => {
                setProduct({ ...product, gender: e?.target?.value });
              }}
            />
            <Label check>other</Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="exampleRange">Discount Percentage</Label>
          <Input
            type="range"
            name="range"
            id="exampleRange"
            onDragStart="0"
            min="0"
            max="100"
            value={product.discountPercentage}
            onChange={(e) => {
              setProduct({ ...product, discountPercentage: e?.target?.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Color</Label>
          {["red", "white", "black", "green", "yellow", "orange"].map(
            (e, i) => {
              return (
                <>
                  <Input
                    id="exampleSelect"
                    name="select"
                    type="checkbox"
                    value="red"
                    checked={product.color.includes(i)}
                    onChange={() => colorCheck(i, e)}
                    className="ms-2"
                  />
                  <Label className="text-capitalize">{e}</Label>
                </>
              );
            }
          )}

          <Label>42</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="checkbox"
            value="43"
            checked={product.size === "43"}
            onChange={(e) => {
              setProduct({ ...product, size: e?.target?.value });
            }}
            className="ms-2"
          ></Input>
          <Label>43</Label>
        </FormGroup>
      </Form>
    </div>
  );
}
