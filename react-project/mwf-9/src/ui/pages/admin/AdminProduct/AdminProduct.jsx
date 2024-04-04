import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import ProductModal from "./ProductModal";
import ProductTable from "./ProductTable";

export default function AdminProduct() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="p-4">
      <ProductModal modal={modal} toggle={toggle} />
      <h1 className="text-center">Product Table</h1>
      <div className="d-flex justify-content-end">
        <Button color="danger" onClick={toggle}>
          Add Product
        </Button>
      </div>
      <hr />
      <ProductTable />
    </div>
  );
}
//  /product/getAll
