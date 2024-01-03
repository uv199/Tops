import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function UserTable() {
  let [data, setData] = useState([]);

  let userData = useSelector((state) => state?.formReducer.users);
  console.log("-----------  userData----------->", userData);
  useEffect(() => {
    setData(userData);
  }, [userData]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>zip</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((user, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{user?.email}</td>
                <td>{user?.password}</td>
                <td>{user?.gender}</td>
                <td>{user?.address}</td>
                <td>{user?.city}</td>
                <td>{user?.state}</td>
                <td>{user?.zip}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
