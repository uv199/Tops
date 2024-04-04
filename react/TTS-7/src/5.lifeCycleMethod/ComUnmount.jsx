import React, { Component } from "react";

export default class ComUnmount extends Component {
  componentWillUnmount() {
    console.log("-----------  componentWillUnmount----------->");
    alert("componenet is removing");
  }
  render() {
    return <h1>ComUnmount</h1>;
  }
}
