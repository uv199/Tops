import { Table } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import ReactPaginate from "react-paginate";
const sizeData = ["1.5", "2", "3", "4"];

export default function ProductTable({
  updateHandler,
  deleteHandler,
  productdata,
  setPagination,
  pagination,
}) {
  const handlePageClick = (event) => {
    setPagination({ ...pagination, page: event?.selected + 1 });
  };
  return (
    <div>
      <div className="mx-3 my-9  px-8 ">
        <Table responsive>
          <thead>
            <tr className="text-2xl text-black bg-[#d6b8b9e2] ">
              <th>Sr.No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Brand </th>
              <th>Gender</th>
              <th>Price</th>
              <th>category</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-lg ">
            {productdata?.map?.((e, i) => {
              return (
                <tr key={i} className="border-b-[2px] ">
                  <td scope="row" className="px-[2rem] py-4">
                    {i + 1}
                  </td>
                  <td scope="row" className="px-[2rem] py-4">
                    {e?.title + 1}
                  </td>
                  <td>
                    <img src={e.thumbnail} className="h-[50px]" />
                  </td>
                  <td className="capitalize">{e.brand}</td>
                  <td className="capitalize">{e.gender}</td>
                  <td>{e.price}</td>

                  <td className="">
                    <div className="grid  text-uppercase">
                      {e?.category?.map((category, i) => (
                        <th key={i} className="capitalize">
                          {category}
                        </th>
                      ))}
                    </div>
                  </td>

                  <td className="">
                    <div className="flex gap-2">
                      {sizeData?.map?.((size, i) => {
                        return (
                          <span
                            key={i}
                            className={
                              e.size.includes(size)
                                ? `border border-black rounded-3xl h-[40px] w-[40px] flex justify-center items-center p-3 font-semibold text-black `
                                : "border border-gray-500 rounded-3xl h-[40px] w-[40px] flex justify-center items-center p-3 font-semibold text-gray-400"
                            }
                          >
                            {size}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-3">
                      <FaRegEdit
                        className="cursor-pointer text-blue-700 text-2xl "
                        onClick={() => updateHandler()}
                      />
                      <RiDeleteBin5Line
                        className="cursor-pointer text-danger text-2xl text-red-600"
                        onClick={() => deleteHandler(e?._id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <ReactPaginate
        className="flex gap-[10px]"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pagination?.totalProduct / pagination?.limit}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
