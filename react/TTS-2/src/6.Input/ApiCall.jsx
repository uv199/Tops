import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";

// https://fakestoreapi.com/products
export default function ApiCall() {
  let [productData, setProductData] = useState([]);
  console.log("-----------  productData----------->", productData);

  const callApiHandler = async () => {
    let response = await axios.get("https://fakestoreapi.com/products");
    // console.log("-----------  response----------->", response.data);
    setProductData(response.data);
  };

  useEffect(() => {
    callApiHandler();
  }, []);
  return (
    <div>
      {/* <Button onClick={() => callApiHandler()}>Call Api</Button> */}
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((e, i) => {
            console.log("-----------  e----------->", e);
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <img className="h-[50px]" src={e.image} alt="" srcset="" />
                </td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.rating.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}


// https://fakestoreapi.com/products/categories
