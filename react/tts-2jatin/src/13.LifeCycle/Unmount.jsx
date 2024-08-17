import React, { Component } from "react";

export default class Unmount extends Component {
  componentWillUnmount() {
    console.log("-----------  componentWillUnmount----------->");
    alert("Componenet removing");
  }
  render() {
    return <div>Unmount</div>;
  }
}
