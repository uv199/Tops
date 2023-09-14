import React from "react";
import { connect } from "react-redux";
import { incCount } from "./redux/count/action";

function CountCom(props) {
  console.log("props", props);
  return (
    <>
      <h1>count is :{props.count}</h1>
      <button onClick={() => props.inc(incCount())}>INC</button>
    </>
  );
}

const toStateToProps = (state) => {
  console.log("state", state)
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
