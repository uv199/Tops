import React, { useState } from "react";
import ProducttModal from "./ProducttModal";
import ProducttTable from "./ProducttTable";
import { Button, Input } from "reactstrap";
const intialProduct = {
  title: "",
  description: "",
  brand: "",
  gender: "",
  price: "",
  discountPercentage: "",
  availableStock: "",
  category: [],
  thumbnail: "",
  color: [],
  size: [],
  mainCategorie: "",
};

export default function Product() {
  const [modal, setModal] = useState(false);
  let [product, setProduct] = useState(intialProduct);
  let [updatemode, setUpdatemode] = useState(false);
  let [refresh, setRefresh] = useState(true);
  let [previewdata, setPreviewData] = useState([]);
  let [chek, setCheck] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setProduct(intialProduct);
    setUpdatemode(false);
    setCheck(false);
  };

  const refresHandler = () => {
    setRefresh(!refresh);
  };

  const UpdateHandler = () => {
    setUpdatemode(true);
  };

  const Preview = (e) => {
    setPreviewData([e]);
    toggle();
    setCheck(true);
  };
  return (
    <>
      <div className="d-flex gap-2 justify-content-end mx-4 mt-2 mb-3">
        <Button color="danger" onClick={toggle}>
          New Product
        </Button>
      </div>
      <ProducttModal
        modal={modal}
        toggle={toggle}
        refresHandler={refresHandler}
        produc={product}
        updatemod={updatemode}
        setProduc={setProduct}
        intialProduc={intialProduct}
        setUpdatemod={setUpdatemode}
        previewdata={previewdata}
        chek={chek}
      />
      <ProducttTable
        refresh={refresh}
        refresHandler={refresHandler}
        setProduct={setProduct}
        toggle={toggle}
        UpdateHandler={UpdateHandler}
        Preview={Preview}
      />
    </>
  );
}
