// https://miro.medium.com/v2/resize:fit:1400/1*6X_7HKFdQoh9eXqWgwQuvQ.png
import React, { Component } from "react";
import Unmount from "./Unmount";

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 0,
    };

    // console.log("---constructor--->");
  }

  updateCount() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    // console.log("---componentDidMount--->");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("count2 :", prevState.count2);
    console.log("this.state.count2:", this.state.count2);
    if (prevState.count2 !== this.state.count2) {
      console.log("----------if if if ------------>");
      this.setState({ ...this.state, count: 10 });
    }
    if (this.state.count === 10) {
      alert("count is 10 ");
    }
    // console.log("---componentDidUpdate--->");
  }

  render() {
    // console.log("---render--->");
    return (
      <>
        <h1>LifeCycle</h1>
        <h3>{this.state.count}</h3>
        <h3>{this.state.count2}</h3>
        {/* {this.state.count < 10 && <Unmount />} */}
        <button onClick={() => this.updateCount()}>INC</button>
        <button onClick={() => this.setState({ ...this.state, count2: 2 })}>
          INC-2
        </button>
      </>
    );
  }
}
