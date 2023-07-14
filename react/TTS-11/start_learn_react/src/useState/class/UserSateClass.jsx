import React, { Component } from "react";

class UserSateClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.no = 0;
  }
  fun(params) {
    console.log(
      "🚀 ~ file: UserSateClass.jsx:15 ~ UserSateClass ~ fun ~ no:",
      this.no,
      "a ? a.b ? a.b.c : undefined : undefined "
    );
    this.setState({ count: this.state.count++ });
    console.log("---->", this.state.count);
    this.no = this.no + 1;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.fun()}>click me</button>
        <div>{this.no}</div>;<div>{this.state.count}</div>;
      </div>
      // 5+ +"5"
      // 5+"5"
    );
  }
}

export default UserSateClass;
