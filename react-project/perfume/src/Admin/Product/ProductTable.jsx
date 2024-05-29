import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { instanceApi } from "../../Ui/Api/axiosconfig";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  let [apiFlag, setApiFlag] = useState(true);

  const refetch = () => setApiFlag(!apiFlag);
  useEffect(() => {
    async function fetchProducts() {
      try {
        let { data } = await instanceApi.get("/product/getAll");
        setProducts(data?.data || []);
        // console.log('Fetched products:', data?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, [apiFlag]);

  const [cookies] = useCookies(["token"]);

  const navigate = useNavigate();

  const deleteHandler = async (product) => {
    try {
      let response = await instanceApi.delete(
        "/product/delete/" + product?._id,
        null,
        {
          headers: {
            authorization:
              "bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InV2QGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MTY4Nzk1Nzd9.J5vvAR9BiK57CuFWtiXZvBuoVAqbqFRBoD08StfyX80",
          },
        }
      );
      refetch();
    } catch (error) {
      console.log("-----------  error----------->", error)
      toast.error("somthing went wrong");
    }
  };

  const editHandler = (data) => {
    navigate("/admin-product-form", { state: data });
  };

  return (
    <div className="overflow-x-auto mt-10">
      <Table>
        <TableHead>
          <TableHeadCell>Sr.no</TableHeadCell>
          <TableHeadCell>Image</TableHeadCell>
          <TableHeadCell>Product name</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Category</TableHeadCell>
          <TableHeadCell>Color</TableHeadCell>
          <TableHeadCell>Gender</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
          <TableHeadCell>Rating</TableHeadCell>
          <TableHeadCell>Actions</TableHeadCell>

          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {products.map((product, index) => (
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-16 h-16 object-cover"
                />
              </TableCell>

              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.title}
              </TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product?.category?.join?.(", ")}</TableCell>
              <TableCell>{product?.color?.join?.(", ")}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>
                ${product.price} ({product.discountPercentage}% off)
              </TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>
                <div className="flex gap-2 h-full items-center">
                  <p
                    className="font-medium cursor-pointer text-cyan-600 hover:underline "
                    onClick={() => editHandler(product)}
                  >
                    Edit
                  </p>
                  <p
                    className="font-medium cursor-pointer text-red-400 hover:underline "
                    onClick={() => deleteHandler(product)}
                  >
                    delete
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
