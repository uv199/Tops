import axios from "axios";
import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

export default function DataTable() {
  let [data, setData] = useState([]);
  let [call, setCall] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(
          "-----------  err.response.error----------->",
          err.response.error
        );
        toast.error(err.response.error);
      });
  }, [call]);

  const deleteData = (id) => {
    console.log("----------->", id);
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
    })
      .then((res) => {
        toast.success("Product deleted....!");
        setCall(!call);
      })
      .catch((err) => {
        toast.error(err.response.error);
      });
  };

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
                <Trash2
                  onClick={() => deleteData(e?._id)}
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
