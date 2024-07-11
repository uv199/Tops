import { Button } from "@material-tailwind/react";
import React, { Component } from "react";

export default class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
    };
  }

  incrementHandler() {
    console.log("--incrementHandler---");
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <h1>Count is {this.state.count}</h1>
        <Button onClick={() => this.incrementHandler()}>Inc+</Button>
      </>
    );
  }
}
