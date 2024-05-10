import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import { useCookies } from "react-cookie";
import { deleteProduct, fetchAllProduct } from "../../../api/product";
import { toast } from "react-toastify";

export default function Product() {
  const [refetchFlag, setRefetchFlag] = useState(true);
  let [productdata, setProductData] = useState([]);
  let [pagination, setPagination] = useState({
    totalProduct: 10,
    limit: 10,
    page: 1,
  });
  const refetch = () => setRefetchFlag(!refetchFlag);

  const [cookie] = useCookies([]);

  useEffect(() => {
    (async function getData() {
      let { data, error } = await fetchAllProduct(pagination);
      console.log("-----------  data----------->", data);
      if (error) toast.error("somthing went wrong");
      else {
        setProductData(data.data);

        // last all and new 10
        // setProductData([...productdata, ...data.data]);

        // for last 5 and new 10
        // let dataArr = productdata.slice(
        //   productdata.length - 5,
        //   productdata.length + 1
        // );
        // setProductData([...dataArr, ...data.data]);
        setPagination({ ...pagination, totalProduct: data.count });
      }
    })();
  }, [refetchFlag, pagination.limit, pagination.page]);

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
        setPagination={setPagination}
        pagination={pagination}
        productdata={productdata}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
    </div>
  );
}
