import React from "react";
import { Table } from "reactstrap";

export default function DataTable({ userArray, toggle }) {
  const updateHandler = () => {
    toggle();
  };

  return (
    <div className="m-3">
      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>Hobby</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userArray?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
                <td>
                  {e?.hobby?.map?.((hobby, index) => {
                    return <li key={index}>{hobby}</li>;
                  })}
                </td>
                <td>
                  <i
                    onClick={() => updateHandler()}
                    role="button"
                    className="bi bi-pencil-square me-2"
                  ></i>
                  <i role="button" className="bi bi-x-circle"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
