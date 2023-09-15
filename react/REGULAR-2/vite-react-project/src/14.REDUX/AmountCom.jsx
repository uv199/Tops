import React, { useState } from "react";
import { connect } from "react-redux";
import { incAmount, incByAmt } from "./redux/amount/Action";
function AmountCom(props) {
  let [num, setNum] = useState(null);
  function addAmtFun() {
    props.incAmount(incByAmt(num));
    setNum("");
  }

  return (
    <>
      <h1>Amount is :{props.x}</h1>
      <button onClick={() => props.incAmount(incAmount())}>INC</button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(+e?.target.value)}
      />
      <button onClick={() => addAmtFun()}>INC-AMT</button>
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
