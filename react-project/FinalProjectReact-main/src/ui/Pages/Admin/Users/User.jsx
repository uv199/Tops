import axios from "axios";
import React, { useEffect, useState } from "react";
import { BE_URL } from "../../../../config";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

export default function Users() {
  let [userData, setUserData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}user/getAll`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => {
        setUserData(resData?.data?.data);
        console.log("resData", resData);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>CITY</th>
            <th>STATE</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((e, i) => {
            return (
              <tr key={e?.id}>
                <th scope="row">{i + 1}</th>
                <td style={{ maxWidth: "20vw" }}>{e?.name}</td>
                <td>{e.email}</td>
                <td style={{ maxWidth: "20vw" }} className="text-truncate ">
                  {e?.age}
                </td>
                <td>{e?.address?.[0]?.city || "--"}</td>
                <td>{e?.address?.[0]?.state || "--"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
