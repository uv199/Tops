import { Button } from "@material-tailwind/react";
import React, { Component } from "react";
import UnmountCom from "./UnmountCom";

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    this.state = { count: 10 };
    console.log("-----------constructor----------->");
  }

  componentDidMount() {
    console.log("-----------componentDidMount----------->");
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("-----------componentDidUpdate----------->");
    //  this.setState({ count: 800 });
  }

  render() {
    console.log("-----------render----------->");

    return (
      <div>
        LifeCycleMethod
        <h1>Count is {this.state.count}</h1>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Inc
        </Button>
        {this.state.count === 10 ? <UnmountCom /> : null}
      </div>
    );
  }
}
