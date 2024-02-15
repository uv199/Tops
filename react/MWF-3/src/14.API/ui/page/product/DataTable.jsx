import axios from "axios";
import { Edit, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

export default function DataTable({
  productData,
  deleteHandler,
  reFetchData,
  editHandler,
}) {
  let [data, setData] = useState([]);

  useEffect(() => {
    setData(productData);
  }, [productData]);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Sr.</th>
          <th>Action</th>
          <th>Image</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, i) => {
          return (
            <tr key={e?._id}>
              <th scope="row">{i + 1}</th>
              <th>
                <Edit role="button" onClick={() => editHandler(e)} />
                <Trash2
                  onClick={() => deleteHandler(e?._id)}
                  role="button"
                  color="red"
                />
              </th>
              <td>
                <img
                  style={{ width: "100px", height: "80px" }}
                  src={e?.thumbnail}
                />
              </td>
              <td>{e?.title}</td>
              <td>{e?.description}</td>
              <td>{e?.price}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
