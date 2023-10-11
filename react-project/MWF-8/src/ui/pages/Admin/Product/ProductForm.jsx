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
import {
  categoryOptions,
  colorOptions,
  sizeOptions,
} from "../../../../utils/OptoionData";
import axios from "axios";
import { BE_URL } from "../../../../config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../Redux/fetures/product/productSlice";

export default ({ modal, toggle }) => {
  let [prouductData, setProductData] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
    thumbnail: "",
    gender: "",
    color: [],
    category: [],
    discountPercentage: "",
    availableStock: "",
  });
  const dispatch = useDispatch();
  const submitHandler = () => {
    toggle()
    console.log("----prouductData---", prouductData);
    axios
      .post(`${BE_URL}/product/create`, prouductData, {
        headers: {
          "Content-Type": "application/json",
          authorization: ` Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resData) => {
        console.log("----->", resData);
        dispatch(addProduct(resData.data));
        toast.success("Product added..!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
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
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        title: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="decription">Description</Label>
                  <Input
                    id="description"
                    placeholder="Enter product description"
                    type="text"
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        description: e?.target?.value,
                      })
                    }
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
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        brand: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Gender</Label>
                  <Row>
                    <Col>
                      <Input
                        id="gender"
                        className="me-2"
                        type="radio"
                        name="test"
                        // checked={prouductData.gender === "male"}
                        onChange={() =>
                          setProductData({ ...prouductData, gender: "male" })
                        }
                      />
                      <Label for="gender">Male</Label>
                    </Col>
                    <Col>
                      <Input
                        id="gender"
                        className="me-2"
                        type="radio"
                        name="test"
                        onChange={() =>
                          setProductData({ ...prouductData, gender: "female" })
                        }
                      />
                      <Label for="gender">Female</Label>
                    </Col>
                    <Col>
                      <Input
                        id="gender"
                        className="me-2"
                        type="radio"
                        name="test"
                        onChange={() =>
                          setProductData({ ...prouductData, gender: "kids" })
                        }
                      />
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
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        thumbnail: e?.target?.value,
                      })
                    }
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
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        discountPercentage: e?.target?.value,
                      })
                    }
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
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        availableStock: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="size">Available Size</Label>
                  <Select
                    isMulti
                    options={sizeOptions}
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        size: e.map((ele) => ele.value),
                      })
                    }
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
                    options={colorOptions}
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        color: e.map((ele) => ele.value),
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="category">Category</Label>
                  <Select
                    isMulti
                    options={categoryOptions}
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        category: e?.map((ele) => ele.value),
                      })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="color">Price</Label>
                  <Input
                    id="price"
                    placeholder="Enter product price"
                    type="number"
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        price: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="w-100" onClick={submitHandler}>
              Add Product
            </Button>
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
  price: 500,--
  thumbnail: "image url",
  discountPercentage: 20,
  category: ["sports","shose"],
  color:  ["red", "black", "white"],
  size:  ["44", "45", "42", "43"],
  availableStock: 500,
},
*/
