import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function ProductTable() {
  let [allProduct, setAllProduct] = useState([]);

  // http://localhost:9999/product/getAll
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAll",
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
        setAllProduct(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <Table className="border" striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Size</th>
            <th>Color</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProduct.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <img style={{ height: "40px" }} src={e.thumbnail} alt="" />
                </td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>
                  <div className="d-flex gap-1">
                    {[41, 42, 43, 44, 45].map((size) => {
                      return (
                        <div
                          style={{
                            border: "1px solid black",
                            // color: "gray",
                            padding: "5px",
                          }}
                        >
                          {size}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className="d-flex gap-1">
                    {e?.color?.map?.((color) => {
                      return (
                        <div
                          style={{
                            width: "15px",
                            height: "15px",
                            border: "1px solid darkGray",
                            borderRadius: "50%",
                            background: color,
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </td>
                <td>Otto</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
