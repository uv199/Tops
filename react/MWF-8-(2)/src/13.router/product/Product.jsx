import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function Product() {
  let [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  }, []);

  return (
    <div className="m-5">
      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e, i) => {
            return (
              <tr key={e?.id}>
                <th scope="row">{i + 1}</th>
                <td>
                  <img style={{ height: "50px" }} src={e.image} />
                </td>
                <td>{e.title}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => navigate(`/product/${e?.id}`)}
                  >
                    Show Product
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
