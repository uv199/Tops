import React, { Component } from "react";

export default class ClassComState extends Component {
  constructor() {
    super();
    //  state must takes object or null
    this.state = {
      count: 999,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">Count is {this.state.count}</h1>
        <button className="border px-2 py-1" onClick={() => this.increment()}>
          Inc
        </button>
      </div>
    );
  }
}
