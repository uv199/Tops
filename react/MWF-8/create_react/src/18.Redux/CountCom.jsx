import React from "react";
import { add } from "./redux/count/action";
import { connect } from "react-redux";

function CountCom(props) {
  console.log("---->", props);
  return (
    <>
      <h1>Count is {props.count}</h1>
      <button onClick={() => props.add()}>Increment</button>
    </>
  );
}

const toStatetoProps = (state) => {
  console.log("--+++++--->", state);
  return {
    count: state.COUNT.x,
  };
};

const toDispatchToProps = (dispatch) => {
  //   const add = ();
  return { add: () => dispatch(add()) };
};

export default connect(toStatetoProps, toDispatchToProps)(CountCom);
