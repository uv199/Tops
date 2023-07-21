import React, { Component } from "react";

class ClassState extends Component {
  constructor() {
    super();
    this.x = 0;
    this.state = {
      count: 10,
    };
  }

  fun1(params) {
    this.x++;
    console.log(
      "🚀 ~ file: ClassState.jsx:11 ~ ClassState ~ fun1 ~ x:",
      this.x
    );
  }

  fun2(params) {
    console.log("======>", this.state.count);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.x}</h1>
        <button onClick={() => this.fun1()}>count Inc</button>
        <hr />
        <h1>{this.state.count}</h1>
        <button onClick={() => this.fun2()}>count Inc</button>
      </div>
    );
  }
}

export default ClassState;
