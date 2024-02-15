import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import ProductForm from "./ProductForm";
import { Button } from "reactstrap";
import Header from "../../componenet/Header";
import Modal from "./Modal";
import { toast } from "react-toastify";

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

export default function Product() {
  const [modal, setModal] = useState(false);
  let [data, setData] = useState([]);
  let [productData, setProductData] = useState(initialData);
  let [fetchFlag, setFetchFlag] = useState(true);

  const toggle = () => setModal(!modal);
  const reFetchData = () => setFetchFlag(!fetchFlag);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        setData(res?.data?.data);
        console.log("----->data");
      })
      .catch((err) => {
        console.log(
          "-----------  err.response.error----------->",
          err.response.error
        );
        toast.error(err.response.error);
      });
  }, [fetchFlag]);

  const deleteHandler = (id) => {
    console.log("----------->", id);
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
    })
      .then((res) => {
        toast.success("Product deleted....!");
        reFetchData();
      })
      .catch((err) => {
        toast.error(err.response.error);
      });
  };

  const submitHandler = (product) => {
    axios({
      method: "post",
      url: `http://localhost:9999/product/create`,
      data: product,
    })
      .then((res) => {
        console.log("-----------  res----------->", res);
        toast.success("product added");
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

  const updateHandler = (newData) => {
    console.log("newData", newData);
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${newData?._id}`,
      data: newData,
    })
      .then((res) => {
        toast.success("product added");
        toggle();
        reFetchData();
        setProductData();
      })
      .catch((err) => {
        console.log("-----------  err----------->", err.response);
        toast.error(err.response.error);
      });
  };

  const editHandler = (data) => {
    console.log("data", data);
    setProductData(data);
    toggle();
  };
  return (
    <div className="w-100">
      <Button onClick={toggle}>Add Product</Button>
      <DataTable
        productData={data}
        deleteHandler={deleteHandler}
        reFetchData={reFetchData}
        editHandler={editHandler}
      />
      <Modal
        productData={productData}
        updateHandler={updateHandler}
        modal={modal}
        toggle={toggle}
        submitHandler={submitHandler}
      />
    </div>
  );
}
