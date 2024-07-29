import React, { Component } from "react";
import { Button } from "reactstrap";
import WillUnMount from "./WillUnMount";

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    console.log("-----------  constructor----------->");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("-----------  componentDidMount----------->");
  }

  componentDidUpdate() {
    console.log("-----------  componentDidUpdate----------->");
  }

  render() {
    console.log("-----------  Render----------->");
    return (
      <div>
        {this.state.count < 10 ? <WillUnMount /> : null}
        <h1>{this.state.count}</h1>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Inc
        </Button>
      </div>
    );
  }
}
