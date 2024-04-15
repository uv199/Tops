import React, { useState } from "react";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

export default function Product() {
  const [modal, setModal] = useState(false);
  let [isRefresh, setIsRefresh] = useState(true);

  const toggle = () => setModal(!modal);
  const refetch = () => setIsRefresh(!isRefresh);

  return (
    <div>
      <ProductForm toggle={toggle} modal={modal} />
      <ProductTable refetch={refetch} isRefresh={isRefresh} />
    </div>
  );
}
