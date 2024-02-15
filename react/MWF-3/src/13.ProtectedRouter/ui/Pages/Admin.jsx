import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function Admin() {
  let [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("userData") || "[]"));
  }, []);
  console.log("-----------  data----------->", data);
  return (
    <div className="m-5">
      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
                <td>{e?.userType}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
