import { Button, Table } from "reactstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./features/User/userSlice";

export default function UserCom() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.USER);
  console.log("userData", userData);

  return (
    <>
      <h1>UserCom</h1>
      <Button color="danger" onClick={() => dispatch(fetchUser())}>
        Call-API
      </Button>
      {userData?.err?.length > 0 ? (
        <h1>{userData.err}</h1>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>SR.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>CITY</th>
            </tr>
          </thead>
          <tbody>
            {userData?.user?.map?.((e, i) => {
              return (
                <tr key={e?.id}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.address?.city}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
}
