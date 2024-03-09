import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ClassComState extends Component {
  constructor() {
    super();
    this.state = {
      count: 999,
    };
  }

  incrementMethod() {
    console.log("----->.");
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <>
        <h1>classComState</h1>
        <h1>count is {this?.state?.count}</h1>
        <Button color="danger" onClick={() => this.incrementMethod()}>
          increment
        </Button>
      </>
    );
  }
}
