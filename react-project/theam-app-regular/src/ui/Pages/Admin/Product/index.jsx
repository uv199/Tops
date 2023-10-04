import React, { useEffect, useState } from "react";
import { ProductForm } from "./ProductForm";
import ProductTable from "./ProductTable";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../../../redux/features/product/ProductSlice";

export default function Product() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  });
  return (
    <>
      <Button onClick={() => toggle()}>Add Product</Button>
      <ProductForm toggle={toggle} modal={modal} />
      <ProductTable />
    </>
  );
}
