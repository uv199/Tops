import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import Card2 from "./Card2";
import { useNavigate } from "react-router-dom";

export default function AllProduct2() {
  let [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const redirect = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    // axios.get("",{},{})
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
        setProduct(res?.data);
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "lightcyan",
          width: "100vw",
          padding: "auto",
        }}
      >
        <div className="d-flex flex-wrap gap-3">
          {product.map((e) => {
            return <Card2 data={e} redirect={redirect} />;
          })}
        </div>
      </div>
    </>
  );
}
