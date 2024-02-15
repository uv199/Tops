import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import axios from "axios";
import { CloudFogFill } from "react-bootstrap-icons";

export default function ApiRevise() {
  let [product, setProduct] = useState([]);
  //   const callApi = () => {
  //     axios({
  //       method: "get",
  //       url: "https://fakestoreapi.com/products",
  //     })
  //       .then((res) => {
  //         console.log("---res-->", res.data);
  //         setProduct(res?.data);
  //       })
  //       .catch((err) => {
  //         console.log("err", err);
  //       });
  //   };

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log("---res-->", res.data);
        setProduct(res?.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      {/* <Button color="danger" onClick={() => callApi()}>
        Call API
      </Button> */}
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>IMAGE</th>
            <th>TITLE</th>
          </tr>
        </thead>
        <tbody>
          {product.map((e) => {
            return (
              <>
                <tr>
                  <td>{e?.id}</td>
                  <td>
                    <img width={30} src={e.image} alt="" />
                  </td>
                  <td>{e?.title}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
