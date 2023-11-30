import React, { useState } from "react";
import { Button, Table } from "reactstrap";

export default function Multipul() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [alluser, setAlluser] = useState([]);

  const task = (e) => {
    setAlluser([...alluser, user]);
    setUser({});
  };

  return (
    <>
      <div>
        <input
          value={user.email}
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          value={user.password}
          type="text"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button onClick={(e) => task(e)}>Click</Button>
      </div>
      {
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {alluser.map((userData, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{userData.email}</td>
                <td>{userData.password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      }
    </>
  );
}
