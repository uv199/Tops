import React from "react";

import userData from "./userData.json";
import { Eye, EyeOff } from "react-feather";
import { Table } from "reactstrap";
import Select from "react-select";

const options = [
  { value: "admin", label: "Admin" },
  { value: "employee", label: "Employee" },
  { value: "user", label: "User" },
];

export default function PasswordHide() {
  return (
    <div>
      <Select options={options} />
      <Table hover>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>
                  <input type="password" disabled value={e.password} />
                </td>
                <td>
                  <Eye /> <EyeOff />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
