import React, { useState } from "react";
import { ProductForm } from "./ProductForm";
import ProductTable from "./ProductTable";
import { Button } from "reactstrap";

export default function Product() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <Button onClick={() => toggle()}>Add Product</Button>
      <ProductForm toggle={toggle} modal={modal} />
      <ProductTable />
    </>
  );
}
