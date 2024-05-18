import axios from "axios";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetailPage() {
  let [product, setProduct] = useState([]);

  const data = useParams();
  console.log("-----------  data----------->", data);

  useEffect(() => {
    async function fetchData(params) {
      try {
        let response = await axios.get(
          `https://fakestoreapi.com/products/${data.id}`
        );
        setProduct(response.data);
      } catch (error) {
        toast.error("somthing went wrong");
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="container  p-12 h-[100vh]">
        <ArrowLeft
          size={50}
          role="button"
          color="gray"
          onClick={() => navigate(-1)}
        />
        <div className="flex">
          <div className="border p-12">
            <img className="max-h-[300px]" src={product?.image} alt="" />
          </div>
          <div className="border p-12">
            <h1>Title : {product?.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
