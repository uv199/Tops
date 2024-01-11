import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function DataTable() {
  let [data, setData] = useState([]);
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
  }, []);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Sr.</th>
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
              <td>
                <img style={{width:"100px"}} src={e?.thumbnail} />
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
