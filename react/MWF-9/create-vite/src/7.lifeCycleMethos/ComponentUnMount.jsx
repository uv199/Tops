import React, { Component } from "react";

export default class ComponentUnMount extends Component {
  componentWillUnmount() {
    console.log("-----componentWillUnmount----->");
    alert("component is removing ....");
  }
  render() {
    return <h1>ComponentUnMount</h1>;
  }
}
