import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
import UserForm from "./UserForm";

{
  /* http://localhost:9999/user/getAll */
}
export default function InputDataPost() {
  let [user, setUser] = useState([]);
  let [refresh, setrefresh] = useState(true);

  const refreshData = () => setrefresh(!refresh);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/user/getAll",
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data.data);
        setUser(res.data.data);
        toast.success("get data successfully");
      })
      .catch((error) => {
        console.log("-----------  error----------->", error);
      });
  }, [refresh]);

  return (
    <div className="w-100">
      <UserForm refreshData={refreshData} />
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, i) => {
            return (
              <tr key={e._id}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.userType}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

let data = {
  name: "urvish",
  userType: "customer",
  email: "uvpatel199@gmail.com",
  number: "1213",
  password: "string",
  age: 12,
  address: [
    {
      add: "wefwsdvwfe",
      city: "surat",
      state: "gujarat",
      pinCode: "395007",
    },
  ],
};


// endpoint- baseURL/user/signin 
//  data : email,password -> admin@admin.com - 123456
