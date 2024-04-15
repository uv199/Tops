import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "blue", label: "Blue" },
];
const categoryOptions = [
  { value: "casual", label: "casual" },
  { value: "sports", label: "sports" },
  { value: "formal", label: "formal" },
  { value: "party-Wear", label: "party Wear" },
];

export default function ProductForm({
  modal,
  toggle,
  previewdata,
  refetch,
  defaultData,
  updateMode,
}) {
  console.log("-----------  updateMode----------->", updateMode);
  let [product, setProduct] = useState({});
  console.log(previewdata);
  const addProduct = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
    })
      .then((res) => {
        console.log("-----------  res----------->", res);
        toast.success("added...!");
        toggle();
        refetch();
        setProduct(initalState);
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  };

  const updateProduct = (e) => {
    // cllapi
  };

  useEffect(() => {
    setProduct(defaultData);
  }, [defaultData]);

  let selectHandler = (e, type) => {
    if (type === "color") {
      let color = e.map((e) => e.value);
      setProduct({ ...product, color });
    }
  };
  const checkHandler = (ee) => {
    if (product?.size?.includes(ee)) {
      let filter = product?.size((e) => e !== ee);
      setProduct({ ...product, size: filter });
    } else {
      setProduct({ ...product, size: [...product.size, ee] });
    }
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {" "}
          <Form onSubmit={(e) => submitHandler(e)}>
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
              <div className="d-flex w-100 gap-3">
                <FormGroup>
                  <Input
                    type="radio"
                    className="me-2"
                    checked={product.gender === "male"}
                    onChange={() => setProduct({ ...product, gender: "male" })}
                  />
                  <Label>Male</Label>
                </FormGroup>
                <FormGroup disabled>
                  <Input
                    type="radio"
                    className="me-2"
                    checked={product?.gender === "female"}
                    onChange={() =>
                      setProduct({ ...product, gender: "female" })
                    }
                  />
                  <Label>Female</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="radio"
                    className="me-2"
                    checked={product?.gender === "kids"}
                    onChange={() => setProduct({ ...product, gender: "kids" })}
                  />
                  <Label>Kids</Label>
                </FormGroup>
              </div>
            </FormGroup>

            <FormGroup>
              <Label for="color">Color</Label>
              <Select
                id="color"
                isMulti
                value={product.color?.map((color) => {
                  return { value: color, label: color };
                })}
                options={colorOptions}
                onChange={(e) => selectHandler(e, "color")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Select
                id="category"
                isMulti
                options={categoryOptions}
                value={product.category?.map((ele) => {
                  return { value: ele, label: ele };
                })}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    category: e.map((ele) => ele.value),
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                id="price"
                placeholder="Enter price"
                type="number"
                value={product?.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="discountPercentage">Discount</Label>
              <Input
                id="discountPercentage"
                placeholder="Enter brand"
                type="number"
                value={product?.discountPercentage}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    discountPercentage: e?.target?.value,
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Thumbnail</Label>
              <Input
                type="text"
                value={product.thumbnail}
                onChange={(e) =>
                  setProduct({ ...product, thumbnail: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="availableStock">Available Stock</Label>
              <Input
                id="availableStock"
                placeholder="Enter brand"
                type="number"
                value={product?.availableStock}
                onChange={(e) =>
                  setProduct({ ...product, availableStock: e?.target?.value })
                }
              />
            </FormGroup>
            <Label for="checkBox40">Size</Label>
            <FormGroup className="d-flex gap-2">
              {["41", "42", "43", "44", "45"]?.map?.((e, i) => {
                return (
                  <div key={i}>
                    <Input
                      id="checkBox40"
                      type="checkbox"
                      value={product?.size}
                      checked={product?.size?.includes?.(e)}
                      onChange={() => checkHandler(e)}
                      className="me-2"
                    />
                    <Label for="checkBox40">{e}</Label>
                  </div>
                );
              })}
            </FormGroup>
            {updateMode ? (
              <Button
                onClick={(e) => updateProduct(e)}
                color="danger"
                className="w-100"
              >
                Update
              </Button>
            ) : (
              <Button
                onClick={(e) => addProduct(e)}
                color="danger"
                className="w-100"
              >
                Submit
              </Button>
            )}
          </Form>{" "}
        </ModalBody>
      </Modal>
    </div>
  );
}
