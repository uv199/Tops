import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Label, Input, FormGroup, Form } from "reactstrap";
import { BE_URL } from "../../../config";
import Select from "react-select";
import { CloudCog } from "lucide-react";
const intialData = {
  title: "",
  description: "",
  price: "",
  discountPercentage: "",
  availableStock: "",
  thumbnail: "",
  brand: "",
  gender: "",
  category: [],
  color: [],
  size: [],
};
const InputCom = ({ feild, type, setData, data }) => {
  return (
    <FormGroup>
      <Label style={{ textTransform: "capitalize" }} for={feild}>
        {feild}
      </Label>
      <Input
        onChange={(e) => setData({ ...data, [feild]: e?.target?.value })}
        value={data?.[feild]}
        id={feild}
        placeholder={`Enter your ${feild}`}
        type={"text" || type}
      />
    </FormGroup>
  );
};

let productForm = [
  { feild: "title" },
  { feild: "description" },
  { feild: "brand" },
  { feild: "thumbnail" },
  { feild: "availableStock" },
  { feild: "discountPercentage" },
  { feild: "price" },
];
const categoryOptions = [
  { value: "sports", label: "Sport" },
  { value: "casual", label: "Casual" },
  { value: "formal", label: "Formal" },
  { value: "lofer", label: "Lofer" },
  { value: "party-wear", label: "Party Wear" },
];
const colorOptions = [
  { value: "red", label: "Red" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "gray", label: "Gray" },
];

export default function ProductForm({ toggle }) {
  const [product, setProduct] = useState(intialData);

  const submitHandler = (e) => {
    console.log("----->");
  };
  return (
    <>
      <Form onSubmit={submitHandler}>
        {productForm.map((ele) => {
          return <InputCom {...ele} setData={setProduct} data={product} />;
        })}
        <label>Gender</label>
        <FormGroup tag="fieldset" className="d-flex gap-3 ">
          <FormGroup check>
            <Input
              onChange={() => setProduct({ ...product, gender: "male" })}
              type="radio"
              checked={product.gender === "male"}
            />
            <Label check>Male</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              onChange={() => setProduct({ ...product, gender: "female" })}
              type="radio"
              checked={product.gender === "female"}
            />
            <Label check>Female</Label>
          </FormGroup>
          <FormGroup check disabled>
            <Input
              onChange={() => setProduct({ ...product, gender: "kids" })}
              type="radio"
              checked={product.gender === "kids"}
            />

            <Label check>Kids</Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <label>Category</label>
          <Select
            isMulti
            name="category"
            onChange={(e) => console.log("---->", e)}
            options={categoryOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </FormGroup>
        <FormGroup>
          <label>Color</label>
          <Select
            isMulti
            name="color"
            options={colorOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </FormGroup>
        <FormGroup>
          <label>Size</label>

          <div className="d-flex mb-4">
            <div className="w-25">
              <FormGroup check>
                <Input id="checkbox2" type="checkbox" /> <Label check>42</Label>
              </FormGroup>
              <FormGroup check>
                <Input id="checkbox2" type="checkbox" /> <Label check>43</Label>
              </FormGroup>
            </div>
            <div className="w-25">
              <FormGroup check>
                <Input id="checkbox2" type="checkbox" /> <Label check>44</Label>
              </FormGroup>
              <FormGroup check>
                <Input id="checkbox2" type="checkbox" /> <Label check>45</Label>
              </FormGroup>
            </div>
          </div>
        </FormGroup>

        <Button color="danger" className="w-100">
          Create Product
        </Button>
      </Form>
    </>
  );
}

let arr = [
  { value: "casual", label: "Casual" },
  { value: "sports", label: "Sport" },
  { value: "formal", label: "Formal" },
];
let arr2 = ["casual", "sports", "formal"];
