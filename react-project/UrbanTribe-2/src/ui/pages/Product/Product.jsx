import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Product() {
  let [product, setProduct] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [count, setCount] = useState(0);
  useEffect(() => {
    async function fetchData(params) {
      try {
        const response = await axios.get(
          "http://localhost:9999/product/getAll",
          {
            params: {
              search: searchText,
            },
          }
        );
        console.log("-----------  response----------->", response.data);
        setCount(response.data.count);
        setProduct(response.data.data);
      } catch (error) {
        console.log("-----------  error----------->", error);
      }
    }
    fetchData();
  }, [searchText]);

  return (
    <div>
      <div className="flex justify-end p-4">
        <h1>Count : {count}</h1>
        <Button className="text-red-500 bg-white border border-gray-500">
          Add Product
        </Button>
      </div>
      <div className="flex justify-end p-4">
        <input
          onChange={(e) => setSearchText(e.target.value)}
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
            {product.map((e, i) => {
              return (
                <tr className="border-b">
                  <td className="border border-gray-300 p-4 text-center">
                    {i + 1}
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    <img src={e?.thumbnail} alt="" className="w-16 h-16 " />
                  </td>
                  <td className="border border-gray-300 p-4 ">{e.title}</td>
                  <td className="border border-gray-300 p-4 ">19991</td>
                  <td className="border border-gray-300 p-4 ">
                    <div className="flex gap-2">
                      {e.color.map((eColor) => {
                        return (
                          <div
                            className="border border-black w-4 h-4 rounded-full"
                            style={{ backgroundColor: eColor }}
                          ></div>
                        );
                      })}
                    </div>
                  </td>
                  <td className="border-gray-300 p-4  ">
                    <div className="flex justify-center gap-2 ">
                      <p className="border border-gray-400 rounded-full h-6 w-6 text-center">
                        S
                      </p>
                      <p className="border border-gray-400 rounded-full h-6 w-6 text-center">
                        M
                      </p>
                      <p className="border border-gray-400 rounded-full h-6 w-6 text-center">
                        L
                      </p>
                      <p className="border border-gray-400 rounded-full h-6 w-6 text-center">
                        Xl
                      </p>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-4   ">
                    <div className=" flex gap-2">
                      <p className="text-green-500 hover:underline ">Preview</p>
                      |<p className="text-blue-500 hover:underline">Edit</p>|
                      <p className="text-red-500 hover:underline">Delete</p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/*
axios.post(url, data, {
  headers: {
    authorization: "bearer " + token,
  },
});
*/
/*
create 
type = post
url = http://localhost:9999/product/create
data = body
auth = true

delete 
type = delete
url = http://localhost:9999/product/delete/665ead7c75869eeae5d3f64d
auth = true

update
type = put
url = http://localhost:9999/product/update/665ead7c75869eeae5d3f64d
data = body
auth = true
*/
