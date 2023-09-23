import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

function UserCom(props) {
  let [searchText, setSarchText] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    // setData(props?.data);
    if (searchText.length > 0) {
      let filterData = props?.data.filter((e) => {
        return e?.email?.toLowerCase().includes(searchText.toLowerCase());
      });
      setData(filterData);
    } else {
      setData(props?.data);
    }
  }, [props?.data, searchText]);

  return (
    <>
      <div className="d-flex">
        <h1 className="w-75">USER TABLE</h1>
        <input
          className="w-25"
          type="text"
          onChange={(e) => setSarchText(e?.target?.value)}
        />
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>SR.</th>
            <th>EMAIL</th>
            <th>Name</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.email}</td>
                <td>{e?.name}</td>
                <td>{e?.adderess?.city}</td>
                <td>{e?.adderess?.pincode}</td>
                <td>{index === i ? e?.password : "*********"}</td>
                <td>
                  <button
                    onClick={index ? setindex(null) : setindex(i)}
                  ></button>
                </td>
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
