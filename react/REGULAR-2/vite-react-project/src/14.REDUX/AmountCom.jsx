import React from "react";
import { connect } from "react-redux";
import { incAmount } from "./redux/amount/Action";
function AmountCom(props) {
  return (
    <>
      <h1>Amount is :{props.x}</h1>
      <button onClick={() => props.incAmount(incAmount())}>INC</button>
    </>
  );
}

const toStateToProps = (state) => {
  return {
    x: state.AMOUNT.amount,
  };
};
const toDispatchToProps = (dispatch) => {
  return {
    incAmount: dispatch,
  };
};

export default connect(toStateToProps, toDispatchToProps)(AmountCom);
