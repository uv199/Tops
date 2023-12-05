import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { BE_URL } from "../../../../config";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Eye } from "lucide-react";

export default function User() {
  let [user, setUser] = useState([]);
  let { token } = useSelector((state) => state?.authReducer);
  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}/user/getAll`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        // console.log("-----------  res----------->", res.data.data);
        setUser(res?.data?.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
    <>
      <div className="m-4">
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
            {user?.map?.((e, i) => {
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
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
