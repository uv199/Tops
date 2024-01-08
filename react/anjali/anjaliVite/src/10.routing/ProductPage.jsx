import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let [singleData, setSingleData] = useState({});

  const { id } = useParams();
  console.log("-----------  id----------->", id);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${id}`,
    })
      .then((res) => {
        console.log("-----------  res.data----------->", res.data);
        setSingleData(res.data);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }, []);
  return (
    <div className="d-flex" style={{ width: "100vw" }}>
      <div className=" border border-dark" style={{ width: "30%" }}>
        <img src={singleData?.image} className="w-100 p-5" />
      </div>
      <div style={{ width: "70%" }} className=" border border-dark p-5">
        <h1>Product : {singleData?.title}</h1>
        <h4>Price : {singleData?.price}</h4>
      </div>
    </div>
  );
}
