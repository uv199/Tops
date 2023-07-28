import React, { Component } from "react";

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    {
      console.log("========constructor========>");
    }
  }
  componentDidMount() {
    {
      console.log("========componentDidMount========>");
    }
  }
  componentDidUpdate() {
    {
      console.log("========componentDidUpdate========>");
    }
  }
  incFun() {
    this.setState({ count: this.state.count + 1 });
  }

  componentWillUnmount() {
    {
      console.log("========componentWillUnmount========>");
    }
  }
  render() {
    {
      console.log("========render========>");
    }

    return (
      <>
        <h1>heding</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incFun()}>Incri</button>
      </>
    );
  }
}
