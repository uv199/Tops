import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  let [data, setData] = useState({});

  let { productId } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${productId}`,
    })
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  }, []);
  
  return (
    <div
      className="d-flex justify-content-center border border-danger rounded-3"
      style={{
        backgroundColor: "lightgray",
        margin: "100px",
        padding: "100px",
      }}
    >
      <div className="w-25">
        <img src={data?.image} className="w-100" />
      </div>
      <div className="w-50">
        <h1>Name : {data?.title}</h1>
      </div>
    </div>
  );
}
