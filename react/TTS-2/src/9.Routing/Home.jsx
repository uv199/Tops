import axios from "axios";
import { Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "reactstrap";

export default function Home() {
  let [ProductData, setProductData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const Apihandler = async () => {
      let response = await axios.get("https://fakestoreapi.com/products");
      setProductData(response.data);
    };
    Apihandler();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => navigate("/about")}>Go to about</Button>
      <div>
        <Table>
          <thead>
            <tr>
              <th>sr</th>
              <th>category</th>
              <th>image</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ProductData.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.category}</td>
                  <td>
                    <img className="h-10" src={e.image} alt="" />
                  </td>
                  <td>{e.price}</td>
                  <td>
                    <Eye onClick={() => navigate("/product/" + e.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
