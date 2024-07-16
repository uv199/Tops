import React, { useState, useEffect } from "react";
import { APIinstance } from "../../../api/axiosConfig";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import ReactSelect from "react-select";
import ModalPreview from "./ModalPreview";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
// import Modalview from "./ModalView";

let limitOptions = [
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 25, value: 25 },
  { label: 50, value: 50 },
];

export default function ProductTable({ flag, refetch, args }) {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ limit: 10, page: 1 });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  let [count, setCount] = useState(0);
  const [cookies] = useCookies(["token"]);

  const navigate = useNavigate();

  useEffect(() => {
    const tableProduct = async () => {
      try {
        let { data } = await APIinstance.get("/product/getAllPaginate", {
          params: {
            limit: pagination.limit,
            page: pagination.page,
          },
        });
        setProducts(data?.data);
        setCount(data?.count);
      } catch (error) {
        console.log("======error===", error);
      }
    };
    tableProduct();
  }, [flag, pagination]);

  //  ==================== Delete Product =================
  const deleteHandler = (id) => {
    try {
      let { data } = APIinstance.delete("/product/delete/" + id, {
        headers: {
          authorization: "bearer " + cookies.token,
        },
      });
      toast.success("Product deleted..!");
      console.log(data);
      refetch();
    } catch (error) {
      console.log("-----------  error----------->", error);
    }
  };

  // =================== Preview ====================
  const handlePreviewClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // ======================= Pagination ===================
  const handlePageClick = (e) => {
    setPagination({ ...pagination, page: e.selected + 1 });
  };

  const editHandler = (data) => {
    console.log("-----------  data----------->", data);
    navigate("/admin-product/create", { state: data });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-4xl text-center fw-bold p-2">Products</h1>
        <div>
          <ReactSelect
            className="w-[300px] mb-3"
            onChange={(e) => setPagination({ page: 1, limit: e.value })}
            options={limitOptions}
          />

          <ReactPaginate
            className="flex gap-2 mb-3"
            pageClassName="border border-black bg-blue-200 py-1 px-5 flex justify-center items-center rounded-full hover:bg-blue-300"
            activeClassName="bg-blue-500  text-white text-lg font-bold"
            previousClassName="border border-black bg-gray-200 py-1 px-4 flex justify-center items-center rounded-full hover:bg-gray-300 text-lg font-bold"
            nextClassName="border border-black bg-gray-200 py-1 px-4 flex justify-center items-center rounded-full hover:bg-gray-300 text-lg font-bold"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={Math.ceil(count / pagination.limit)}
            previousLabel="< previous "
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
      <hr className="h-2 bg-red-600" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white p-3">
          <thead>
            <tr>
              {[
                "Sr.no",

                "Image",
                "Title",
                "Price",
                "DiscountPrize",
                "Size",
                "Action",
              ]?.map((e, i) => {
                return (
                  <th
                    key={i}
                    className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider"
                  >
                    {e}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="p-4">
                <td className="px-6 border-b border-gray-300">{index + 1}</td>
                <td className="px-6 border-b border-gray-300">
                  <img
                    src={product.thumbnail}
                    className="w-[150px] p-3"
                    alt=""
                  />
                </td>
                <td className="px-6 border-b  border-gray-300">
                  {product.title}
                </td>
                <td className="px-6 border-b border-gray-300">
                  {product.price}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {product.discountPercentage
                    ? product.price -
                      (product.discountPercentage / 100) * product.price
                    : product.price}
                </td>
                <td className="px-6 border-b border-gray-300 ">
                  <div className="flex gap-2">
                    {["10ml", "50ml", "100ml", "150ml"].map?.((e, index) => {
                      return (
                        <div
                          className={`border px-2 py-1 rounded-md ${
                            product?.size?.includes(e)
                              ? "border-black"
                              : "border-gray-300 text-gray-300"
                          }`}
                          style={{ backgroundColor: e }}
                          key={index}
                        >
                          {e}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td className="px-6 border-b border-gray-300">
                  <div className="flex gap-2">
                    <p
                      className="text-blue-500 bg-blue-200 py-1 px-2 border border-blue-500 rounded-md cursor-pointer hover:bg-blue-300"
                      onClick={() => handlePreviewClick(product)}
                    >
                      Preview
                    </p>

                    <p
                      onClick={() => editHandler(product)}
                      className="text-blue-500 bg-blue-200 py-1 px-2 border border-blue-500 rounded-md cursor-pointer hover:bg-blue-300"
                    >
                      Edit
                    </p>
                    <p
                      className="text-red-500 bg-red-200 py-1 px-2 border border-red-500 rounded-md cursor-pointer hover:bg-red-300"
                      onClick={() => deleteHandler(product?._id)}
                    >
                      Delete
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <ModalPreview
          product={selectedProduct}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
