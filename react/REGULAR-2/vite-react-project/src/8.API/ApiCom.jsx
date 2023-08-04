import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

import axios from "axios";

export default function ApiCom() {
  let [data, setData] = useState([]);

  function callApi() {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
    })
      .then((response) => {
        setData(response.data);
        // console.log(response);
      })
      .catch((e) => {
        alert(e.message);
        // console.log(e.message);
      });

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((data) => {
    //     console.log("--->", data.data);
    //     setData(data.data);
    //   })
    //   .catch((e) => {
    //     alert(e.message);
    //     // console.log(e.message);
    //   });
  }
  return (
    <>
      <Button onClick={() => callApi()} variant="primary">
        Call Api
      </Button>
      {data.length > 0 ? (
        <Table className="  mt-4" striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.address.city}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}
