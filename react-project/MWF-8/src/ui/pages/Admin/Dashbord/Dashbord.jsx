import React from "react";
import { useDispatch } from "react-redux";
import { fetchProductData } from "../../../../Redux/fetures/product/productSlice";

export default function Dashbord() {
  const dispatch = useDispatch();
  dispatch(fetchProductData());
  return <div>Dashbord</div>;
}
