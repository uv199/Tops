import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./redux/productSlice";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

export default function Product() {
  const dispatch = useDispatch();

  const data = useSelector((store) => {
    return store.productSlice;
  });
  if (data.error) {
    toast.error(data.error);
  }
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const getProduct = (no) => {
    dispatch(fetchProduct(no));
  };

  return (
    <div className="flex justify-center items-center">
      {data.pending ? (
        <h1>Loading...!</h1>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1>{data.product.title}</h1>
          <div className="flex gap-2">
            <Button onClick={() => getProduct(1)}>1</Button>
            <Button onClick={() => getProduct(2)}>2</Button>
            <Button onClick={() => getProduct(3)}>3</Button>
          </div>
        </div>
      )}
    </div>
  );
}
