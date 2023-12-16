import React, { Component } from "react";
import { Button } from "reactstrap";

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 200,
    };
    console.log("-----------  constructor----------->");
  }

  componentDidMount() {
    console.log("-----------  componentDidMount----------->");
  }

  render() {
    console.log("-----------  render----------->");

    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          INC
        </Button>
      </div>
    );
  }
}
