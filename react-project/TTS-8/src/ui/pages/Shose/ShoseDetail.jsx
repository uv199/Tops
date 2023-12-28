import axios from "axios";
import React, { useEffect, useState } from "react";
import { BE_URL } from "../../../config";
import { useParams } from "react-router-dom";

export default function ShoseDetail() {
  let [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}/product/getProductById/${id}`,
    })
      .then((res) => {
        setProduct(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}
