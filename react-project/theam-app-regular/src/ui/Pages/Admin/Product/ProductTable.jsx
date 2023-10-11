import axios from "axios";
import { Eye, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { BE_URL } from "../../../../config";
import { toast } from "react-toastify";
import { removeProduct } from "../../../../redux/features/product/ProductSlice";

export default function ProductTable({ toggle, setFormData, setIndex }) {
  const [productData, setProductData] = useState([]);
  const fetchData = useSelector((state) => state.productReducer.product);

  useEffect(() => {
    setProductData(fetchData);
  }, [fetchData]);

  const updateData = (data, index) => {
    setFormData(data);
    setIndex(index);
    toggle();
  };

  const dispatch = useDispatch();
  function deleteHandler(id, index) {
    console.log("id, index", id, index);
    axios
      .delete(`${BE_URL}/product/delete/${id}`)
      .then((resData) => {
        console.log("res data delete====>", resData);
        dispatch(removeProduct(index));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>DISCOUNT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {productData?.map?.((ele, i) => {
            return (
              <tr key={ele?._id}>
                <th style={{ width: "40px" }} scope="row">
                  {i + 1}
                </th>
                <td style={{ width: "40px" }}>
                  <img
                    style={{ maxHeight: "40px", maxWidth: "100%" }}
                    src={ele?.thumbnail}
                    alt=""
                  />
                </td>
                <td style={{ width: "10%" }}>{ele?.title}</td>
                <td className="w-25">{ele?.description}</td>
                <td style={{ width: "10%" }}>{ele?.price}</td>
                <td style={{ width: "10%" }}>{ele?.discountPercentage}</td>
                <td style={{ width: "10%" }}>
                  <Eye
                    onClick={() => updateData(ele, i)}
                    type="button"
                    color="#8d8686"
                  />
                  <Trash2
                    type="button"
                    className="ms-4"
                    color="#fd3a3a"
                    onClick={() => deleteHandler(ele?._id, i)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
