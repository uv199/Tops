import { Eye, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

export default function ProductTable() {
  const [productData, setProductData] = useState([]);
  const fetchData = useSelector((state) => state.productReducer.product);

  useEffect(() => {
    setProductData(fetchData);
  }, [fetchData]);

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
                  <Eye type="button" color="#8d8686" />
                  <Trash2 type="button" className="ms-4" color="#fd3a3a" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
