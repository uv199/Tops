import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const defaultImage =
  "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq";

const size = ["s", "m", "l", "xl"];

export default function ProductTable({ isRefresh, refetch }) {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  }, [isRefresh]);

  const deleteHandler = (id) => {
    axios({
      method: "delete",
      url: "http://localhost:9999/product/delete/" + id,
    })
      .then((res) => {
        toast.success("Product deleted..");
        refetch();
      })
      .catch((err) => {
        toast.error("Somthing went wrong..");
        console.log("-----------  err----------->", err);
      });
  };

  return (
    <div className="m-10">
      <Table striped className="border">
        <TableHead className="[&_*]:!bg-slate-300">
          <TableHeadCell>Image</TableHeadCell>
          <TableHeadCell>Titel</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
          <TableHeadCell>Color</TableHeadCell>
          <TableHeadCell>Size</TableHeadCell>
          <TableHeadCell>Action</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {data.map((product) => {
            return (
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell>
                  <img
                    className="h-[70px]"
                    src={product.thumbnail || defaultImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultImage;
                    }}
                  />
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <div className="flex">
                    {product?.color?.map?.((e, i) => {
                      return (
                        <div
                          key={i}
                          style={{ backgroundColor: e }}
                          className="mr-1 rounded-xl w-[15px] h-[15px] border border-black "
                        ></div>
                      );
                    })}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    {size.map((e, i) => {
                      return (
                        <div
                          key={i}
                          style={{}}
                          className="grid place-content-center mr-1 rounded-xl w-[25px] h-[25px] border border-black text-black "
                        >
                          {e}
                        </div>
                      );
                    })}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3 [&>p]:cursor-pointer">
                    <p className="underline text-green-500">Preview</p>
                    <p className="underline text-blue-800">Edit</p>
                    <p
                      onClick={() => deleteHandler(product?._id)}
                      className="underline text-red-800"
                    >
                      Delete
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
