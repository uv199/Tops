import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import { fetchAllProduct } from "../../../api/product";
import { toast } from "react-toastify";

export default function ProductTable() {
  let [productdata, setProductData] = useState([]);

  useEffect(() => {
    (async function getData() {
      let { data, error } = await fetchAllProduct();
      if (error) toast.error("somthing went wrong");
      else {
        setProductData(data.data);
      }
    })();
  });
  return (
    <div>
      <div className="mx-3 my-5  px-8 ">
        <Table responsive>
          <thead>
            <tr className="text-2xl  bg-[#d6b8b9e2]">
              <th>Sr.No</th>
              <th>Image</th>
              <th>Brand </th>
              <th>Gender</th>
              <th>Price</th>
              <th>category</th>
              <th>Color</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productdata?.map?.((e, i) => {
              return (
                <tr key={i}>
                  <td scope="row" className="px-[2rem]">
                    {i + 1}
                  </td>
                  <td>
                    <img className="h-[50px]" src={e.thumbnail} />
                  </td>
                  <td>{e.brand}</td>
                  <td>{e.gender}</td>
                  <td>{e.price}</td>

                  <td className="">
                    <div className="flex   gap-2 text-uppercase ">
                      <th>{e.category[0]}</th>
                      <th>{e.category[1]}</th>
                      <th>{e.category[2]}</th>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex   gap-2 text-uppercase ">
                      <th>{e.color[0]}</th>
                      <th>{e.color[1]}</th>
                      <th>{e.color[2]}</th>
                    </div>
                  </td>

                  <td className="">
                    <div className="flex    gap-2 ">
                      <th className="border-[1px] p-1 border-black ">
                        {e.size[0]}
                      </th>
                      <th className="border-[1px] p-1 border-black ">
                        {e.size[1]}
                      </th>
                      <th className="border-[1px] p-1 border-black ">
                        {e.size[2]}
                      </th>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-3">
                      <FaRegEdit className="text-success h5 " />
                      <RiDeleteBin5Line className="text-danger h4" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
