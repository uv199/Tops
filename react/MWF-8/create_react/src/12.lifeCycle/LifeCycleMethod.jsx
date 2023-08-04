import React, { Component } from "react";
import Unmount from "./Unmount";

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("-----constructor-----");
  }

  update() {
    this.setState({ count: this.state.count + 1 });
    // this.setState({ count: 0 });
  }

  componentDidMount() {
    console.log("-----componentDidMount-----");
    // api calling and subcribe events
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("-----componentDidUpdate-----", prevProps, prevState);
    if (this.state.count === prevState.count) {
      alert("both are same");
    }
    if (this.state.count > 10) {
      this.setState({ count: 0 });
      alert("count finished...!");
    }
  }

  render() {
    {
      console.log("-----render-----");
    }
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.update()}>Count Inc</button>
        {this.state.count < 5 ? <Unmount /> : <h1>Not show</h1>}
      </>
    );
  }
}
