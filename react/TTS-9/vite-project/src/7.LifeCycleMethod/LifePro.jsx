import React, { Component } from "react";
import { Button } from "reactstrap";
// import imgURL from "../assets/img.webp";

export default class LifePro extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      count: 0,
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidUpdate(preProps, preState) {
    if (this.state.count === 5 && preState.color !== "red") {
      alert("Color is chnaged");
      this.setState({ color: "red" });
    }
  }

  render() {
    return (
      <>
        <img src="../../public/assets/img.webp" alt="" />
        <img src="../../public/vite.svg" alt="" />
        {/* <img src={imgURL} alt="" /> */}
        <h1 style={{ color: this.state.color }}>Count is {this.state.count}</h1>
        <Button onClick={() => this.incrementCount()}>INCREMENT</Button>
      </>
    );
  }
}
