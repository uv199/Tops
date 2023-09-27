import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { fetchData } from "./fetures/user/userSlice";

export default function UserCom() {
  const data = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  return (
    <>
      <h1>UserCom</h1>

      <Button color="danger" onClick={() => dispatch(fetchData())}>
        GetData
      </Button>
      <Table>
        <thead>
          <tr>
            <th>SR.</th>
            <th>NAME</th>
            <th>USER NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {data?.user?.map?.((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.username}</td>
                <td>{e?.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
