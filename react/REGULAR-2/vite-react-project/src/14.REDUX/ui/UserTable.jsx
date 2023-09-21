import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

function UserTable(props) {
  return (
    <>
      {props?.userData?.length > 0 ? (
        <>
          <h1>USER DATA TABLE</h1>
          <Table bordered>
            <thead>
              <tr>
                <th>SR</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
              </tr>
            </thead>
            <tbody>
              {props?.userData?.map?.((e, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        <h1>DATA NOT FOUND....!</h1>
      )}
    </>
  );
}

const tostateToProps = (state) => {
  return { userData: state.USER };
};

export default connect(tostateToProps)(UserTable);
