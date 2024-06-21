import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import {
  createProduct,
  deleteProduct,
  fetchAllProduct,
} from "../../../Api/Product";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { ProductModal } from "../../../Modal/ProductModal";
import { Button, TextInput } from "flowbite-react";
import ViewProductModal from "../../../Modal/ViewProductModal";

export default function ProductCom() {
  // =========Refetch Flag/ReFresh Page State And Function=====================
  const [refetchFlag, setRefetchFlag] = useState(true);
  const refetch = () => setRefetchFlag(!refetchFlag);

  // ===============Product Data Store/Set ===========================
  let [productdata, setProductData] = useState([]);
  let [allProduct, setAllProduct] = useState({});
let [updateMode,setUpdateMode]=useState(false);

  // ===================Set Cookie==========================
  const [cookie] = useCookies([]);
  const [openModal, setOpenModal] = useState(false);
  const [viewopenModal, setViewOpenModal] = useState(false);

  // ====================For Pagination useing======================
  const [pagination, setPagination] = useState({
    totalProduct: 10,
    limit: 10,
    page: 1,
  });
  // =====================Searching State ===========================
  const [searchQuery, setSearchQuery] = useState("");

  // ==========================GetData From API========================
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

  // ==========================Update Data In API========================
  const updateHandler = (productdata) => {
    console.log(
      "🚀 ~ file: ProductCom.jsx:48 ~ updateHandler ~ updateproductdata:",productdata);
    setOpenModal(true);
    setProductData(productdata)
    setUpdateMode(true);

  };

  const viewHandler = () => {
    setViewOpenModal(true);
  };

  // ==========================Delete Data In API========================
  const deleteHandler = async (productId) => {
    const { error, data } = await deleteProduct(productId, cookie?.token);
    if (error) {
      toast.error("Failed to delete product");
    } else {
      refetch();
      toast.success("Product deleted successfully");
    }
  };

  // ====================Add Product in API==================
  const addProduct = async (newProduct) => {
    console.log(
      "🚀 ~ file: ProductCom.jsx:57 ~ addProduct ~ newProduct:",
      newProduct
    );
    let { data, error } = await createProduct(newProduct);
    if (error) toast.error("somthing went wrong");
    else {
      refetch();
    }
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
      <ViewProductModal
        viewopenModal={viewopenModal}
        setViewOpenModal={setViewOpenModal}
      />
      <ProductModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        addProduct={addProduct}
        productdata={productdata}
        setProductData={setProductData}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
        refetch={refetch}
      />
      <ProductTable
        allProduct={allProduct}
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
