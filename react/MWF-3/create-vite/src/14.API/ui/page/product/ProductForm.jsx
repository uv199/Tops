import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";

const initialData = {
  title: "",
  description: "",
  brand: "",
  category: [],
  price: "",
  gender: "",
  discountPercentage: "0",
  color: [],
  size: [],
};

const formFeild = [
  { key: "title", type: "text" },
  { key: "description", type: "text" },
  { key: "brand", type: "text" },
  { key: "price", type: "number" },
];
export default function ProductForm({ toggle }) {
  let [product, setProduct] = useState(initialData);
  // do logic for check
  // do map for all size, chatagory gender
  // on submit par log form data
  const submitHandler = (e) => {
    e?.preventDefault();
    console.log(product);
    axios({
      method: "post",
      url: `http://localhost:9999/product/create`,
      data: product,
    })
      .then((res) => {
        console.log("-----------  res----------->", res);
        toast.success("product added");
        setProduct(initialData);
        toggle();
      })
      .catch((err) => {
        console.log(
          "-----------  err.response.error----------->",
          err.response.error
        );
        toast.error(err.response.error);
      });
  };

  const checkHandler = (i, ele, key) => {
    console.log("------>");
    let available = product?.[key]?.includes(ele);
    console.log("-----------  available----------->", available);
    if (available) {
      let data = product?.[key]?.filter((e, i) => e !== ele);
      setProduct({ ...product, [key]: data });
    } else {
      setProduct({ ...product, [key]: [...product?.[key], ele] });
    }
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        {formFeild.map(({ key, type }) => {
          return (
            <FormGroup>
              <Label for="exampleEmail" className="text-capitalize ">
                {key}
              </Label>
              <Input
                id="exampleEmail"
                value={product[key]}
                placeholder={`Enter your ${key}`}
                type={type}
                onChange={(e) => {
                  setProduct({ ...product, [key]: e?.target?.value });
                }}
              />
            </FormGroup>
          );
        })}

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
          <div className="row">
            {["red", "white", "black", "green", "yellow", "orange"].map(
              (e, i) => {
                return (
                  <div className="d-flex col-4 align-items-center gap-1">
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="checkbox"
                      value="red"
                      checked={product.color.includes(e)}
                      onChange={() => checkHandler(i, e, "color")}
                      className="ms-2 me-2"
                    />
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "5px",
                        backgroundColor: e,
                        border: "1px solid black",
                      }}
                    ></div>
                    <label className="text-capitalize">{e}</label>
                  </div>
                );
              }
            )}
          </div>
        </FormGroup>
        <FormGroup className="d-flex flex-column ">
          <Label for="size">Size</Label>
          <div className="d-flex gap-3">
            {["41", "42", "43", "44", "45"].map((e, i) => {
              return (
                <div>
                  <Input
                    id="size"
                    type="checkbox"
                    checked={product.size.includes(e)}
                    onChange={() => checkHandler(i, e, "size")}
                    className="ms-2 me-2"
                  />
                  <Label className="text-capitalize">{e}</Label>
                </div>
              );
            })}
          </div>
        </FormGroup>
        <Button color="danger">Add Product</Button>
      </Form>
    </div>
  );
}

// http://localhost:9999/user/signin
// {
// 	"email":"admin@admin.com",
// 	"password": "123456"
// }

// token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE3MDQ4ODEzNDh9.qL2JfA0fIPPivl-OH41ZWrPtgo3869KdEm2ggLjOVSc
