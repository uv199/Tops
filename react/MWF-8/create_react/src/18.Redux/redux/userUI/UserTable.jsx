import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

function UserTable({ userArr, getData }) {
  // console.log("props", props);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(userArr);
  useEffect(() => {
    let filterdData = userArr.filter((e) => e?.name?.includes?.(searchText));
    setData(filterdData);
  }, [searchText]);

  return (
    <>
      {userArr.length > 0 ? (
        <>
          <div className="d-flex w-100 justify-content-around ">
            <h1 className="w-50 ">USER DATA TABLE</h1>
            <input
              type="text"
              placeholder="Search your text here"
              className="w-25"
              onChange={(e) => setSearchText(e?.target?.value)}
            />
          </div>
          <Table className="mt-5" dark>
            <thead>
              <tr>
                <th>SR.</th>
                <th>NAME</th>
                <th>AGE</th>
              </tr>
            </thead>
            <tbody>
              {data?.map?.((e, i) => {
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
      ) : (
        <h1>DATA NOT AVAILABLE....!</h1>
      )}
    </>
  );
}

const toStateToProps = (state) => {
  console.log("state--->", state);
  return {
    userArr: state.USER,
  };
};
const toDispatchToProps = (disptach) => {
  return {
    getData: disptach,
  };
};
export default connect(toStateToProps, toDispatchToProps)(UserTable);
