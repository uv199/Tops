import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { fetchAPI } from "./fetures/user/userSlice";

export default function UserCOm() {
  const data = useSelector((state) => state.USER);
  console.log("data", data);

  if (data?.loading) {
    return <h1>data is fetcihing....</h1>;
  }
  const dispatch = useDispatch();

  return (
    <>
      <h1>UserCOm</h1>
      <Button color="danger" onClick={() => dispatch(fetchAPI())}>
        API CALL
      </Button>

      {data?.error?.length === 0 ? (
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
            {data?.user?.map?.((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.city || e?.address?.city}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h1>{data.error}</h1>
      )}
    </>
  );
}
