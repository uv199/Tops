import React, { Component } from "react";
import { Button } from "reactstrap";

export default class UseStateClass extends Component {
  constructor() {
    super();
    this.colorArr = ["green", "etc..."];
    this.state = {
      count: 1000,
    };
  }

  incrementHandler() {
    console.log("---->");
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>UseStateClass</h1>
        <h1> count is {this.state.count}</h1>
        <Button color="danger" onClick={() => this.incrementHandler()}>
          INC
        </Button>
      </div>
    );
  }
}

/*
this.state={
    count:1000
}
this.setState({count:this.state.count+1})

*/
