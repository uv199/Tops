import { Search } from "lucide-react";
import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";
import ProductModal from "../../../components/Modal/ProductModal";

export default function AllProduct() {
  let [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <ProductModal modal={modal} toggle={toggle} />
      <div style={{ backgroundColor: "lightgrey" }} className="m-3 p-3">
        <div className="d-flex justify-content-end align-items-center">
          <Input
            className="w-25 me-2"
            placeholder={"Search your text here.."}
          />
          <Button onClick={toggle}>Add Product</Button>
        </div>
        <hr />
        <Table striped>
          <thead>
            <tr>
              <th>SR</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>NUMBER</th>
              <th>CITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>"test</td>
              <td>test</td>
              <td>test</td>
              <td>{"city name"}</td>
              <td></td>
            </tr>
            {/* {user?.map?.((e, i) => {
              return (
                <tr key={e?._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.number}</td>
                  <td>{"city name"}</td>
                  <td>
                    <Eye role="button" color="#747272" />
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </Table>
      </div>
    </>
  );
}
