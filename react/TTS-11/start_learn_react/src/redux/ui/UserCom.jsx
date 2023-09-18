import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

function UserCom(props) {
  console.log("props--->", props.data);
  return (
    <>
      <h1>USER TABLE</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>SR.</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
          </tr>
        </thead>
        <tbody>
          {props?.data?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
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
    data: state.USER,
  };
};
export default connect(toStateToProps)(UserCom);
