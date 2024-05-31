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
import ReactPaginate from "react-paginate";
import { Input } from "reactstrap";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  let [apiFlag, setApiFlag] = useState(true);
  let [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });
  let [totalProductCount, setTotalProductCount] = useState(10);
  let [searchText, setSearchText] = useState("");

  const refetch = () => setApiFlag(!apiFlag);
  useEffect(() => {
    async function fetchProducts() {
      try {
        let { data } = await instanceApi.get("/product/getAllPaginate", {
          params: { ...pagination, search: searchText },
        });
        setTotalProductCount(data?.count);
        setProducts(data?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, [apiFlag, pagination, searchText]);

  const [cookies] = useCookies(["token"]);

  const navigate = useNavigate();

  const deleteHandler = async (product) => {
    try {
      let response = await instanceApi.delete(
        "/product/delete/" + product?._id,
        null,
        { headers: { authorization: "bearer " + cookies?.token } }
      );
      refetch();
    } catch (error) {
      console.log("-----------  error----------->", error);
      toast.error("somthing went wrong");
    }
  };

  const editHandler = (data) => {
    navigate("/admin-product-form", { state: data });
  };

  const handlePageChnage = (e) => {
    console.log("-----------  e----------->", e);
    setPagination({ ...pagination, page: e?.selected + 1 });
  };

  return (
    <div className="overflow-x-auto mt-10">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageChnage}
        pageRangeDisplayed={5}
        pageCount={totalProductCount / pagination?.limit}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="border border-black p-2"
        className="flex"
      />
      <Input
        onChange={(e) => setSearchText(e?.target?.value)}
        placeholder="Serach by title and description.."
      />
      <Table>
        <TableHead>
          <TableHeadCell>Sr.no</TableHeadCell>
          <TableHeadCell>Image</TableHeadCell>
          <TableHeadCell>Product name</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Category</TableHeadCell>
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


/*

10
25
50
100
*/
