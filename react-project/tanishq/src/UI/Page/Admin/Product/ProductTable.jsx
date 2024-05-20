import React from "react";
import { Select, Table } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import ReactPaginate from "react-paginate";
import { FaEye } from "react-icons/fa";
export default function ProductTable({
  updateHandler,
  deleteHandler,
  allProduct,
  openModal,
  setPagination,
  pagination,
  searchQuery,
  viewHandler,
}) {
  const sizeData = ["1.5", "2", "3", "4"];
  const handlePageClick = (event) => {
    setPagination({ ...pagination, page: event?.selected + 1 });
  };
  return (
    <div>
      <div className="py-8">
        <Table responsive>
          <thead>
            <tr className="text-2xl text-black bg-[#d6b8b9e2] ">
              <th>Sr.No</th>
              <th>Image</th>
              <th>Title </th>
              <th>Gender</th>
              <th>Price</th>
              <th>category</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-lg ">
            {allProduct?.map?.((e, i) => {
              return (
                <tr key={i} className="border-b-[2px] ">
                  <td scope="row" className="px-[2rem] py-8">
                    {pagination.page === 1
                      ? i + 1
                      : pagination.limit * pagination?.page +
                        (i + 1) -
                        pagination.limit}
                  </td>
                  <td>
                    <img src={e?.thumbnail} className="w-[70px] h-[70px]" />
                  </td>
                  <td className="capitalize">{e?.title}</td>
                  <td className="capitalize">{e?.gender}</td>
                  <td>{e?.price}</td>

                  <td className="">
                    <div className="grid  text-uppercase">
                      {e?.category?.map?.((category, i) => (
                        <th key={i} className="capitalize">
                          {category}
                        </th>
                      ))}
                    </div>
                  </td>

                  <td className="">
                    <div className="flex gap-2">
                      {sizeData?.map((size, i) => (
                        <span
                          key={i}
                          className={
                            e?.size?.includes(size)
                              ? ` rounded-3xl h-[40px] w-[40px] flex justify-center items-center p-3 font-semibold text-black bg-gray-200`
                              : " rounded-3xl h-[40px] w-[40px] flex justify-center items-center p-3 font-semibold text-gray-400 bg-gray-100"
                          }
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-3">
                      <FaEye
                        className="text-2xl cursor-pointer text-green-500"
                        onClick={viewHandler}
                      />
                      <FaRegEdit
                        className="text-blue-700 text-2xl cursor-pointer "
                        onClick={() => updateHandler(e)}
                      />
                      <RiDeleteBin5Line
                        className="text-danger text-2xl text-red-600 cursor-pointer"
                        onClick={() => deleteHandler(e._id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="flex justify-center gap-4">
        <ReactPaginate
          className="flex items-center  gap-2 "
          pageLinkClassName="border p-3"
          nextLinkClassName="border bg-blue-600 text-white  p-3 text-xl"
          previousLinkClassName="border bg-blue-600 text-white text-xl  p-3"
          activeLinkClassName="bg-red-500 text-white  "
          disabledLinkClassName="!bg-blue-200"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pagination.totalProduct / pagination?.limit}
          previousLabel="< "
          renderOnZeroPageCount={null}
        />
        <Select
          onChange={(e) =>
            setPagination({ ...pagination, limit: e?.target?.value, page: 1 })
          }
        >
          <option defaultChecked>10</option>
          <option>15</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </Select>
      </div>
    </div>
  );
}
