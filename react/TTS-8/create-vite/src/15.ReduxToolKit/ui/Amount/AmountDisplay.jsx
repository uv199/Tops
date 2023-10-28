import React from "react";
import { connect } from "react-redux";

function AmountDisplay(props) {
  return (
    <>
      <h1>Amount is {props.amount}</h1>
    </>
  );
}

const toStatetoProps = (state) => {
  console.log("state", state);
  return {
    amount: state.AMT.amount,
  };
};

export default connect(toStatetoProps)(AmountDisplay);
