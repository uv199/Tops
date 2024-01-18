import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
export default function SimpleApi() {
  let [data, setData] = useState([]);
    const fetchData = () => {
      axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      })
        .then((res) => {
          setData(res.data);
          console.log("-----------  res----------->", res.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    };

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setData(res.data);
        console.log("-----------  res----------->", res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
    <>
      <h1>SimpleApi</h1>

      <Button color="danger" onClick={fetchData}>
        Call API
      </Button>
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>RATING</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <img style={{ maxHeight: "50px" }} src={e?.image} />
                </td>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>{e?.rating?.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
