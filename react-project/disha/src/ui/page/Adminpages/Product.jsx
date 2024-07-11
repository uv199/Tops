import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "reactstrap";

export default function Product() {
  let [flag, setFlag] = useState(true);
  let [productData, setproductData] = useState([]);

  const refetch = () => setFlag(!flag);

  let [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const callApiHandler = async () => {
    try {
      let response = await axios.get("http://localhost:9999/product/getAll");
      setproductData(response?.data?.data);
    } catch (error) {
      console.log("-----------error----------->", error);
    }
  };

  useEffect(() => {
    callApiHandler();
  }, [flag]);

  const deleteHandler = async (id) => {
    try {
      let response = await axios.delete(
        "http://localhost:9999/product/delete/" + id,
        {
          headers: {
            authorization: "bearer " + cookies.token,
          },
        }
      );
      refetch();
    } catch (error) {
      console.log("-----------  error----------->", error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-between my-3 px-3">
        <h1>Product count : {productData.length}</h1>
        <Button onClick={() => navigate("/product-form")}>Add Product</Button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th className="w-[50px]">Sr</th>
            <th className="w-[50px]">Action</th>
            <th className="w-[50px]">Title</th>
            <th className="w-[50px]">Brand</th>
            <th className="w-[50px]">Gender</th>
            <th className="w-[50px]">Price</th>
            <th>Images</th>
            <th>Thumbnail</th>
            <th>Discount %</th>
            <th className="w-[30px]">Category</th>
            <th>Color</th>
            <th>Size</th>
            <th className="w-[50px]">Available Stock</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {productData?.map?.((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <div>
                    <p
                      onClick={() => deleteHandler(e?._id)}
                      className="cursor-pointer text-red-500 underline"
                    >
                      Delete
                    </p>
                    <p className="cursor-pointer text-blue-500 underline">
                      Edit
                    </p>
                  </div>
                </td>
                <td>{e.title}</td>
                <td>{e.brand}</td>
                <td>{e.gender}</td>
                <td>{e.price}</td>
                <td>
                  <img className="h-[50px]" src={e.image} alt="" srcset="" />
                </td>
                <td>
                  <img className="w-[50px]" src={e.thumbnail} alt="" />
                </td>
                <td>{e.discountPercentage}</td>
                <td>
                  {e?.category?.map?.((e) => {
                    return <p>{e}</p>;
                  })}
                </td>
                <td>
                  {e?.color?.map?.((ele) => {
                    return <p>{ele},</p>;
                  })}
                </td>
                <td>
                  {e?.size?.map?.((ele) => {
                    return <p>{ele},</p>;
                  })}
                </td>
                <td>{e.availableStock}</td>
                <td>{e.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
