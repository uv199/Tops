import React, { Component } from "react";

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("========constructor========>");
  }

  componentDidMount() {
    console.log("========componentDidMount========>");
  }

  // it will call when component will update
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count > 10) {
      alert("you are corss 10");
      this.setState({ count: 0 });
    }
    console.log("========componentDidUpdate========>", prevProps, prevState);
  }

  // it will call when coponent will remove from dom
  componentWillUnmount() {
    console.log("========componentWillUnmount========>");
  }

  // to update component
  inc() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("========render========>");

    return (
      <>
        <h1>heding</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.inc()}>INC</button>
      </>
    );
  }
}
