import axios from "axios";
import {
  Dropdown,
  Flowbite,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PreviewData from "./PreviewData";
import "./index.css";

const defaultImage =
  "https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq";

const size = ["S", "M", "L", "XL"];

export default function ProductTable({
  isRefresh,
  refetch,
  setUpdatedData,
  toggle,
}) {
  let [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [previewData, setPreviewData] = useState({});
  const [paginate, setPaginate] = useState({
    totalProduct: 0,
    page: 0,
    limit: 10,
  });
  let id;
  const onPageChange = (page) => {
    clearTimeout(id);
    id = setTimeout(() => {
      setPaginate({ ...paginate, page: page - 1 });
    }, 200);
  };

  const getSearchInput = (e) => {
    setSearch(e?.target?.value);
    setPaginate({ page: 0, limit: 10 });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAllPaginate",
      params: {
        page: paginate.page || 1,
        limit: paginate.limit,
        search: search,
      },
    })
      .then((res) => {
        console.log("-----------  res?.data----------->", res?.data);
        setData(res?.data?.data);
        setPaginate({ ...paginate, totalProduct: res?.data?.count });
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  }, [isRefresh, paginate.page, paginate.limit, search]);

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

  const updateHandler = (product) => {
    toggle();
    setUpdatedData(product);
  };

  const previewHandler = (data) => {
    setModal(true);
    setPreviewData(data);
  };

  const customTheme = {
    pages: {
      selector: {
        active: "bg-blue-500 hover:bg-red-600",
      },
    },
  };
  return (
    <div className="m-10">
      <div className="flex justify-end">
        <TextInput
          onChange={(e) => getSearchInput(e)}
          type="email"
          value={search}
          placeholder="Search your text hear..."
          className="w-1/3 mb-4"
          required
        />
      </div>
      <PreviewData
        setModal={setModal}
        modal={modal}
        previewData={previewData}
      />

      <Table striped className="border">
        <TableHead className="[&_*]:!bg-slate-300">
          <TableHeadCell>Sr. no.</TableHeadCell>
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
          {data.map((product, i) => {
            return (
              <TableRow
                key={product?._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell>{i + 1 + paginate.page * 10}</TableCell>
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
                      let include = product.size.includes(e);
                      return (
                        <div
                          key={i}
                          style={{
                            color: include ? "black" : "gray",
                            border: include
                              ? "1.5px solid black"
                              : "1.5px solid gray",
                          }}
                          className="relative grid place-content-center mr-1 rounded-xl w-[25px] h-[25px] border border-black text-black "
                        >
                          {e}
                          {!include && (
                            <hr className="absolute top-[50%] rotate-[40deg] !m-0 w-full border border-gray-500 " />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3 [&>p]:cursor-pointer">
                    <p
                      className="underline text-green-500"
                      onClick={() => previewHandler(product)}
                    >
                      Preview
                    </p>
                    <p
                      className="underline text-blue-800"
                      onClick={() => updateHandler(product)}
                    >
                      Edit
                    </p>
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
      <div className="flex justify-end my-4 items-end gap-3">
        <div className="border-2 rounded-lg overflow-hidden max-h-[40px]">
          <Dropdown
            color={"white"}
            outline={true}
            label={`Page ${paginate?.limit}`}
            className="border hover:bg-gray-400"
            placement="top"
          >
            {[10, 20, 50, 100]?.map?.((e, i) => {
              return (
                <Dropdown.Item
                  onClick={() => setPaginate({ ...paginate, limit: e })}
                >
                  {e}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>
        <Flowbite theme={{ theme: customTheme }}>
          <Pagination
            currentPage={paginate?.page || 1}
            totalPages={
              Math.ceil(paginate?.totalProduct / paginate?.limit) || 10
            }
            onPageChange={onPageChange}
            showIcons
            // active="bg-red-500 font-bold"
          />
        </Flowbite>
      </div>
    </div>
  );
}
