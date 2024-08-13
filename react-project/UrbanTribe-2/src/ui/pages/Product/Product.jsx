import { Button } from "@material-tailwind/react";
import React from "react";

export default function Product() {
  return (
    <div>
      <div className="flex justify-end p-4">
        <Button className="text-red-500 bg-white border border-gray-500">
          Add Product
        </Button>
      </div>
      <div className="flex justify-end p-4">
        <input
          type="text"
          placeholder="Search your text here..."
          className="bg-gray-100 border border-gray-300 rounded-md h-10 w-96 pl-4"
        />
      </div>
      <div className="p-4 ">
        <table className="w-full border border-gray-300 shadow-lg ">
          <thead className="bg-gray-200 text-gray-700 ">
            <tr>
              <th className="border border-gray-300 p-4 text-left">SR. NO.</th>
              <th className="border border-gray-300 p-4 text-left">IMAGE</th>
              <th className="border border-gray-300 p-4 text-left">TITLE</th>
              <th className="border border-gray-300 p-4 text-left">PRICE</th>
              <th className="border border-gray-300 p-4 text-left">COLOR</th>
              <th className="border border-gray-300 p-4 text-left">SIZE</th>
              <th className="border border-gray-300 p-4 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="border border-gray-300 p-4 text-center">1</td>
              <td className="border border-gray-300 p-4 text-center">
                <img src="" alt="" className="w-16 h-16 " />
              </td>
              <td className="border border-gray-300 p-4 ">Nike Air Jordan</td>
              <td className="border border-gray-300 p-4 ">19991</td>
              <td className="border border-gray-300 p-4 ">
                <div className="flex gap-2">
                  <div className=" w-4 h-4 rounded-full bg-red-500"></div>
                  <div className=" w-4 h-4 rounded-full bg-black ml-2"></div>
                  <div className=" w-4 h-4 rounded-full bg-white border border-gray-300 ml-2"></div>
                </div>
              </td>
              <td className=" flex gap-2  border-gray-300 p-4  ">
                <div className="border border-gray-400 rounded-full h-6 w-6 text-center">
                  S
                </div>
                <div className="border border-gray-400 rounded-full h-6 w-6 text-center">
                  M
                </div>
                <div className="border border-gray-400 rounded-full h-6 w-6 text-center">
                  L
                </div>
                <div className="border border-gray-400 rounded-full h-6 w-6 text-center">
                  Xl
                </div>
              </td>
              <td className="border border-gray-300 p-4   ">
                <div className=" flex gap-2">
                  <p className="text-green-500 hover:underline ">Preview</p>|
                  <p className="text-blue-500 hover:underline">Edit</p>|
                  <p className="text-red-500 hover:underline">Delete</p>
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="border border-gray-300 p-4 text-center">2</td>
              <td className="border border-gray-300 p-4 ">
                <img src="" alt="" className="w-16 h-16 " />
              </td>
              <td className="border border-gray-300 p-4 ">Rose Attar</td>
              <td className="border border-gray-300 p-4 ">6743</td>
              <td className="border border-gray-300 p-4 ">
                <div className="flex gap-2">
                  <div className=" w-4 h-4 rounded-full bg-red-500"></div>
                  <div className=" w-4 h-4 rounded-full bg-black ml-2"></div>
                  <div className=" w-4 h-4 rounded-full bg-white border border-gray-300 ml-2"></div>
                </div>
              </td>
              <td className=" flex gap-2  border-gray-300 p-4 ">
                <div className="border border-gray-400 rounded-full h-6 w-6 text-center">
                  S
                </div>
                <div className="border border-gray-400 rounded-full h-6 w-6 text-center">
                  M
                </div>
                <div className="border border-gray-400 rounded-full h-6 w-6 text-center">
                  L
                </div>
                <div className="border border-gray-400 rounded-full h-6 w-6 text-center">
                  Xl
                </div>
              </td>
              <td className="border border-gray-300 p-4   ">
                <div className=" flex gap-2">
                  <p className="text-green-500 hover:underline">Preview</p>|
                  <p className="text-blue-500 hover:underline">Edit</p>|
                  <p className="text-red-500 hover:underline">Delete</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
