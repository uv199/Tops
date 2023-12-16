import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function ManoharRecucer() {
  const redeuser = (state, action) => {
    if (action == "ing") {
      return { count: state.count + 1 };
    } else if (action == "dec") {
      return { count: state.count - 1 };
    } else if (action == "reset") {
      return { count: 1000 };
    } else if (action == "ing_amt") {
      return { amount: state.amount + 1 };
    } else {
      return { count: state.count };
    }
  };
  const [count, dispach] = useReducer(redeuser, { count: 1000, amount: 2000 });
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "50px 0px" }}>
        Count: {count.count}
        Amount-: {count.amount}
      </h1>

      <Button onClick={() => dispach("ing")}>inc </Button>
      <Button onClick={() => dispach("dec")}>sub </Button>
      <Button onClick={() => dispach("reset")}>Reset </Button>
      <Button onClick={() => dispach("decff")}>worng </Button>
      <br />
      <Button onClick={() => dispach("ing_amt")}>inc - amt </Button>
      {/* <Button onClick={() => dispach("dec")}>sub </Button>
      <Button onClick={() => dispach("reset")}>Reset </Button>
      <Button onClick={() => dispach("decff")}>worng </Button> */}
    </div>
  );
}
