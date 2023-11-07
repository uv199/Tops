import React, { Component } from "react";
import { Button } from "reactstrap";

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    console.log("<------constructor----->");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("<------componentDidMounts----->");
  }

  componentDidUpdate() {
    console.log("<------componentDidUpdate----->");
  }

  render() {
    console.log("<------render----->");
    return (
      <div>
        <h1>LifeCycleMethod</h1>
        <h1>Count is {this.state.count}</h1>
        {/*  this.setState(1)  // remember */}
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Inc
        </Button>
      </div>
    );
  }
}
