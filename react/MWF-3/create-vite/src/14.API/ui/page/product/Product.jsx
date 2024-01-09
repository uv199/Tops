import axios from "axios";
import React, { useState } from "react";
import DataTable from "./DataTable";
import ProductForm from "./ProductForm";
import { Button } from "reactstrap";
import Header from "../../componenet/Header";
import Modal from "./Modal";

export default function Product() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const callApi = () => {
    axios({
      method: "get",
      url: "http://localhost:9999/user/getAll",
    })
      .then((res) => {
        console.log("res?.data", res?.data);
      })
      .catch((err) => {
        console.log("err-----", err);
      });
  };

  const createUser = () => {
    axios({
      method: "post",
      url: "http://localhost:9999/user/signUp",
      data: data,
    }).then((res) => {
      console.log("-----------  res----------->", res.data);
    });
  };

  return (
    <div className="w-100">
      <Button onClick={toggle}>Add Product</Button>
      <DataTable />
      <Modal modal={modal} toggle={toggle} />
    </div>
  );
}
