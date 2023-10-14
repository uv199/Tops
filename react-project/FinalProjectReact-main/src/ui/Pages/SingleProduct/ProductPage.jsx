import axios from "axios";
import React, { useEffect, useState } from "react";
import { BE_URL } from "../../../config";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductPage() {
  let [productData, setProductData] = useState({});
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    axios
      .get(`${BE_URL}product/getProductById/${id}`)
      .then((resData) => {
        console.log("resData", resData?.data?.data);
        setProductData(resData?.data?.data);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  console.log("productData?.color", productData?.color);
  return (
    <>
      <div className="d-flex">
        <div>
          <img src={productData?.thumbnail} alt="" />
        </div>
        <div>
          <h1>{productData.title}</h1>
          <h3
            style={{
              textDecoration: productData.discountPercentage
                ? "line-through"
                : "null",
            }}
          >
            {productData?.price}
          </h3>
          <h2>
            {productData?.price -
              productData?.price * (productData?.discountPercentage / 100)}
          </h2>
          <h3>{productData?.description}</h3>
          {productData?.color?.map?.((e) => {
            console.log("e", e);
            return (
              <div
                style={{
                  backgroundColor: e,
                  height: "15px",
                  width: "15px",
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
