import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ClassComState extends Component {
  constructor() {
    super();
    this.state = { count: 999, amount: 99 }; // prefer obj otherwise null
  }

  incCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        ClassComState
        <h1>Count is {this.state.count} </h1>
        <Button onClick={() => this.incCount()}>INC</Button>
        <hr />
        <h1>Count is {this.state.amount} </h1>
        <Button
          onClick={() => this.setState({ amount: this.state.amount + 1 })}
        >
          INC
        </Button>
      </div>
    );
  }
}

/*
let obj = {
  a: 10,
  b: 20,
};

obj = {
    ...obj,
  a: obj.a + 1,
};

{
    a:11
}
*/
