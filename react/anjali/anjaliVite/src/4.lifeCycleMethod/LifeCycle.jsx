import React, { Component } from "react";
import { Button } from "reactstrap";
import Unmount from "./Unmount";

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 5,
    };
    console.log("-----------constructor----------->");
  }

  componentDidMount() {
    console.log("-----------  componentDidMount----------->");
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("-----------  componentDidUpdate----------->");
    console.log("-----------  oldState----------->", oldState);
    // this.setState({ count: this.state.count + 1 }); // not update state inside componentDidUpdate without proper condition
    if (oldState.count === this.state.count) {
      alert("you are updateting same state");
    } else {
      // call api
    }
    // console.log("-----------  oldProps----------->", oldProps);
  }

  render() {
    console.log("-----------  render----------->");

    return (
      <div>
        {this.state.count < 10 ? <Unmount /> : null}
        <h1>Count is {this.state.count}</h1>
        <Button
          className="m-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          INC
        </Button>
        <Button onClick={() => this.setState({ count: this.state.count })}>
          INC-SAME
        </Button>
      </div>
    );
  }
}
