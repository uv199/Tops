import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { inc } from "./redux/amount/action";

function AmountCom(props) {
  console.log("----->props", props);
  return (
    <>
      <h1>COUNT IS : {props.amount}</h1>
      <Button
        className="mt-2"
        variant="success"
        onClick={() => props?.add(inc())}
      >
        INC
      </Button>
    </>
  );
}
const toStateToProps = (state) => {
  console.log("state", state)
  return {
    amount: state.AMOUNT.amount,
  };
};

const toDispatchToProps = (dispatch) => {
  return {
    add: (action) => dispatch(action),
  };
};

export default connect(toStateToProps, toDispatchToProps)(AmountCom);
