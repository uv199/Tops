import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { instanceApi } from "../../../Api/axiosConfig";

export default function Product() {
  let [allProduct, setAllProduct] = useState([]);
  console.log("-----------  allProduct----------->", allProduct);
  const navigate = useNavigate();

  async function callApi(params) {
    let response = await instanceApi.get("/product/getAll");
    setAllProduct(response.data.data);
  }

  useEffect(() => {
    callApi();
  }, []);
  return (
    <div>
      <div className="flex justify-end pr-5 py-5">
        <Button onClick={() => navigate("/admin-product-form")}>
          Add Product
        </Button>
      </div>
      <div className="m-5">
        <ProductTable productData={allProduct} />
      </div>
    </div>
  );
}
