import { Table } from "reactstrap";
import React from "react";
import { connect } from "react-redux";

function UserTable(props) {
  console.log("props", props.userData);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>SR.</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
          </tr>
        </thead>
        <tbody>
          {props?.userData.map((e, i) => {
            return (
              <tr key={i}>
                <td scope="row">{i + 1}</td>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

const toStateToProps = (state) => {
  console.log("state", state);
  return {
    userData: state?.USER,
  };
};

export default connect(toStateToProps)(UserTable);
