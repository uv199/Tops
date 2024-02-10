import React from "react";
import { useSelector } from "react-redux";

export default function Product() {
  let productData = useSelector((store) => {
      return store;
    });
    console.log("-----------  productData----------->", productData);
  return <div></div>;
}
