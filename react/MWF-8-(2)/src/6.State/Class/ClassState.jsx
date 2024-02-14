import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      count: 20,
      amount: 99,
    };
  }

  incCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <Button color="danger" onClick={() => this.incCount()}>
          Count
        </Button>
        <hr />
        <h1>Amount is {this?.state?.amount}</h1>

        <Button
          color="danger"
          onClick={() => this.setState({ amount: this.state.amount + 1 })}
        >
          Count
        </Button>
      </div>
    );
  }
}
