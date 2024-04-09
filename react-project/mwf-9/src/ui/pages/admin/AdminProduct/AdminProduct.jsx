import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import ProductModal from "./ProductModal";
import ProductTable from "./ProductTable";

export default function AdminProduct() {
  const [modal, setModal] = useState(false);
  let [editData, setEditData] = useState({});

  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (!modal) setEditData({});
  }, [modal]);

  return (
    <div className="p-4">
      <ProductModal modal={modal} toggle={toggle} editData={editData} />
      <h1 className="text-center">Product Table</h1>
      <div className="d-flex justify-content-end">
        <Button color="danger" onClick={toggle}>
          Add Product
        </Button>
      </div>
      <hr />
      <ProductTable setEditData={setEditData} toggle={toggle} />
    </div>
  );
}
//  /product/getAll
