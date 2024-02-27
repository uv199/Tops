import axios from "axios";
import { Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "reactstrap";

export default function ProductList() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log("====?>", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((e, i) => {
            return (
              <tr key={e.id}>
                <th scope="row">{i + 1}</th>
                <td>
                  <img style={{ height: "40px" }} src={e.image} />
                </td>
                <td>{e?.title}</td>
                <td>{e?.price}</td>
                <td>
                  <Eye
                    role="button"
                    onClick={() => navigate(`/product/${e.id}`)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
