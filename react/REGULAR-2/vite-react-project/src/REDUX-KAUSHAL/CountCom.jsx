import React, { useState } from "react";
import { connect } from "react-redux";
import { incCount, incCountByValue } from "./redux/count/action";

function CountCom(props) {
  let [no, setNo] = useState("");

  function addData() {
    console.log("--->");
    props.inc(incCountByValue(+no));
    setNo("");
  }
  return (
    <>
      <h1>count is :{props.count}</h1>
      <button onClick={() => props.inc(incCount())}>INC</button>
      <br />
      <br />
      <input
        type="number"
        value={no}
        onChange={(e) => setNo(e?.target?.value)}
      />
      <button onClick={() => addData()}>INC-INPUT</button>
    </>
  );
}

const toStateToProps = (state) => {
  console.log("state", state);
  return {
    count: state.COUNT.count,
  };
};

const toDispatchToProps = (dispatch) => {
  return {
    inc: dispatch,
  };
};

export default connect(toStateToProps, toDispatchToProps)(CountCom);
