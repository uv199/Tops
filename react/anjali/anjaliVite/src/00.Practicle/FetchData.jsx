import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";

export default function FetchData() {
  let [data, setData] = useState([]);
  let [count, setCount] = useState(0);

  useEffect(async () => {
    axios({
      method: "get",
      //   url: "https://fakestoreapi.com/products",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        console.log("------>", res.data.data);
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }, []);

  return (
    <div>
      <h1>Count : {count}</h1>
      <Button onClick={() => setCount(++count)}>INC</Button>
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>RATING</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                  {e?.images?.map?.((e, i) => {
                    return <img style={{ height: "50px" }} src={e} alt="" />;
                  })}
                </td>
                <td>{e?.title}</td>
                <td>{e?.rating?.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
