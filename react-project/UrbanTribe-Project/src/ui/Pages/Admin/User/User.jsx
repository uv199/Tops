import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export default function User() {
  let [user, setUser] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/user/getAll",
    })
      .then((res) => {
        setUser(res?.data?.data);
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  }, []);

  return (
    <div className="m-10">
      <Table striped className="border">
        <TableHead className="[&_*]:!bg-slate-300">
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>City</TableHeadCell>
          <TableHeadCell>Contact Number</TableHeadCell>

          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {user.map((user) => {
            if (user.userType !== "admin") {
              return (
                <TableRow
                  key={user?._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell>{user?.name}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell>{user?.number}</TableCell>
                  <TableCell>{user?.address?.[0]?.city}</TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </div>
  );
}
