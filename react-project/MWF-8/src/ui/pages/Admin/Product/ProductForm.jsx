import Select from "react-select";
import React, { useEffect, useState } from "react";
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
import {
  addProduct,
  updateProduct,
} from "../../../../Redux/fetures/product/productSlice";

export default ({ modal, toggle, updatedData, index, setIndex }) => {
  console.log("updatedData", updatedData?.size);
  let [prouductData, setProductData] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
    thumbnail: "",
    gender: "",
    size: [],
    color: [],
    category: [],
    discountPercentage: "",
    availableStock: "",
  });
  useEffect(() => {
    console.log("-------");
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    setProductData(updatedData);
  }, [updatedData]);

  const submitHandler = () => {
    toggle();
    axios
      .post(`${BE_URL}/product/create`, prouductData, {
        headers: {
          "Content-Type": "application/json",
          authorization: ` Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resData) => {
        dispatch(addProduct(resData.data));
        toast.success("Product added..!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const updateHandler = () => {
    toggle();
    axios
      .put(`${BE_URL}/product/update/${updatedData?._id}`, prouductData, {
        headers: {
          "Content-Type": "application/json",
          authorization: ` Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resData) => {
        dispatch(updateProduct({ index, data: resData?.data?.data }));

        setProductData({
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
        setIndex(null);
        toast.success("Product updated..!");
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
                    value={prouductData?.title}
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
                    value={prouductData?.description}
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
                    value={prouductData?.brand}
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
                        checked={prouductData?.gender === "male"}
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
                        checked={prouductData?.gender === "female"}
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
                        checked={prouductData?.gender === "kids"}
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
                    value={prouductData?.thumbnail}
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
                    value={prouductData?.discountPercentage}
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
                    value={prouductData?.availableStock}
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
                    defaultValue={sizeOptions?.filter?.((ele) =>
                      updatedData?.size?.includes?.(ele.value)
                    )}
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
                    defaultValue={colorOptions?.filter?.((ele) =>
                      updatedData?.color.includes?.(ele?.value)
                    )}
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
                    defaultValue={categoryOptions?.filter?.((ele) =>
                      updatedData?.category.includes?.(ele?.value)
                    )}
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
                    value={prouductData?.price}
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
            {index || index === 0 ? (
              <Button className="w-100" onClick={updateHandler}>
                Update
              </Button>
            ) : (
              <Button className="w-100" onClick={submitHandler}>
                Add Product
              </Button>
            )}
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
