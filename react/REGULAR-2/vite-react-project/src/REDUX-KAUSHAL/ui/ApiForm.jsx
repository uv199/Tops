import { Button } from "reactstrap";
import React, { useState } from "react";
import { addUserIdByApi } from "../redux/user/action";
import { connect } from "react-redux";

function ApiForm({ dispatch }) {
  // distructure meanse props {dispatch}
  let [id, setId] = useState(0);
  function addData(params) {
    dispatch(addUserIdByApi(id));
    // props.dispatch = props import
    // dispatch ={dispatch} import
  }
  return (
    <>
      add id :
      <input type="text" onChange={(e) => setId(e?.target?.value)} />
      <br />
      <Button className="m-4" color="danger" onClick={() => addData()}>
        add user from api
      </Button>
    </>
  );
}

const toDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    dispatch,
  };
};

export default connect(null, toDispatchToProps)(ApiForm);
