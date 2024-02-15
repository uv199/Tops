import axios from "axios";
import { Edit, Trash } from "lucide-react";
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
  const [refetch, setRefetch] = useState(true);
  const [updateMode, setUpdateMode] = useState(false);

  const refetchData = () => setRefetch(!refetch);
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
  }, [refetch]);
  const toggle = () => {
    setModal(!modal);
    setUpdateMode(false);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    console.log("-----------  product----------->", product);
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: product,
    })
      .then((res) => {
        toast.success("data added");
        setProduct(intialProduct);
        toggle();
        console.log("------>");
        refetchData();
        // setAllProduct(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const selectHandler = (e) => {
    let color = e.map((e) => e.value);
    setProduct({ ...product, color: color });
  };

  const checkHandler = (e) => {
    if (product.size.includes(e)) {
      let filterData = product?.size.filter((ele) => ele !== e);
      setProduct({ ...product, size: filterData });
    } else {
      setProduct({ ...product, size: [...product?.size, e] });
    }
  };

  const deleteHandler = (id) => {
    console.log("-----------  id----------->", id);

    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
    })
      .then((res) => {
        toast.success("Product deleted...!");
        refetchData();
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const editHandler = (data) => {
    console.log("-----------  data----------->", data);
    toggle();
    setProduct(data);
    setUpdateMode(true);
  };

  const updateData = () => {
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${product?._id}`,
      data: product,
    })
      .then((res) => {
        toast.success("Data updated..!");
        setProduct(intialProduct);
        toggle();
        refetchData();
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Add Product
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="text-center" toggle={toggle}>
          Product Form
        </ModalHeader>
        <ModalBody>
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
                options={colorOptions}
                value={product.color?.map((color) => {
                  return { value: color, label: color };
                })}
                onChange={(e) => selectHandler(e)}
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
              <Label for="thumbnail">Image</Label>
              <Input
                id="thumbnail"
                placeholder="Enter image"
                value={product?.thumbnail}
                type="text"
                onChange={(e) =>
                  setProduct({ ...product, thumbnail: e?.target?.value })
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
              {["41", "42", "43", "44", "45"]?.map?.((e) => {
                return (
                  <div>
                    <Input
                      id="checkBox40"
                      type="checkbox"
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
                color="danger"
                className="w-100"
                onClick={() => updateData()}
              >
                Update
              </Button>
            ) : (
              <Button color="danger" className="w-100">
                Submit
              </Button>
            )}
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
                <td>
                  <div className="d-flex gap-2">
                    {[41, 42, 43, 44, 45].map((size) => {
                      return (
                        <div
                          style={{ padding: "5px", border: "1px solid black" }}
                        >
                          {size}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <Edit
                    role="button"
                    color="#81adef"
                    onClick={() => editHandler(e)}
                  />
                  <Trash
                    role="button"
                    color="#f22b2b"
                    onClick={() => deleteHandler(e?._id)}
                  />
                </td>
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
