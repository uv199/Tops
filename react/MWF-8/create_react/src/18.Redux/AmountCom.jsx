import React, { useState } from "react";
import { connect } from "react-redux";
import { incAmtAction, incAmt2Action } from "./redux/amount/action";

function AmountCom(props) {
  const [number, setNumber] = useState(props.arr);

  console.log("props", props);
  return (
    <>
      <h1>Amount-1 : {props.amount1}</h1>
      <button onClick={() => props.addAmount()}>inc-amount</button>
      <h1>Amount-2: {props.amount2}</h1>
      <input type="number" onChange={(e) => setNumber(+e?.target?.value)} />
      <button onClick={() => props?.addAmount2(number)}>add to amt-2</button>
    </>
  );
}

const toStateToProps = (state) => {
  return {
    amount1: state?.AMOUNT?.amount1,
    amount2: state?.AMOUNT?.amount2,
  };
};

const toDispatchToProps = (disptach) => {
  return {
    addAmount: () => disptach(incAmtAction()),
    addAmount2: (no) => disptach(incAmt2Action(no)),
  };
};

export default connect(toStateToProps, toDispatchToProps)(AmountCom);
