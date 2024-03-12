import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";

import { Edit, Eye, Slash, Trash } from "lucide-react";
import ProductFullDetails from "./ProductFullDetails";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../../redux/fetures/product/product";
import TableCome from "./TableCome";
import ProductForm from "./ProductForm";
import { intialProduct } from "../../../../utils/intialState";

export default function Product() {
  const [defaultProduct, setDefaultProduct] = useState(intialProduct);

  const [modal, setModal] = useState(false);
  const [refetch, setRefetch] = useState(true);
  const refetchData = () => setRefetch(!refetch);
  const [updateMode, setUpdateMode] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);

  const toggle = () => {
    setModal(!modal);
    setUpdateMode(false);
    setProduct(intialProduct);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);


  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <div style={{ flex: "1", textAlign: "center" }}>
          <h1 className="m-0 ps-5 ms-5">Product</h1>
        </div>

        <div>
          <Button color="danger" onClick={toggle}>
            Add Product
          </Button>
        </div>
      </div>
      <ProductForm />
      <TableCome />
      <ProductFullDetails
        isOpen={detailModal}
        toggle={() => setDetailModal(false)}
        productDetails={selectedProductDetails}
      />
    </>
  );
}
