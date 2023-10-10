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
      <div className="m-2">
        <div className="d-flex justify-content-between align-items-baseline ps-4">
          <h1 className="w-75 text-center">Products</h1>
          <Button className="h-75" onClick={() => toggle()}>Add Product</Button>
        </div>
        <hr />
        <ProductForm toggle={toggle} modal={modal} />
        <ProductTable />
      </div>
    </>
  );
}
