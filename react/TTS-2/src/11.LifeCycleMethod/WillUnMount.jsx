import React, { Component } from "react";

export default class WillUnMount extends Component {
  componentWillUnmount() {
    alert("");
    console.log("-----------  componentWillUnmount----------->");
  }
  render() {
    return (
      <div>
        <h1>Count is less Then 10</h1>
      </div>
    );
  }
}
