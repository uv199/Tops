import axios from "axios";
import React, { useEffect, useState } from "react";
import { BE_URL } from "../../../../config";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

export default function UserList() {
  let [userArr, setuserArr] = useState([]);
  const token = useSelector((state) => state?.auth?.token);

  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}/user/getAll`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearar ${token}`,
      },
    })
      .then((resData) => {
        console.log("resData", resData);
        setuserArr(resData?.data?.data);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <>
      <div className="p-3">
        <Table striped hover>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>State</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {userArr?.map?.((e, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.age}</td>
                  <td>{e?.address?.[0]?.state}</td>
                  <td>{e?.address?.[0]?.city}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
