import React, { Component } from "react";

export default class UnmountCom extends Component {
  componentWillUnmount() {
    alert("Componenet removing")
    console.log("-----------  componentWillUnmount----------->");
  }
  render() {
    return <div>UnmountCom</div>;
  }
}
