import React, { useState } from "react";
import ProductTable from "./ProductTable";

export default function Product() {
  let [refresh, setRefresh] = useState(true);

  let refetch = () => setRefresh(!refresh);
  return (
    <div>
      <ProductTable refetch={refetch} refresh={refresh} />
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
