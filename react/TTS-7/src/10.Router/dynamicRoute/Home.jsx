import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardCom } from "./CardCom";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  let [product, setProduct] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(async () => {
    // async function fetchData(params) {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    } catch (error) {
      toast.error("somthing went wrong");
    }
    // }
    // fetchData();
  }, []);

  return (
    <div className="row p-3">
      <button onClick={() => setSearchParams({ name: "urvish" })}>
        click me
      </button>

      {product.map((e, i) => {
        return (
          <div className="col-3 my-2">
            <CardCom data={e} />
          </div>
        );
      })}
    </div>
  );
}
