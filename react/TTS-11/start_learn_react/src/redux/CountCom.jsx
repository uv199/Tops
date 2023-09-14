import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { incCount, incCountByVal } from "./redux/count/action";

function CountCom(props) {
  let [number, setNumber] = useState("");

  function getNumber(e) {
    setNumber(e?.target?.value);
  }

  function addNumber() {
    props?.add_count(incCountByVal(+number));
    setNumber("");
  }
  console.log("number", number);
  return (
    <>
      <h1>COUNT IS : {props.count} </h1>
      <Button
        className="mt-2  w-25"
        variant="success"
        onClick={() => props?.add_count(incCount())}
      >
        INC
      </Button>
      <div className="d-flex flex-column  w-25 mt-4">
        <input type="number" value={number} onChange={(e) => getNumber(e)} />
        <Button className="mt-2" variant="success" onClick={() => addNumber()}>
          INC BY VALUE
        </Button>
      </div>
    </>
  );
}

const toStateToProps = (state) => {
  return {
    count: state?.COUNT?.count,
  };
};

const toDispatchToProps = (dispatch) => {
  return {
    add_count: dispatch,
  };
};

export default connect(toStateToProps, toDispatchToProps)(CountCom);
