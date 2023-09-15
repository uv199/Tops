import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

function UserTable(props) {
  console.log("props-->", props);
  return (
    <>
      <Table dark>
        <thead>
          <tr>
            <th>SR.</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {props?.userArr?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.age}</td>
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
    userArr: state.USER,
  };
};

export default connect(toStateToProps)(UserTable);
