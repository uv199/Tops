import React, { Component } from "react";
import { Button } from "reactstrap";

export default class UseStateClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 999,
    };
  }

  incrementCount() {
    console.log("-----inc----");
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <h1>UseStateClass</h1>
        <h1>Count is {this.state.count}</h1>
        <Button color="danger" onClick={() => this.incrementCount()}>
          Increment
        </Button>
        <br />
        <Button
        
          color="danger"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Decrement
        </Button>
      </>
    );
  }
}
