import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import { useCookies } from "react-cookie";
import { deleteProduct, fetchAllProduct } from "../../../api/product";

export default function Product() {
  const [refetchFlag, setRefetchFlag] = useState(true);
  let [productdata, setProductData] = useState([]);
  const refetch = () => setRefetchFlag(!refetchFlag);

  const [cookie] = useCookies([]);

  useEffect(() => {
    (async function getData() {
      let { data, error } = await fetchAllProduct();
      if (error) toast.error("somthing went wrong");
      else {
        setProductData(data.data);
      }
    })();
  }, [refetchFlag]);

  const updateHandler = () => {};

  const deleteHandler = async (productId) => {
    const { error, data } = await deleteProduct(productId, cookie?.token);
    if (error) {
      toast.error("Failed to delete product");
    } else {
      refetch();
      toast.success("Product deleted successfully");
    }
  };

  return (
    <div>
      <ProductTable
        productdata={productdata}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
    </div>
  );
}
