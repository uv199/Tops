import React, { Component } from "react";

export default class Unmount extends Component {
  componentWillUnmount() {
    alert("componenet is removing");
  }
  render() {
    return (
      <div>
        <h1>count is below 10</h1>
      </div>
    );
  }
}
