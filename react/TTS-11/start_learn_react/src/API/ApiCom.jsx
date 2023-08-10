import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";

export default function ApiCom() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("err----", err.message);
      });
  }, []);

  return (
    <>
      <h1>API - COM</h1>
      <Button className="mt-2" onClick={() => apiCall()} variant="primary">
        Add Name
      </Button>
      {data.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>name</th>
              <th>userName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={e.id}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}
