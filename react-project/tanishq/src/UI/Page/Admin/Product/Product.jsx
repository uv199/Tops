import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import {
  createProduct,
  deleteProduct,
  fetchAllProduct,
} from "../../../api/product";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Button, TextInput } from "flowbite-react";
import { ProductModal } from "./ProductModal";

export default function ProductCom() {
  // Refetch Flag/ReFresh Page State And Function
  const [refetchFlag, setRefetchFlag] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [viewopenModal, setViewOpenModal] = useState(false);
  let [allProducts, setAllProduct] = useState({});
  let [productdata, setProductData] = useState([]);
  let [updateMode, setUpdateMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pagination, setPagination] = useState({
    totalProduct: 10,
    limit: 10,
    page: 1,
  });

  const refetch = () => setRefetchFlag(!refetchFlag);
  // Set Cookie
  const [cookie] = useCookies(["token","user"]);

  // GetData From API
  useEffect(() => {
    (async function getData() {
      let { data, error } = await fetchAllProduct({
        ...pagination,
        searchQuery,
      });
      if (error) toast.error("Something went wrong");
      else {
        setAllProduct(data.data);
        setPagination({ ...pagination, totalProduct: data.count });
      }
    })();
  }, [refetchFlag, pagination.limit, pagination.page, searchQuery]);

  // Update Data In API
  const updateHandler = (productData) => {
    console.log("-----------  productData----------->", productData);
    setOpenModal(true);
    setProductData(productData);
    setUpdateMode(true);
  };

  const viewHandler = () => {
    setViewOpenModal(true);
  };

  // Delete Data In API
  const deleteHandler = async (productId) => {
    const { error, data } = await deleteProduct(productId, cookie?.token);
    if (error) {
      toast.error("Failed to delete product");
    } else {
      refetch();
      toast.success("Product deleted successfully");
    }
  };

  // Add Product in API
  const addProduct = async (newProduct) => {
    let { data, error } = await createProduct(newProduct);
    if (error) toast.error("somthing went wrong");
    else refetch();
  };

  return (
    <div className="px-[3rem] flex flex-col py-6">
      <div className="flex justify-end  flex-col items-end gap-4">
        <Button
          onClick={() => setOpenModal(true)}
          className="bg-[#822729] hover:bg-sky-700"
        >
          Add Product
        </Button>

        <TextInput
          type="text"
          placeholder="Search For Product..."
          className="searchbar w-[45%] "
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <ProductModal
        refetch={refetch}
        productdata={productdata}
        openModal={openModal}
        setProductData={setProductData}
        setUpdateMode={setUpdateMode}
        setOpenModal={setOpenModal}
        addProduct={addProduct}
        updateMode={updateMode}
      />
      <ProductTable
        allProducts={allProducts}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
        pagination={pagination}
        setPagination={setPagination}
        searchQuery={searchQuery}
        viewHandler={viewHandler}
      />
    </div>
  );
}
