import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";

const options = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "blue", label: "Blue" },
];

const intialProduct = {
  title: "",
  description: "",
  brand: "",
  gender: "", // radio
  price: "", // number
  discountPercentage: "", // text
  availableStock: "", // text
  category: [], // select
  thumbnail: "", // text
  color: [], // select
  size: [], // checkbox
};

let obj2 = {
  gender: "male", // radio // male-female-kids
  title: "Nike airJordan-440", // text
  description: "shose with comfort", // text
  price: 1999, // number
  discountPercentage: 70, // text
  availableStock: 10, // text
  brand: "nike", // text
  category: ["casual", "highlength"], // select
  thumbnail: "url", // text
  color: ["black", "white", "yellow", "green"], // select
  size: ["45", "44", "43", "42"], // checkbox
};

export default function Product() {
  const [product, setProduct] = useState(intialProduct);
  let [allProduct, setAllProduct] = useState([]);
  const [modal, setModal] = useState(false);
  let [select, setSelect] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        console.log("---->", res.data.data);
        setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  let submitHandler = () => {
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
    })
      .then((res) => {
        console.log("---->", res.data);
        toast.success("data added");
        // setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const selectHandler = (e) => {
    console.log("---->", e);

    let data = [
      { value: "green", label: "Green" },
      { value: "white", label: "White" },
      { value: "blue", label: "Blue" },
    ];

    //  ["green","white","blue"]
    let color = e.map((e) => e.value);
    console.log("-----------  color----------->", color);
  };
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button onClick={submitHandler}>Add Data</Button>
      <Select isMulti options={options} onChange={(e) => selectHandler(e)} />

      <Button color="danger" onClick={toggle}>
        Add Product
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="text-center" toggle={toggle}>
          Product Form
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter Title"
                type="text"
                value={product?.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                placeholder="Enter description"
                type="text"
                value={product?.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="brand">Brand</Label>
              <Input
                id="brand"
                placeholder="Enter brand"
                type="text"
                value={product?.brand}
                onChange={(e) =>
                  setProduct({ ...product, brand: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label>Gender</Label>
              <FormGroup>
                <Input type="radio" />
                <Label>Male</Label>
              </FormGroup>
              <FormGroup disabled>
                <Input type="radio" />
                <Label>Female</Label>
              </FormGroup>
              <FormGroup>
                <Input type="radio" /> <Label>Kids</Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label for="brand">Brand</Label>
              <Input id="brand" placeholder="Enter brand" type="text" />
            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COLOR</th>
            <th>SIZE</th>
          </tr>
        </thead>
        <tbody>
          {allProduct?.map?.((e, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>
                  <img style={{ height: "30px" }} src={e?.thumbnail} alt="" />
                </td>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>
                  <div className="d-flex gap-2">
                    {e?.color.map((color) => {
                      return (
                        <div
                          style={{
                            height: "10px",
                            width: "10px",
                            border: "1px solid black",
                            borderRadius: "50%",
                            backgroundColor: color,
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </td>
                <td>{e?.size}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

let obj = {
  gender: "kids", // radio
  title: "Nike airJordan", // text
  description: "shose with comfort", // text
  price: 19991, // number
  discountPercentage: 10, // text
  availableStock: 102, // text
  brand: "nike", // text
  category: ["casual", "highlength"], // select
  thumbnail: "url", // text
  color: ["black", "white"], // select
  size: ["45", "44", "43", "42"], // checkbox
};
