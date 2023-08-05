import React, { Component } from "react";

export default class Unmount extends Component {
  componentWillUnmount() {
    console.log("--------componentWillUnmount--------");
    alert("component is removing");
  }
  render() {
    return (
      <>
        <h1>Unmount</h1>
      </>
    );
  }
}
