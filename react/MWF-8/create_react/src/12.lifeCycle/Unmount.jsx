import React, { Component } from "react";

export default class Unmount extends Component {
  componentWillUnmount() {
    console.log("-------componentWillUnmount--------");
    alert("compnent are removing");
  }
  render() {
    return (
      <>
        <h1>componentWillUnmount</h1>
      </>
    );
  }
}
