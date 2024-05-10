import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ClassComState extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
      amount: 900,
    };
  }

  render() {
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Inc
        </Button>
        <hr />
        <h1>Amount is {this.state.amount}</h1>
        <Button
          onClick={() => this.setState({ amount: this.state.amount + 1 })}
        >
          Inc
        </Button>
      </div>
    );
  }
}
