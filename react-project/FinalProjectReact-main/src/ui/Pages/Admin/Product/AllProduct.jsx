import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import { useDispatch } from "react-redux";
import { fetchData } from "../../../../redux/fetures/ProductSlice/productSlice";
import { Button } from "reactstrap";

export default function AllProduct() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <div className="w-100 p-3 d-flex flex-column justify-content-end">
        <Button className="w-25" color="danger" onClick={toggle}>
          Add Product
        </Button>
        <ProductForm toggle={toggle} modal={modal} />
        <hr />
        <ProductTable />
      </div>
    </>
  );
}
