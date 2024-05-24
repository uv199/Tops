import React, { Component } from "react";

export default class ChildComponent extends Component {
  componentWillUnmount() {
    console.log("-----------componentWillUnmount----------->");
    alert("Child componenet is removing");
  }
  render() {
    return <h1>ChildComponent</h1>;
  }
}
