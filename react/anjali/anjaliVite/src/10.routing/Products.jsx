import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Products() {
  let [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }, []);

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>RATING</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                  <img style={{ height: "50px" }} src={e?.image} alt="" />
                </td>
                <td>{e?.title}</td>
                <td>{e?.rating?.rate}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => navigate(`${e?.id}`)}
                  >
                    show Product
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
