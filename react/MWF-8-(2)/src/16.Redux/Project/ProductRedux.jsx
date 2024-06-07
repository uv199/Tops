import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./Redux/Product";

export default function ProductRedux() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(2));
  }, []);

  let productSlice = useSelector((store) => store.productSlice);

  if (productSlice.pending) {
    return <h1>Loading....</h1>;
  }
  if (productSlice.error) {
    alert(productSlice.error);
  }
  return (
    <div className="flex gap-1">
      <h1>data</h1>
      {[...new Array(20)].map((e, i) => {
        return (
          <li className="cursor-pointer border px-2 py-1 w-[50px] ">{i + 1}</li>
        );
      })}
    </div>
  );
}
