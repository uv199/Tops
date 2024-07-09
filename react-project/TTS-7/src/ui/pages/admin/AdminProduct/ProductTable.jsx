import React, { useState, useEffect } from "react";
import { APIinstance } from "../../../api/axiosConfig";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import ReactSelect from "react-select";

let limitOptions = [
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 25, value: 25 },
  { label: 50, value: 50 },
];

export default function ProductTable({ flag, refetch }) {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ limit: 10, page: 1 });

  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const tableProduct = async () => {
      try {
        let { data } = await APIinstance.get("/product/getAllPaginate", {
          params: {
            limit: pagination.limit,
            page: 1,
          },
        });
        setProducts(data?.data);
      } catch (error) {
        console.log("======error===", error);
      }
    };
    tableProduct();
  }, [flag, pagination]);

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

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-4xl text-center fw-bold p-2">
          ApiTable {products.length}
        </h1>
        <h1>{pagination.limit}</h1>
        <ReactSelect
          className="w-[100px]"
          onChange={(e) => setPagination({ ...pagination, limit: e.value })}
          options={limitOptions}
        />
      </div>
      <hr className="h-2 bg-red-600" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Sr.no
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Image{" "}
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="px-6 border-b border-gray-300">{index + 1}</td>
                <td className="px-6 border-b border-gray-300">
                  <img src={product.thumbnail} className="w-[50px]" alt="" />
                </td>
                <td className="px-6 border-b border-gray-300">
                  {product.title}
                </td>
                <td className="px-6 border-b border-gray-300">
                  {product.price}
                </td>
                <td className="px-6 border-b border-gray-300 ">
                  <div className="flex gap-2">
                    {["10ml", "50ml", "100ml", "150ml"].map?.((e) => {
                      return (
                        <div
                          className={`border px-2 py-1 rounded-md ${false ? "border-black" : "border-gray-300 text-gray-300"}`}
                          style={{ backgroundColor: e }}
                        >
                          {e}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td className="px-6 border-b border-gray-300">
                  <div className="flex gap-2">
                    <p className="text-gray-500 bg-gray-200 py-1 px-2 border border-gray-500 rounded-md cursor-pointer hover:bg-gray-300">
                      Preview
                    </p>
                    <p className="text-blue-500 bg-blue-200 py-1 px-2 border border-blue-500 rounded-md cursor-pointer hover:bg-blue-300">
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
    </div>
  );
}
