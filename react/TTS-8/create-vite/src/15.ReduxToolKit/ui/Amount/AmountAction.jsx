import React from "react";
import { connect, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { incAmount } from "../../redux/fetures/amount/amountSlice";

function AmountAction(props) {
  console.log("props", props);
  return (
    <>
      <Button color="danger" onClick={() => props.dispatch(incAmount())}>
        INC
      </Button>
    </>
  );
}

const dispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return { dispatch };
};

export default connect(null, dispatchToProps)(AmountAction);

/*
export default function AmountAction() {
  const dispatch = useDispatch();
  return (
    <>
      <Button color="danger" onClick={() => dispatch(incAmount())}>
        INC
      </Button>
    </>
  );
}
*/
