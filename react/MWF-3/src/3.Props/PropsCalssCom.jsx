import React, { Component } from "react";

export default class PropsCalssCom extends Component {
  render() {
    return (
      <div>
        <h1>Hello world...</h1>
        <h1>My name is {this?.props?.data?.name}</h1>
        <h2>My age is {this?.props?.data?.age}</h2>
      </div>
    );
  }
}
