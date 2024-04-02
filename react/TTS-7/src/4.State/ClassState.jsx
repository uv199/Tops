import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
      amount: 400,
    }; // null or object
  }

  incCount() {
    this.setState({ count: this.state.count + 1 });
  }

  incAmount() {
    this.setState({ amount: 600 });
  }
  render() {
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <Button onClick={() => this.incCount()}>INC</Button>
        <hr />
        <h1>Amount is {this.state.amount}</h1>
        <Button onClick={() => this.incAmount()}>INC</Button>
      </div>
    );
  }
}
