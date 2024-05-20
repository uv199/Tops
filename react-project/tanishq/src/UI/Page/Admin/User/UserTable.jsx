import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Table } from 'flowbite-react';
import { fetchAllUser } from '../../../Api/user';

export default function UserTable() {
const [userData,setUserData]=useState([])
  useEffect(() => {
    (async function getData() {
      let { data, error } = await fetchAllUser();
      if (error) toast.error("Something went wrong");
      else {
        setUserData(data.data);
      }
    })();
  }, []);
  return (
    <div>
 <div className="py-8">
        <Table responsive>
          <thead>
            <tr className="text-2xl text-black bg-[#d6b8b9e2] ">
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email </th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody className="text-lg ">
            {userData?.map?.((e, i) => {
              return (
                <tr key={i} className="border-b-[2px] ">
                
                <td className="w-2  text-center py-2">{i+1}</td>
                  <td className="w-[150px] ">{e?.name}</td>
                  <td className="w-20 ">{e?.email}</td>
                  <td  className="w-[200px] ">{e.password}</td>
                  {/* <td>{e?.pincode}</td> */}

                  

                

                  {/* <td>
                    <div className="flex gap-3">
                      <FaEye
                        className="text-2xl cursor-pointer text-green-500"
                      />
                      <FaRegEdit
                        className="text-blue-700 text-2xl cursor-pointer "
                      />
                      <RiDeleteBin5Line
                        className="text-danger text-2xl text-red-600 cursor-pointer"
                      />
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}
