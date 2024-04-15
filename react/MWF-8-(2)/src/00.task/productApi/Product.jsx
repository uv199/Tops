import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import { Button } from "reactstrap";
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
  let [refresh, setRefresh] = useState(true);
  let [modal, setModal] = useState(false);
  let [updateMode, setUpdateMode] = useState(false);
  let [defaultData, setDefaultData] = useState(initalState);
  const toggle = () => setModal(!modal);
  let refetch = () => setRefresh(!refresh);

  useEffect(() => {
    if (!modal) setDefaultData(initalState);
  }, [modal]);

  return (
    <div>
      <Button onClick={() => toggle()}>Add Product</Button>
      <ProductForm
        toggle={toggle}
        modal={modal}
        refetch={refetch}
        defaultData={defaultData}
        updateMode={updateMode}
      />
      <ProductTable
        refetch={refetch}
        refresh={refresh}
        toggle={toggle}
        setDefaultData={setDefaultData}
        setUpdateMode={setUpdateMode}
      />
    </div>
  );
}

let data = {
  title: "",
  description: "An puma shoes which is nothing like puma",
  brand: "puma",
  gender: "kids",
  price: 899,
  thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  category: ["shoes", "durable"],
  color: ["red", "black", "white"],
  size: ["44", "45", "42", "43"],
  availableStock: 34,
};

let key = {
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
