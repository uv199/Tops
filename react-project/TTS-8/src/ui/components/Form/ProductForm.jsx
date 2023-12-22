import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Label, Input, FormGroup, Form } from "reactstrap";
import { BE_URL } from "../../../config";
import Select from "react-select";
import { CloudCog } from "lucide-react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
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

const productForm = [
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
  let [searchParams] = useSearchParams();
  useEffect(() => {
    const id = searchParams.get("id");
    axios({
      method: "get",
      url: `${BE_URL}/product/getProductById/${id}`,
    }).then((res) => {
      setProduct(res?.data?.data);
    });
  }, [location.search]);

  const token = useSelector((state) => state?.authReducer?.token);

  const handleCheck = (value) => {
    // if value available in array then remove from array
    // and if not available in array then add it

    if (product.size.includes(value)) {
      setProduct({ ...product, size: product.size.filter((e) => e !== value) });
    } else {
      setProduct({ ...product, size: [...product.size, value] });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${BE_URL}/product/create`,
      data: product,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        toast.success("Product added successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <>
      <Form onSubmit={submitHandler}>
        {productForm.map((ele, i) => {
          return (
            <InputCom key={i} {...ele} setData={setProduct} data={product} />
          );
        })}
        <label>Gender</label>
        <FormGroup tag="fieldset" className="d-flex gap-3 ">
          <FormGroup check>
            <Input
              onChange={() => setProduct({ ...product, gender: "male" })}
              type="radio"
              checked={product?.gender === "male"}
            />
            <Label check>Male</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              onChange={() => setProduct({ ...product, gender: "female" })}
              type="radio"
              checked={product?.gender === "female"}
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
            onChange={(e) =>
              setProduct({ ...product, category: e.map((ele) => ele.value) })
            }
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
            // ["red","black"]
            value={[
              { value: "red", label: "Red" },
              { value: "black", label: "Black" },
            ]}
            onChange={(e) =>
              setProduct({ ...product, color: e.map((ele) => ele.value) })
            }
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
                <Input
                  checked={product?.size?.includes?.("42")}
                  onChange={() => handleCheck("42")}
                  type="checkbox"
                />
                <Label check>42</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  checked={product?.size?.includes?.("43")}
                  type="checkbox"
                  onChange={() => handleCheck("43")}
                />
                <Label check>43</Label>
              </FormGroup>
            </div>
            <div className="w-25">
              <FormGroup check>
                <Input
                  checked={product?.size?.includes?.("44")}
                  onChange={() => handleCheck("44")}
                  type="checkbox"
                />
                <Label check>44</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  checked={product?.size?.includes?.("45")}
                  onChange={() => handleCheck("45")}
                  type="checkbox"
                />
                <Label check>45</Label>
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

/*

    let arr = product.size;
    if (arr.includes(x)) {
      let newArr = arr.filter((e) => e !== x);
      setProduct({ ...product, size: newArr });
    } else {
      let newArr = [...arr, x];
      setProduct({ ...product, size: newArr });
    }

    */
