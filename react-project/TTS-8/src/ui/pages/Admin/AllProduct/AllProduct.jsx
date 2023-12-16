import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";
import ProductModal from "@component/Modal/ProductModal";
import ProductTable from "./ProductTable";

export default function AllProduct() {
  let [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <ProductModal modal={modal} toggle={toggle} />
      <div style={{ backgroundColor: "lightgrey" }} className="m-3 p-3">
        <div className="d-flex justify-content-end align-items-center">
          <Input
            className="w-25 me-2"
            placeholder={"Search your text here.."}
          />
          <Button onClick={toggle}>Add Product</Button>
        </div>
        <hr />
        <ProductTable />
      </div>
    </>
  );
}
