import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
let initalState = {
  title: "",
  description: "",
  brand: "",
  gender: "", // [male,female,kids]
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
  const [updatedData, setUpdatedData] = useState(initalState);
  const [modal, setModal] = useState(false);
  let [isRefresh, setIsRefresh] = useState(true);

  const toggle = () => setModal(!modal);
  const refetch = () => setIsRefresh(!isRefresh);

  useEffect(() => {
    if (!modal) {
      setUpdatedData({});
    }
  }, [modal]);

  return (
    <div>
      <ProductForm
        updatedData={updatedData}
        toggle={toggle}
        modal={modal}
        refetch={refetch}
      />
      <ProductTable
        refetch={refetch}
        isRefresh={isRefresh}
        setUpdatedData={setUpdatedData}
        toggle={toggle}
      />
    </div>
  );
}
