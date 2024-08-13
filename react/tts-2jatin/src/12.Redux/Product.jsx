import { Button, useSelect } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/Slice/productSlice";
import { toast } from "react-toastify";

export default function Product() {
  let [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  let productSlice = useSelector((store) => {
    return store.productSlice;
  });
  console.log("-----------  productSlice----------->", productSlice);

  if (productSlice.error) {
    toast.error(productSlice.error);
  }
  useEffect(() => {
    setData(productSlice.product);
  }, [productSlice]);

  return (
    <>
      {productSlice.pending ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {data.map((e) => {
            return <li key={e.id}>{e.title}</li>;
          })}
          <Button onClick={() => dispatch(fetchData())}>Call Api</Button>
        </div>
      )}
    </>
  );
}
