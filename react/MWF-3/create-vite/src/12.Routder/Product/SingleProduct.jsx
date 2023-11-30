import axios from "axios";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SingleProduct() {
  let [product, setProduct] = useState({});
  const navigate = useNavigate();

  const urlData = useParams(); // {id:100}

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${urlData.id}`,
    })
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((err) => {
        alert("some erro");
      });
  }, []);

  return (
    <>
      <div className="w-75">
        <div
          onClick={() => navigate("/product")}
          role="button"
          style={{ maxWidth: "50px" }}
          className="border border-dark  mb-3 rounded-2 d-flex align-content-center justify-content-center "
        >
          <ArrowLeft />
        </div>
        <div className="d-flex gap-2 w-100">
          <img
            className="w-25 border border-dark rounded-3 p-4"
            src={product.image}
            alt=""
          />
          <div className="w-75 border border-dark rounded-3 p-4">
            <h1>{product.title}</h1>
            <h4>Price: {product.price}</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
