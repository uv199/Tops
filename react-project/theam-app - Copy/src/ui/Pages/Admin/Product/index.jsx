import React from "react";
import { ProductForm } from "./ProductForm";
import ProductTable from "./ProductTable";
import { Button } from "reactstrap";

export default function Product() {
  return (
    <>
      <Button>Add Product</Button>
      <ProductForm />
      <ProductTable />
    </>
  );
}
