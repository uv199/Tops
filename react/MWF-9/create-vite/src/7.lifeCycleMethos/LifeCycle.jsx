import React, { Component } from "react";
import { Button } from "reactstrap";
import ComponentUnMount from "./ComponentUnMount";

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("-----constructor----->");
  }

  // componentDidMount
  componentDidMount() {
    console.log("-----componentDidMount----->");
  }

  // componentDidUpdate
  componentDidUpdate(oldProps, oldState) {
    // console.log("oldState", oldState);
    // console.log("oldProps", oldProps);
    console.log("-----componentDidUpdate----->");
    if (this.state.count > 5) {
      alert("count is grater then 5");
    }
  }

  render() {
    console.log("-----renders----->");
    return (
      <>
        <h1>LifeCycle</h1>
        <h1>Count is {this.state.count}</h1>
        <Button
          color="danger"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          INC
        </Button>

        {this.state.count < 5 && <ComponentUnMount />}
      </>
    );
  }
}
