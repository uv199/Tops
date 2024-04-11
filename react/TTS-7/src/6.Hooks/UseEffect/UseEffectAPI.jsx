import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Eye } from "react-feather";
import ModalCom from "./ModalCom";

export default function UseEffectAPI() {
  let [data, setData] = useState([]);
  let [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((res) => {
      setData(res?.data);
    });
  }, []);

  const previewHandler = (e) => {
    console.log("-----------  e----------->", e);
    setProduct(e);
    toggle();
  };
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>
                  <img
                    style={{ height: "40px" }}
                    src={e.image}
                    alt=""
                    srcset=""
                  />
                </td>
                <td>{e.title}</td>
                <td>{e.rating.rate}</td>
                <td>
                  <Eye role="button" onClick={() => previewHandler(e)} />
                </td>
              </tr>
            );
          })}
        </tbody>
        <ModalCom modal={modal} toggle={toggle} product={product} />
      </Table>
    </div>
  );
}
